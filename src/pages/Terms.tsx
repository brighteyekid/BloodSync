import React from 'react';
import { FaHandshake, FaUserShield, FaUserCog, FaFileAlt, FaBalanceScale, FaExclamationTriangle, FaGavel, FaGlobe } from 'react-icons/fa';

const Terms: React.FC = () => {
  const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <section className="mb-12 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </section>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-blue-700 text-center">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome to BloodSync Life. These Terms of Service govern your use of our website, mobile application, and services. By accessing or using BloodSync Life, you agree to comply with and be bound by these terms. Please read them carefully.
          </p>
        </div>

        <Section title="1. Acceptance of Terms" icon={<FaHandshake className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            By accessing or using BloodSync Life's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and any other applicable laws and regulations.
          </p>
          <p className="text-gray-700">
            If you do not agree with any part of these terms, you may not use our services.
          </p>
        </Section>

        <Section title="2. Use of Service" icon={<FaUserShield className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Using the service in any way that violates any applicable local, state, national, or international law or regulation</li>
            <li>Impersonating or attempting to impersonate BloodSync Life, its employees, or other users</li>
            <li>Interfering with or disrupting the service or servers or networks connected to the service</li>
            <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this service</li>
          </ul>
        </Section>

        <Section title="3. User Accounts" icon={<FaUserCog className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            To access certain features of our service, you may be required to create an account. You agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide accurate, current, and complete information during the registration process</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your account credentials confidential and not share them with any third party</li>
            <li>Be solely responsible for all activities that occur under your account</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, false, or outdated.
          </p>
        </Section>

        <Section title="4. Privacy and Data Protection" icon={<FaFileAlt className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to our Privacy Policy, which is incorporated into these Terms of Service.
          </p>
          <p className="text-gray-700">
            We comply with all applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR) where applicable.
          </p>
        </Section>

        <Section title="5. Intellectual Property" icon={<FaBalanceScale className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            The content, features, and functionality of BloodSync Life, including but not limited to text, graphics, logos, images, and software, are owned by or licensed to BloodSync Life and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-700">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
          </p>
        </Section>

        <Section title="6. Limitation of Liability" icon={<FaExclamationTriangle className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700 mb-4">
            To the fullest extent permitted by applicable law, BloodSync Life shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your access to or use of or inability to access or use the service</li>
            <li>Any conduct or content of any third party on the service</li>
            <li>Any content obtained from the service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </Section>

        <Section title="7. Governing Law" icon={<FaGavel className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be instituted in the courts of Chennai, Tamil Nadu, India.
          </p>
        </Section>

        <Section title="8. Changes to Terms" icon={<FaGlobe className="text-blue-500 text-2xl" />}>
          <p className="text-gray-700">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </Section>

        <p className="mt-12 text-sm text-gray-600 text-center">Last Updated: June 15, 2023</p>
      </div>
    </div>
  );
};

export default Terms;
