import React, { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Who can donate blood?",
      answer: "Generally, individuals who are in good health, at least 17 years old (16 with parental consent in some states), and weigh at least 110 pounds can donate blood. However, eligibility can vary based on specific health conditions, travel history, and other factors. It's best to consult with a healthcare professional or blood donation center for personalized advice."
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 56 days, up to 6 times a year. For other types of donations: Platelets can be donated every 7 days, up to 24 times a year. Plasma can be donated every 28 days, up to 13 times a year. Double red cells can be donated every 112 days, up to 3 times a year."
    },
    {
      question: "Is blood donation safe?",
      answer: "Yes, blood donation is very safe. The process is conducted by trained professionals in sterile environments. A new, sterile needle is used for each donor and then discarded. The risk of infection or other complications is minimal. All donated blood is also tested for various infectious diseases before it's used."
    },
    {
      question: "How long does a blood donation take?",
      answer: "The entire process, including registration, health history review, and refreshments after donation, typically takes about an hour. The actual blood donation only takes about 8-10 minutes. Platelet donations may take up to 2 hours."
    },
    {
      question: "What should I do before donating blood?",
      answer: "Before donating blood, you should: Eat a healthy meal and stay hydrated, get a good night's sleep, avoid fatty foods and alcohol for 24 hours before donation, and bring a valid ID. If you're donating platelets, avoid taking aspirin for 48 hours before your appointment."
    },
    {
      question: "What happens during a blood donation?",
      answer: "During a blood donation, you'll go through several steps: Registration, health history and mini-physical, the actual donation process where blood is drawn, and a short rest period with refreshments. The entire process is designed to be comfortable and safe for donors."
    },
    {
      question: "How is my donated blood used?",
      answer: "Donated blood is used in various medical treatments and emergencies. It can help patients undergoing surgery, cancer treatment, or those with blood disorders. Whole blood is often separated into its components (red cells, platelets, and plasma) to help multiple patients with specific needs."
    },
    {
      question: "Are there any side effects of donating blood?",
      answer: "Most people feel fine after donating blood. Some may experience mild side effects like lightheadedness, dizziness, or slight bruising at the needle site. These effects are usually temporary and resolve quickly. Staying hydrated and resting after donation can help minimize any discomfort."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-red-700 text-center">Frequently Asked Questions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Find answers to common questions about blood donation, eligibility, and the donation process. If you don't see your question here, please don't hesitate to contact us.
          </p>
        </div>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FaQuestionCircle className="text-red-500 mr-3" />
                    {item.question}
                  </h2>
                  {openIndex === index ? (
                    <FaChevronUp className="text-red-500" />
                  ) : (
                    <FaChevronDown className="text-red-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
