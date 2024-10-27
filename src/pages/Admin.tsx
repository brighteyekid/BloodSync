import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaTint, FaHandHoldingHeart, FaEnvelope, FaSearch, FaSpinner } from 'react-icons/fa';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bloodRequests');
  const [data, setData] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No auth token found');
        navigate('/admin-login');
        return;
      }

      let endpoint = '';
      switch (activeTab) {
        case 'donationRequests':
          endpoint = '/api/donations';
          break;
        case 'bloodRequests':
          endpoint = '/api/blood-requests';
          break;
        case 'messages':
          endpoint = '/api/messages';
          break;
      }

      const response = await api.get(endpoint, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      console.log('Fetched data:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleView = (id: number) => {
    const item = data.find(item => item.id === id);
    setSelectedItem(item);
  };

  const handleDelete = async (id: number) => {
    try {
      let endpoint = '';
      switch (activeTab) {
        case 'donationRequests':
          endpoint = '/api/donations';
          break;
        case 'bloodRequests':
          endpoint = '/api/blood-requests';
          break;
        case 'messages':
          endpoint = '/api/messages';
          break;
      }
      await api.delete(`${endpoint}/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
      });
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const filterData = (data: any[]) => {
    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <motion.h1 
          className="admin-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admin Dashboard
        </motion.h1>

        <div className="admin-panel">
          <div className="admin-tabs">
            <div className="tab-buttons">
              <TabButton icon={<FaTint />} text="Blood Requests" isActive={activeTab === 'bloodRequests'} onClick={() => setActiveTab('bloodRequests')} />
              <TabButton icon={<FaHandHoldingHeart />} text="Donation Requests" isActive={activeTab === 'donationRequests'} onClick={() => setActiveTab('donationRequests')} />
              <TabButton icon={<FaEnvelope />} text="Messages" isActive={activeTab === 'messages'} onClick={() => setActiveTab('messages')} />
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          {isLoading ? (
            <div className="loading-spinner">
              <FaSpinner className="animate-spin text-4xl text-red-600" />
              <p>Loading data...</p>
            </div>
          ) : (
            <DataTable
              data={filterData(data)}
              activeTab={activeTab}
              onView={handleView}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>

      {selectedItem && (
        <ItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} activeTab={activeTab} />
      )}
    </div>
  );
};

interface DataTableProps {
  data: any[];
  activeTab: string;
  onView: (id: number) => void;
  onDelete: (id: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, activeTab, onView, onDelete }) => {
  switch (activeTab) {
    case 'bloodRequests':
      return <BloodRequestsTable data={data} onView={onView} onDelete={onDelete} />;
    case 'donationRequests':
      return <DonationRequestsTable data={data} onView={onView} onDelete={onDelete} />;
    case 'messages':
      return <MessagesTable data={data} onView={onView} onDelete={onDelete} />;
    default:
      return null;
  }
};

const BloodRequestsTable: React.FC<{ data: any[]; onView: (id: number) => void; onDelete: (id: number) => void }> = ({ data, onView, onDelete }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Blood Type</th>
        <th>Units Needed</th>
        <th>Date Needed</th>
        <th>Urgency</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.bloodType}</td>
          <td>{item.unitsNeeded}</td>
          <td>{formatDate(item.dateNeeded)}</td>
          <td>{item.urgency}</td>
          <td>
            <button className="action-button view" onClick={() => onView(item.id)}>View</button>
            <button className="action-button delete" onClick={() => onDelete(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DonationRequestsTable: React.FC<{ data: any[]; onView: (id: number) => void; onDelete: (id: number) => void }> = ({ data, onView, onDelete }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Blood Type</th>
        <th>Last Donation</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.bloodType}</td>
          <td>{formatDate(item.lastDonation)}</td>
          <td>
            <button className="action-button view" onClick={() => onView(item.id)}>View</button>
            <button className="action-button delete" onClick={() => onDelete(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const MessagesTable: React.FC<{ data: any[]; onView: (id: number) => void; onDelete: (id: number) => void }> = ({ data, onView, onDelete }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>  
          <td>{item.email}</td>
          <td>{item.subject}</td>
          <td>{formatDate(item.createdAt)}</td>
          <td>
            <button className="action-button view" onClick={() => onView(item.id)}>View</button>
            <button className="action-button delete" onClick={() => onDelete(item.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const formatDate = (dateString: string) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
};

const TabButton: React.FC<{ icon: React.ReactNode; text: string; isActive: boolean; onClick: () => void }> = ({ icon, text, isActive, onClick }) => (
  <button
    className={`tab-button ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <span className="tab-button-icon">{icon}</span>
    <span>{text}</span>
  </button>
);

interface ItemDetailsProps {
  item: any;
  onClose: () => void;
  activeTab: string;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item, onClose, activeTab }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">
          {activeTab === 'bloodRequests' ? 'Blood Request Details' :
           activeTab === 'donationRequests' ? 'Donation Request Details' :
           'Message Details'}
        </h2>
        <div className="modal-body">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="detail-row">
              <strong className="detail-label">{formatLabel(key)}:</strong>
              <span className="detail-value">
                {key === 'dateNeeded' || key === 'lastDonation' || key === 'createdAt'
                  ? formatDate(value as string)
                  : String(value)}
              </span>
            </div>
          ))}
        </div>
        <button className="modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Helper functions
const formatLabel = (key: string) => {
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();
};

export default Admin;
