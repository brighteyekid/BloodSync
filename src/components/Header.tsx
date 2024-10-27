import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { GiHeartOrgan } from 'react-icons/gi';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Blood Donate', to: '/blood-donate' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Admin', to: '/admin-login' }, // Updated to point to admin login
  ];

  return (
    <motion.header
      className="bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="logo flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GiHeartOrgan className="text-4xl text-red-600 mr-2" />
            <span className="text-xl font-bold">BloodSync Life</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to={item.to} className="text-gray-700 hover:text-red-600">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center">
          <motion.div
            id="menu-bars"
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaBars className="text-2xl text-gray-700" />
          </motion.div>
          <Link to="/request-blood">
            <motion.button
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REQUEST FOR EMERGENCY BLOOD
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
