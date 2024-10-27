import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaClock, FaCheckCircle, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import api from '../api/axios';

const BloodDonate: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="blood-donate-page bg-gray-50 font-sans">
      <HeroSection onDonateClick={() => setShowForm(true)} />
      <InfoSection />
      <EligibilitySection />
      <ProcessSection />
      <EnhancedFAQSection />
      {showForm && <DonationForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

const HeroSection: React.FC<{ onDonateClick: () => void }> = ({ onDonateClick }) => (
  <div className="hero-section bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Give the Gift of Life
        </h1>
        <p className="text-xl mb-8">
          Your blood donation can save up to three lives. Join our community of heroes and make a difference today.
        </p>
        <motion.button
          className="bg-white text-red-600 px-8 py-3 rounded-full text-xl font-bold hover:bg-red-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDonateClick}
        >
          Donate Now
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Blood Donation" 
          className="w-full rounded-lg shadow-xl"
        />
      </motion.div>
    </div>
  </div>
);

const InfoSection: React.FC = () => (
  <div className="info-section py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Donate Blood?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard
          icon={<FaHeartbeat className="text-5xl text-red-600 mb-4" />}
          title="Save Lives"
          description="Your donation can help accident victims, surgical patients, and those battling cancer."
        />
        <InfoCard
          icon={<FaUserMd className="text-5xl text-red-600 mb-4" />}
          title="Support Medical Treatments"
          description="Blood donations are crucial for various medical procedures and chronic illnesses."
        />
        <InfoCard
          icon={<FaClock className="text-5xl text-red-600 mb-4" />}
          title="Quick and Easy Process"
          description="The donation process takes only about 10-15 minutes of your time."
        />
      </div>
    </div>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const EligibilitySection: React.FC = () => (
  <div className="eligibility-section py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Are You Eligible to Donate?</h2>
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          <EligibilityItem text="Be at least 18 years old" />
          <EligibilityItem text="Weigh at least 50 kg" />
          <EligibilityItem text="Be in good health and feeling well" />
          <EligibilityItem text="Have not donated blood in the last 56 days" />
          <EligibilityItem text="Have a hemoglobin level of at least 12.5 g/dL" />
        </ul>
        <p className="mt-8 text-gray-700 text-center">
          Note: These are general guidelines. Our medical staff will conduct a thorough screening to ensure your eligibility.
        </p>
      </div>
    </div>
  </div>
);

const EligibilityItem: React.FC<{ text: string }> = ({ text }) => (
  <motion.li
    className="flex items-center text-gray-700"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <FaCheckCircle className="text-green-500 mr-3" />
    <span>{text}</span>
  </motion.li>
);

const ProcessSection: React.FC = () => (
  <div className="process-section py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">The Donation Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProcessStep number={1} title="Registration" description="Fill out a confidential medical history questionnaire." />
        <ProcessStep number={2} title="Screening" description="Undergo a mini-physical to check your vitals and hemoglobin levels." />
        <ProcessStep number={3} title="Donation" description="The actual blood donation takes about 10-15 minutes." />
        <ProcessStep number={4} title="Refreshments" description="Enjoy some snacks and drinks to replenish your body." />
      </div>
    </div>
  </div>
);

const ProcessStep: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const EnhancedFAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How often can I donate blood?",
      answer: "Most people can donate whole blood every 56 days (8 weeks). However, the frequency may vary depending on the type of donation and your health condition. Platelet donors can give more frequently, up to 24 times per year."
    },
    {
      question: "Is donating blood safe?",
      answer: "Yes, donating blood is very safe. All equipment used is sterile and disposed of after a single use. The donation process is conducted by trained professionals in a controlled environment. There's no risk of contracting any infectious disease by donating blood."
    },
    {
      question: "How long does it take to donate blood?",
      answer: "The entire process, from registration to post-donation refreshments, usually takes about an hour. The actual blood donation only takes about 8-10 minutes. However, we recommend allocating about 1.5 hours for your first donation to account for the initial screening process."
    },
    {
      question: "What should I do before donating blood?",
      answer: "Before donating, make sure to: 1) Get a good night's sleep, 2) Eat a healthy meal, 3) Drink plenty of fluids, 4) Bring a valid ID, 5) Provide an accurate medical history. Avoid alcohol for 24 hours before donation and fatty foods on the day of donation."
    },
    {
      question: "Can I donate if I have a medical condition or take medication?",
      answer: "It depends on the specific condition and medication. Many people with controlled medical conditions or those taking certain medications can still donate. However, it's best to consult with the donation center staff. They will review your medical history and make a determination based on current guidelines."
    },
    {
      question: "What happens to my blood after I donate?",
      answer: "After donation, your blood is tested for blood type and infectious diseases. It's then separated into components (red cells, plasma, platelets) which can be used to help different patients. Your blood is typically used within 42 days of donation."
    }
  ];

  return (
    <div className="faq-section py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-800 flex items-center">
          <FaQuestionCircle className="text-red-600 mr-3" />
          {question}
        </span>
        {isOpen ? <FaChevronUp className="text-red-600" /> : <FaChevronDown className="text-red-600" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-700">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const DonationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodType: '',
    lastDonation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/donations', formData);
      alert('Donation request submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting donation request:', error);
      alert('Error submitting donation request. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Donate Blood</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" required onChange={handleChange} value={formData.name} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required onChange={handleChange} value={formData.email} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md" required onChange={handleChange} value={formData.phone} />
          </div>
          <div className="mb-4">
            <label htmlFor="bloodType" className="block text-gray-700 mb-2">Blood Type</label>
            <select id="bloodType" className="w-full px-3 py-2 border border-gray-300 rounded-md" required onChange={handleChange} value={formData.bloodType}>
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="lastDonation" className="block text-gray-700 mb-2">Last Donation Date</label>
            <input type="date" id="lastDonation" className="w-full px-3 py-2 border border-gray-300 rounded-md" onChange={handleChange} value={formData.lastDonation} />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default BloodDonate;
