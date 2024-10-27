import React from 'react';
import { FaCalendarAlt, FaUserMd, FaMobileAlt, FaHandshake, FaAward } from 'react-icons/fa';

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  content: string;
  icon: React.ReactNode;
}

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: "BloodSync Life Launches Revolutionary Mobile App",
      date: "June 15, 2023",
      summary: "Streamlining blood donation process with cutting-edge technology",
      content: "We're thrilled to announce the launch of our state-of-the-art mobile app, designed to revolutionize the blood donation experience. This user-friendly application allows donors to easily schedule appointments, track their donation history, and receive real-time updates on local blood supply needs. With features like personalized health insights and donation reminders, we're making it easier than ever for our community to save lives.",
      icon: <FaMobileAlt className="text-red-500 text-4xl" />
    },
    {
      title: "Record-Breaking Blood Drive at State University",
      date: "May 28, 2023",
      summary: "Campus event collects over 500 units of blood, setting regional record",
      content: "Our recent blood drive at State University has set a new benchmark for campus blood drives in our region. With overwhelming support from students, faculty, and staff, we collected over 500 units of blood in a single day. This incredible achievement will help save up to 1,500 lives. The success of this event highlights the power of community engagement and the generosity of our youth in times of need.",
      icon: <FaAward className="text-red-500 text-4xl" />
    },
    {
      title: "BloodSync Life Expands Partnerships with Local Hospitals",
      date: "May 10, 2023",
      summary: "New collaborations to enhance blood supply chain efficiency",
      content: "We're excited to announce new strategic partnerships with five leading hospitals in our region. These collaborations will significantly enhance our ability to provide life-saving blood to patients in need. By streamlining the supply chain and implementing advanced inventory management systems, we aim to reduce response times and ensure a stable blood supply for critical medical procedures. This expansion marks a significant step in our mission to save lives through efficient blood donation services.",
      icon: <FaHandshake className="text-red-500 text-4xl" />
    },
    {
      title: "Innovative Plasma Therapy Shows Promise in COVID-19 Treatment",
      date: "April 22, 2023",
      summary: "BloodSync Life contributes to groundbreaking medical research",
      content: "Recent clinical trials have shown promising results in using convalescent plasma therapy for treating severe cases of COVID-19. BloodSync Life has been at the forefront of this research, working closely with medical professionals to collect and process plasma from recovered COVID-19 patients. This therapy could potentially reduce the severity of the disease and improve recovery rates. We're proud to contribute to this important medical advancement and continue to call for plasma donations from recovered individuals.",
      icon: <FaUserMd className="text-red-500 text-4xl" />
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-red-700 text-center">Latest News</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Stay updated with the latest developments, events, and breakthroughs in the world of blood donation and medical science. Our news section brings you important announcements, success stories, and insights into how your contributions are making a difference.
          </p>
        </div>
        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                  {item.icon}
                </div>
                <p className="text-gray-600 mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-red-500" />
                  {item.date}
                </p>
                <p className="text-lg font-semibold text-gray-700 mb-4">{item.summary}</p>
                <p className="text-gray-700">{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
