import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaQuestionCircle, FaHandsHelping, FaUserMd } from 'react-icons/fa';
import api from '../api/axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const response = await api.post('/api/messages', formData);
      console.log('Form submitted:', response.data);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // You can add more detailed error handling here if needed
    }
  };

  return (
    <div className="contact-page bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        
        <motion.p
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're here to answer your questions, hear your feedback, and connect you with the resources you need. Whether you're a donor, a healthcare professional, or someone in need of our services, we're committed to providing you with prompt and helpful assistance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfo icon={<FaMapMarkerAlt />} text="SRM Institute of Science and Technology, Kattankulathur, Chennai - 603203, Tamil Nadu, India" />
              <ContactInfo icon={<FaPhone />} text="+91 44 2745 5510" />
              <ContactInfo icon={<FaEnvelope />} text="info@bloodsynclife.org" />
              <ContactInfo icon={<FaClock />} text="Monday - Friday: 9:00 AM - 5:00 PM" />
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Follow Us</h3>
              <div className="flex space-x-6">
                <SocialIcon icon={<FaFacebook />} link="https://github.com/brighteyekid" />
                <SocialIcon icon={<FaTwitter />} link="https://github.com/brighteyekid" />
                <SocialIcon icon={<FaInstagram />} link="https://github.com/brighteyekid" />
                <SocialIcon icon={<FaLinkedin />} link="https://github.com/brighteyekid" />
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Links</h3>
              <ul className="space-y-4">
                <QuickLink icon={<FaQuestionCircle />} text="Frequently Asked Questions" link="/faq" />
                <QuickLink icon={<FaHandsHelping />} text="Volunteer Opportunities" link="/volunteer" />
                <QuickLink icon={<FaUserMd />} text="For Healthcare Professionals" link="/healthcare-professionals" />
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have a specific question or comment? Fill out the form below, and our team will get back to you as soon as possible. Your feedback helps us improve our services and better serve our community.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={submitStatus === 'loading'}
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600">Error sending message. Please try again.</p>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Location</h2>
          <p className="text-xl text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Visit our main office at SRM Institute of Science and Technology. We're conveniently located and easily accessible. If you're planning to visit, please call ahead to schedule an appointment.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704806372!2d80.0421958!3d12.8230831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1655280323588!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SRM Institute of Science and Technology Location"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Emergency Contact</h2>
          <p className="text-xl text-gray-600 mb-4">
            For urgent blood requirements or emergency situations, please call our 24/7 hotline:
          </p>
          <p className="text-3xl font-bold text-red-600">+91 800 123 4567</p>
        </motion.div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-start">
    <div className="text-red-600 mr-4 mt-1 text-2xl">{icon}</div>
    <p className="text-gray-700 text-lg">{text}</p>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode; link: string }> = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition duration-300">
    <div className="text-3xl">{icon}</div>
  </a>
);

const QuickLink: React.FC<{ icon: React.ReactNode; text: string; link: string }> = ({ icon, text, link }) => (
  <li>
    <a href={link} className="flex items-center text-gray-700 hover:text-red-600 transition duration-300">
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  </li>
);

export default Contact;
