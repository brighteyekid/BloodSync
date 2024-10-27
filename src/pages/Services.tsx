import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaAmbulance, FaUserMd, FaFlask, FaHeartbeat, FaBook } from 'react-icons/fa';

const Services: React.FC = () => {
  return (
    <div className="services-page bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At BloodSync Life, we offer a comprehensive range of services to ensure a stable and safe blood supply for those in need. Our state-of-the-art facilities and dedicated team work tirelessly to connect donors with recipients and support healthcare providers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<FaHospital />}
            title="Blood Collection Centers"
            description="Our modern, hygienic centers provide a comfortable environment for blood donation. Staffed by experienced professionals, we ensure a safe and efficient donation process."
          />
          <ServiceCard 
            icon={<FaAmbulance />}
            title="Mobile Blood Drives"
            description="We bring the donation center to you! Our mobile units can set up at workplaces, schools, and community events, making it convenient for groups to donate."
          />
          <ServiceCard 
            icon={<FaUserMd />}
            title="Medical Screening"
            description="Our thorough pre-donation screening process ensures the health and safety of both donors and recipients. Our medical staff provides personalized consultations and advice."
          />
          <ServiceCard 
            icon={<FaFlask />}
            title="Blood Testing and Processing"
            description="We conduct comprehensive testing on all donated blood to ensure its safety. Our advanced labs process and separate blood components for various medical needs."
          />
          <ServiceCard 
            icon={<FaHeartbeat />}
            title="Emergency Blood Supply"
            description="We provide 24/7 emergency blood supply services to hospitals and healthcare facilities. Our efficient distribution network ensures timely delivery when every second counts."
          />
          <ServiceCard 
            icon={<FaBook />}
            title="Education and Awareness"
            description="We offer educational programs and workshops to raise awareness about the importance of blood donation and promote a culture of regular donation in communities."
          />
        </div>

        <motion.div 
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Ensure Quality</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>Rigorous adherence to national and international blood banking standards</li>
            <li>Regular training and skill development programs for our staff</li>
            <li>State-of-the-art equipment and technology for blood collection, testing, and storage</li>
            <li>Strict quality control measures at every stage of the blood donation and distribution process</li>
            <li>Continuous monitoring and improvement of our services based on feedback and latest research</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5 }}
  >
    <div className="text-4xl text-red-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Services;
