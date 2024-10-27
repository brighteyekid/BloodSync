import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Donation Process',
    title: 'Blood Donation in Action',
    description: 'A donor giving blood at one of our state-of-the-art facilities.',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    category: 'Donation Process',
    title: 'Pre-Donation Screening',
    description: 'Our medical staff conducting pre-donation health checks.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    category: 'Community Events',
    title: 'Blood Drive at Local University',
    description: 'Students participating in our campus blood drive initiative.',
    image: 'https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    category: 'Behind the Scenes',
    title: 'Blood Processing Laboratory',
    description: 'Our advanced lab where donated blood is processed and tested.',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    category: 'Community Events',
    title: 'Corporate Blood Donation Drive',
    description: 'Employees from local businesses participating in our mobile donation drive.',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    category: 'Impact Stories',
    title: 'Meeting a Blood Recipient',
    description: 'A heartwarming moment between a blood donor and a recipient whose life was saved.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    category: 'Behind the Scenes',
    title: 'Blood Transport',
    description: 'Our specialized vehicles ensuring safe and timely delivery of blood to hospitals.',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    category: 'Impact Stories',
    title: 'Emergency Response Team',
    description: 'Our dedicated team providing blood supplies during a natural disaster.',
    image: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 9,
    category: 'Community Events',
    title: 'Blood Donation Awareness Campaign',
    description: 'Volunteers distributing informational materials about the importance of blood donation.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = galleryItems.filter(item => 
    (filter === 'All' || item.category === filter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="gallery-page bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Gallery</h1>
        
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 m-2 rounded-full ${
                filter === category ? 'bg-red-600 text-white' : 'bg-white text-gray-800'
              } hover:bg-red-500 hover:text-white transition duration-300`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search gallery..."
            className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:border-red-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-3 text-gray-400" />
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full mt-2">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No images found matching your criteria.</p>
        )}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-2">{selectedImage.description}</p>
              <span className="inline-block bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full">
                {selectedImage.category}
              </span>
              <button
                className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
