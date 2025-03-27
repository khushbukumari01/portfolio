"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRobot, FaTimes, FaArrowDown } from "react-icons/fa";

interface Internship {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
  skills: string[];
  logo: string;
}

export default function Page(): JSX.Element {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const internshipData = [
      {
        id: 2,
        company: "Science and Technology Council IIT BHU",
        position: "Frontend Developer",
        description:
          "Worked on frontend",
        startDate: "Mar 2023",
        endDate: "Dec 2023",
        skills: [
          "React.js",
          "Node.js",
          "git",
          "github"
        ],
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQHGS5PRR2WFJg/company-logo_200_200/company-logo_200_200/0/1663357474575/ees_iit_bhu_logo?e=1748476800&v=beta&t=Drpwzl-3Onyh9yCwNyEwTdyNn7CJ_O-Sl86IkV8MY-Y",
      },
    ];

    const experienceData = [
      {
        id: 1,
        company: "Mashal",
        position: "Sports Co-Cordinator",
        description:
          "Worked on managing the games and multiple teams.",
        startDate: "Dec 2023",
        endDate: "Present",
        skills: [
          "Team Management",
          "Leadership",
        ],
        image:
          "https://media.licdn.com/dms/image/v2/C4D0BAQHGS5PRR2WFJg/company-logo_200_200/company-logo_200_200/0/1663357474575/ees_iit_bhu_logo?e=1748476800&v=beta&t=Drpwzl-3Onyh9yCwNyEwTdyNn7CJ_O-Sl86IkV8MY-Y",
      },
      {
        id: 2,
        company: "Science and Technology Council IIT BHU",
        position: "Frontend Developer",
        description:
          "Worked on frontend",
        startDate: "Mar 2023",
        endDate: "Dec 2023",
        skills: [
          "React.js",
          "Node.js",
          "git",
          "github"
        ],
        image:
          "https://media.licdn.com/dms/image/v2/D560BAQH_WyK-qBHGFA/company-logo_200_200/company-logo_200_200/0/1711644358016?e=1748476800&v=beta&t=TxYvOlrLBUy4lrlZdFWfcByz8LfxnCQlCTwL_54DUfo",
      },
    ];

    const educationData = [
      {
        id: 1,
        institution:
          "Indian Institute of Technology (Banaras Hindu University), Varanasi",
        degree: "Bachelor of Technology - BTech, Electronics and Communication",
        startDate: "2022",
        endDate: "2026",
        grade: "CGPA: 8.63",
        skills: [
          "Node.js",
          "Problem Solving",
          "Data Structure and Algorithms",
          "Matlab",
          "Back-End Web Development",
        ],
        logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHyenVUtyQrLg/company-logo_100_100/company-logo_100_100/0/1631309569195?e=1746662400&v=beta&t=fgUDvyYmXlSDS3dhnfTkc17ZvfwaqcaV0H36qpINNEc",
      },
      {
        id: 2,
        institution: "SS School Supaul",
        degree: "Intermediate, PCM",
        startDate: "Apr 2019",
        endDate: "Feb 2021",
        grade: "",
        skills: [],
        logo: "https://www.daudnagarcollege.ac.in/upload/images/16729045601624091965logo.png",
      },
      {
        id: 3,
        institution: "Simultala Awasiya Vidyalaya",
        degree: "Matriculation",
        startDate: "Dec 2013",
        endDate: "Feb 2018",
        grade: "Overall Bihar Rank - 7",
        skills: [],
        logo: "https://savbihar.ac.in/wp-content/uploads/2021/04/simultala_logo.jpg",
      },
    ];

    setInternships(internshipData);
    setExperiences(experienceData);
    setEducation(educationData);
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, { text: newMessage, isUser: true }]);
      
      try {
        const response = await fetch("https://api.shubhamiitbhu.in/myai/personalbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: newMessage }),
        });

        if (!response.ok) throw new Error('Failed to get response');
        
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.answer, isUser: false }]);
      } catch (error) {
        console.error("Chat error:", error);
        setMessages(prev => [...prev, { 
          text: "Sorry, I'm having trouble connecting. Please try again later.", 
          isUser: false 
        }]);
      }
      
      setNewMessage("");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-center my-20 sm:my-60">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/image.jpg"}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Khushbu kumari
          </div>
          <div className="text-lg sm:text-2xl font-bold tracking-tight text-white">
            3rd year student @
            <Link
              href="https://iitbhu.ac.in/"
              className="text-blue-500 hover:underline"
            >
              {" "}
              IIT BHU
            </Link>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 mt-10">
        Experiences
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-full">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 w-full min-h-[300px] flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4">
              {experience.image && (
                <motion.div whileHover={{ rotate: 15 }}>
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white bg-white/10 p-1"
                  />
                </motion.div>
              )}
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {experience.company}
                </h3>
                <p className="text-blue-200 font-medium">
                  {experience.position}
                </p>
              </div>
            </div>
            <p className="text-gray-200 text-sm flex-grow">
              {experience.description}
            </p>
            <div className="flex justify-between text-sm text-blue-100 mt-4">
              <span>{experience.startDate}</span>
              <span>{experience.endDate}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Education Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 mt-20">
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-full">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 w-full min-h-[300px] flex flex-col"
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.div whileHover={{ rotate: 15 }}>
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white bg-white/10 p-1"
                />
              </motion.div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {edu.institution}
                </h3>
                <p className="text-blue-200 text-sm">{edu.degree}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-blue-100 mt-auto">
              <span>{edu.startDate}</span>
              <span>{edu.endDate}</span>
            </div>
            <p className="text-gray-200 text-sm mt-2">{edu.grade}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {edu.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chatbot Container */}
      <div className="fixed bottom-4 right-4 z-50">
        {isChatOpen ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 w-80 h-96 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-blue-400 text-xl" />
                <span className="text-white font-semibold">Chat Assistant</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser
                        ? "bg-blue-500/30 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/20">
              <form onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }} className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500/30 hover:bg-blue-500/40 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-500/30 hover:bg-blue-500/40 text-white p-4 rounded-full shadow-lg backdrop-blur-lg border border-white/20"
          >
            <FaRobot className="text-2xl" />
          </motion.button>
        )}
      </div>
    </>
  );
}
