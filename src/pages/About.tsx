import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaUsers, FaHospital, FaAward, FaChartLine } from 'react-icons/fa';
import { useState } from 'react';
import api from '../api/axios';

const About: React.FC = () => {
  return (
    <div className="about-page bg-gray-50 font-sans">
      <HeroSection />
      <MissionSection />
      <HistorySection />
      <TeamSection />
      <ImpactSection />
      <AchievementsSection />
      <ContactForm />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <div className="hero-section bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
    <div className="container mx-auto px-4">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Empowering Life Through Blood Donation
      </motion.h1>
      <motion.p
        className="text-2xl text-center max-w-3xl mx-auto font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        BloodSync Life: Bridging the gap between donors and recipients since 2020
      </motion.p>
    </div>
  </div>
);

const MissionSection: React.FC = () => (
  <div className="mission-section py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            At BloodSync Life, we are driven by a singular purpose: to revolutionize blood donation and distribution, ensuring that no life is lost due to blood shortage. Our mission is multifaceted and ambitious:
          </p>
          <ul className="list-none text-gray-700 mb-6 space-y-4">
            <li className="flex items-start">
              <FaHandHoldingHeart className="text-red-600 mr-3 mt-1" />
              <span className="text-lg">Cultivate a culture of regular blood donation through education and awareness</span>
            </li>
            <li className="flex items-start">
              <FaUsers className="text-red-600 mr-3 mt-1" />
              <span className="text-lg">Build a vast, diverse network of donors ready to respond to emergencies</span>
            </li>
            <li className="flex items-start">
              <FaHospital className="text-red-600 mr-3 mt-1" />
              <span className="text-lg">Partner with healthcare facilities to streamline blood requisition and delivery</span>
            </li>
            <li className="flex items-start">
              <FaChartLine className="text-red-600 mr-3 mt-1" />
              <span className="text-lg">Leverage technology to optimize blood inventory management and distribution</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Blood Donation Technology" 
            className="w-full rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  </div>
);

const HistorySection: React.FC = () => (
  <div className="history-section py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Journey
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-xl text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Founded in 2020 by Aayush Kumar and Vineet, BloodSync Life emerged from a critical observation: the disconnect between willing blood donors and those in desperate need. What began as a local initiative in Delhi quickly grew into a nationwide movement, powered by technology and driven by compassion.
        </motion.p>
        <motion.p
          className="text-xl text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Our first year saw us partnering with 10 hospitals and registering over 1,000 donors. By 2022, we had expanded to 50 cities, with our app facilitating real-time blood requests and matches. Today, BloodSync Life stands as a testament to the power of innovation in healthcare, having saved thousands of lives and continuing to grow our impact daily.
        </motion.p>
      </div>
    </div>
  </div>
);

const TeamSection: React.FC = () => (
  <div className="team-section bg-white py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Leadership Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <TeamMember
          name="Aayush Kumar"
          role="Founder & CEO"
          bio="Aayush, with his background in biomedical engineering and public health, brings a unique perspective to blood donation logistics. His vision of a connected, efficient blood donation ecosystem drives BloodSync Life's mission and strategy."
          image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        />
        <TeamMember
          name="Vineet"
          role="Co-founder & CTO"
          bio="Vineet, a seasoned software architect, leads our technology initiatives. His expertise in AI and mobile app development has been crucial in creating BloodSync Life's intelligent donor-recipient matching system and user-friendly interface."
          image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        />
      </div>
    </div>
  </div>
);

const TeamMember: React.FC<{ name: string; role: string; bio: string; image: string }> = ({ name, role, bio, image }) => (
  <motion.div
    className="bg-gray-50 p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={image} alt={name} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-md" />
    <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
    <p className="text-xl text-red-600 text-center mb-4 font-semibold">{role}</p>
    <p className="text-gray-700 text-lg leading-relaxed">{bio}</p>
  </motion.div>
);

const ImpactSection: React.FC = () => (
  <div className="impact-section py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Impact
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ImpactCard
          icon={<FaHandHoldingHeart className="text-6xl text-red-600 mb-4" />}
          title="Lives Saved"
          value="15,000+"
          description="Through our network of donors and efficient blood distribution system"
        />
        <ImpactCard
          icon={<FaUsers className="text-6xl text-red-600 mb-4" />}
          title="Active Donors"
          value="50,000+"
          description="Dedicated individuals ready to donate at a moment's notice across India"
        />
        <ImpactCard
          icon={<FaHospital className="text-6xl text-red-600 mb-4" />}
          title="Partner Hospitals"
          value="500+"
          description="Medical facilities we support with timely blood supplies and services"
        />
      </div>
    </div>
  </div>
);

const ImpactCard: React.FC<{ icon: React.ReactNode; title: string; value: string; description: string }> = ({ icon, title, value, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-4xl font-extrabold text-red-600 mb-4">{value}</p>
    <p className="text-gray-700 text-lg">{description}</p>
  </motion.div>
);

const AchievementsSection: React.FC = () => (
  <div className="achievements-section py-20 bg-white">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Recognition
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AchievementCard
          year="2022"
          title="National Health Innovation Award"
          description="Recognized for our innovative approach to blood donation and distribution"
        />
        <AchievementCard
          year="2023"
          title="Tech for Good Award"
          description="Awarded for leveraging technology to address critical healthcare challenges"
        />
        <AchievementCard
          year="2023"
          title="100,000 Donations Milestone"
          description="Celebrated facilitating our 100,000th successful blood donation"
        />
        <AchievementCard
          year="2024"
          title="Best Health App of the Year"
          description="BloodSync Life app recognized for its user-friendly interface and life-saving impact"
        />
      </div>
    </div>
  </div>
);

const AchievementCard: React.FC<{ year: string; title: string; description: string }> = ({ year, title, description }) => (
  <motion.div
    className="bg-gray-50 p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center mb-4">
      <FaAward className="text-3xl text-red-600 mr-3" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-2 text-lg">{year}</p>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await api.post('/api/messages', { name, email, subject, message });
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-section py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Send Us a Message
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-700 mb-8">
            Have a specific question or comment? Fill out the form below, and our team will get back to you as soon as possible. Your feedback helps us improve our services and better serve our community.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600 text-center">Error sending message. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
