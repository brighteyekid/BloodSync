import React from 'react';
import { motion } from 'framer-motion';
import { FaTint } from 'react-icons/fa';

const BootSplash: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-red-600 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mb-4"
        >
          <FaTint className="text-6xl" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold mb-2"
        >
          BloodSync Life
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl"
        >
          Connecting donors, saving lives
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BootSplash;
