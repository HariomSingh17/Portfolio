import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Hariom Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 mb-6"
        >
          Data Science Enthusiast | Cloud Engineer | DevOps Engineer | Flutter
        </motion.p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[ 
            { title: "Diabetes Prediction", url: "https://github.com/HariomSingh17/diabetes_prediction" },
            { title: "Student Registration AWS", url: "https://github.com/HariomSingh17/student-registration-aws" },
            { title: "Forest Fire", url: "https://github.com/HariomSingh17/forestfire" }
          ].map((project, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.05 }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-700 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">View on GitHub</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Certificate 1", url: "https://courses.ibmcep.cognitiveclass.ai/certificates/f8b3f74e7c3246f39d5808c9f81b4bec" },
            { title: "Certificate 2", url: "https://courses.ibmcep.cognitiveclass.ai/certificates/bfa3ad838f204ed8a9fb2f01e0aa7a99" },
            { title: "Certificate 3", url: "https://courses.ibmcep.cognitiveclass.ai/certificates/9b3f06a948d74d93bc4cdad27342862a" },
            { title: "Certificate 4", url: "https://courses.ibmcep.cognitiveclass.ai/certificates/afd615546ad4450ebc33659476bc7264" }
          ].map((cert, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.05 }}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-800 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400">View Certificate</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">Let's connect and collaborate!</p>
        <div className="flex flex-col items-center space-y-4">
          {/* Phone */}
          <a href="tel:+917880597288" className="hover:text-cyan-400 text-lg">
            📞 +91 7880597288
          </a>
          {/* Email */}
          <a href="mailto:hrmsnghthakur@gmail.com" className="hover:text-cyan-400 text-lg">
            ✉️ hrmsnghthakur@gmail.com
          </a>
          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/HariomSingh17" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Github size={28} /></a>
            <a href="https://www.linkedin.com/in/hariom-singh-78627028a" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Linkedin size={28} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
