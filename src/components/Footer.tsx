import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "BloodSync Life",
      items: [
        { name: "About Us", link: "/about" },
        { name: "Our Services", link: "/services" },
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Terms & Conditions", link: "/terms" }
      ]
    },
    {
      title: "Our Specialties",
      items: [
        { name: "Emergency Blood", link: "/blood-donate" },
        { name: "Blood Storage", link: "/services" },
        { name: "Health Check", link: "/services" },
        { name: "GPS Blood Request", link: "/services" }
      ]
    },
    {
      title: "Contact Us",
      items: [
        { name: "FAQ", link: "/faq" },
        { name: "+91 96444 96444", link: "tel:+919644496444" },
        { name: "info@bloodsynclife.com", link: "mailto:info@bloodsynclife.com" },
        { name: "News & Events", link: "/news" }
      ]
    }
  ];

  const socialLinks = [
    { Icon: FaFacebookF, link: "https://github.com/brighteyekid" },
    { Icon: FaTwitter, link: "https://github.com/brighteyekid" },
    { Icon: FaInstagram, link: "https://github.com/brighteyekid" },
    { Icon: FaLinkedinIn, link: "https://github.com/brighteyekid" },
    { Icon: FaGithub, link: "https://github.com/brighteyekid" }
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link to={item.link} className="hover:text-red-400">
                        {item.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="social-links flex justify-center space-x-4">
              {socialLinks.map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-red-400"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Copyright &copy; {new Date().getFullYear()} BloodSync Life. All rights reserved.</p>
          <p className="mt-2">Made With ❤️ by <a href="https://github.com/brighteyekid" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">BrightEyeKid</a></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
