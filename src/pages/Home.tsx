import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiHeartOrgan } from 'react-icons/gi';
import { FaHandHoldingHeart, FaHospital, FaUserMd } from 'react-icons/fa';

const Home: React.FC = () => {
  const [showReadMore, setShowReadMore] = useState(false);

  return (
    <div className="main-home bg-red-50">
      <HeroSection />
      <StatsSection />
      <AboutSection showReadMore={showReadMore} setShowReadMore={setShowReadMore} />
      <ServicesSection />
      <CallToAction />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <div className="hero-section py-20">
    <div className="container mx-auto px-4 flex items-center">
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="text-2xl font-bold text-red-600 mb-4 flex items-center"
          whileHover={{ scale: 1.1 }}
        >
          <GiHeartOrgan className="mr-2" /> BLOOD SYNC LIFE
        </motion.span>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Give the Gift of Life: Donate Blood Today
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Your donation can save up to three lives. Join our community of heroes and make a difference.
        </p>
        <div className="flex space-x-4">
          <Link to="/blood-donate">
            <motion.button
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
          </Link>
          <Link to="/request-blood">
            <motion.button
              className="bg-white text-red-600 px-6 py-3 rounded-md border border-red-600 hover:bg-red-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Blood
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Blood Donation" className="w-full rounded-lg shadow-lg" />
      </motion.div>
    </div>
  </div>
);

const StatsSection: React.FC = () => (
  <div className="stats-section bg-red-600 py-12 text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold mb-2">10,000+</h3>
          <p className="text-xl">Lives Saved</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold mb-2">5,000+</h3>
          <p className="text-xl">Active Donors</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold mb-2">100+</h3>
          <p className="text-xl">Partner Hospitals</p>
        </motion.div>
      </div>
    </div>
  </div>
);

const AboutSection: React.FC<{ showReadMore: boolean; setShowReadMore: (show: boolean) => void }> = ({ showReadMore, setShowReadMore }) => (
  <div className="about-section py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About BloodSync Life
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="About Us" className="w-full rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            BloodSync Life is dedicated to connecting blood donors with those in need, ensuring a stable and accessible blood supply for all. We strive to educate, motivate, and facilitate blood donation to save lives and improve health outcomes in our communities.
          </p>
          {showReadMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 mt-6">Our Impact</h3>
              <p className="text-gray-700 mb-4">
                Since our inception, BloodSync Life has facilitated over 50,000 blood donations, directly impacting more than 150,000 lives. Our network of dedicated donors and partner hospitals ensures that blood is available when and where it's needed most.
              </p>
              <h3 className="text-2xl font-bold mb-4">Join Our Cause</h3>
              <p className="text-gray-700 mb-4">
                By becoming a blood donor or supporting our initiatives, you become part of a life-saving community. Every donation counts, and together, we can make a significant difference in the lives of those facing medical emergencies.
              </p>
            </motion.div>
          )}
          <motion.button
            className="text-red-600 font-bold"
            onClick={() => setShowReadMore(!showReadMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showReadMore ? 'Read Less' : 'Read More'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => (
  <div className="services-section bg-gray-100 py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<FaHandHoldingHeart className="text-5xl text-red-600 mb-4" />}
          title="Blood Donation"
          description="Safe and efficient blood donation process with our trained professionals."
        />
        <ServiceCard
          icon={<FaHospital className="text-5xl text-red-600 mb-4" />}
          title="Emergency Blood Supply"
          description="24/7 emergency blood supply services for hospitals and clinics."
        />
        <ServiceCard
          icon={<FaUserMd className="text-5xl text-red-600 mb-4" />}
          title="Medical Consultation"
          description="Expert medical advice on blood-related health issues and donation eligibility."
        />
      </div>
    </div>
  </div>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const CallToAction: React.FC = () => (
  <div className="cta-section bg-red-600 py-20 text-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready to Make a Difference?
      </motion.h2>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Join our community of heroes and help save lives today.
      </motion.p>
      <Link to="/blood-donate">
        <motion.button
          className="bg-white text-red-600 px-8 py-3 rounded-md text-xl font-bold hover:bg-red-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Become a Donor
        </motion.button>
      </Link>
    </div>
  </div>
);

export default Home;
