import React from 'react';
import { FaShieldAlt, FaUserLock, FaClipboardList, FaExchangeAlt, FaUserCog, FaFileAlt, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Privacy: React.FC = () => {
  const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <section className="mb-12 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6 text-red-600 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </section>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-red-700 text-center">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            At BloodSync Life, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and protection of your data.
          </p>
        </div>

        <Section title="Information We Collect" icon={<FaClipboardList className="text-red-500 text-2xl" />}>
          <p className="mb-4 text-gray-700">We collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Health information related to blood donation eligibility</li>
            <li>Donation history and appointment information</li>
            <li>Usage data and analytics from our website and mobile application</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information" icon={<FaExchangeAlt className="text-red-500 text-2xl" />}>
          <p className="mb-4 text-gray-700">We use the collected information to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide and improve our blood donation services</li>
            <li>Process and manage your donations and appointments</li>
            <li>Communicate with you about donations, appointments, and our services</li>
            <li>Ensure the safety and quality of the blood supply</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Analyze and improve our website and mobile application performance</li>
          </ul>
        </Section>

        <Section title="Data Security" icon={<FaShieldAlt className="text-red-500 text-2xl" />}>
          <p className="mb-4 text-gray-700">
            We implement robust security measures to protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Strict access controls and authentication procedures</li>
            <li>Employee training on data protection and privacy practices</li>
            <li>Secure data centers with physical and environmental controls</li>
          </ul>
        </Section>

        <Section title="Sharing of Information" icon={<FaUserLock className="text-red-500 text-2xl" />}>
          <p className="mb-4 text-gray-700">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Healthcare providers and blood banks as necessary for donation processing</li>
            <li>Service providers who assist us in operating our website and services</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
        </Section>

        <Section title="Your Rights and Choices" icon={<FaUserCog className="text-red-500 text-2xl" />}>
          <p className="mb-4 text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access and update your personal information</li>
            <li>Request deletion of your data, subject to legal requirements</li>
            <li>Opt-out of certain data collection and use</li>
            <li>Receive a copy of your data in a portable format</li>
          </ul>
        </Section>

        <Section title="Changes to This Policy" icon={<FaFileAlt className="text-red-500 text-2xl" />}>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </Section>

        <Section title="Contact Us" icon={<FaEnvelope className="text-red-500 text-2xl" />}>
          <p className="mb-6 text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <p className="text-gray-700 flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-3" />
              SRM Institute of Science and Technology, Kattankulathur, Chennai - 603203, Tamil Nadu, India
            </p>
            <p className="text-gray-700 flex items-center">
              <FaPhone className="text-red-500 mr-3" />
              +91 44 2745 5510
            </p>
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="text-red-500 mr-3" />
              privacy@bloodsynclife.org
            </p>
          </div>
        </Section>

        <p className="mt-12 text-sm text-gray-600 text-center">Last Updated: June 15, 2023</p>
      </div>
    </div>
  );
};

export default Privacy;
