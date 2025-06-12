import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

// Minimal reusable components
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl p-4 bg-slate-800 border border-slate-700 shadow-md ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="space-y-2">{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-4">
      <section className="max-w-5xl mx-auto py-16 text-center">
        <motion.img
          src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
          alt="Code Animation"
          className="mx-auto rounded-xl mb-6 w-32 h-32 object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-5xl font-extrabold mb-3 text-cyan-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          👋 Hi, I'm Anshul Verma
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer | CSE @ Chandigarh University | Passionate about
          building real-world projects using MERN Stack, Java, Python & ML.
        </motion.p>
      </section>

      <motion.section
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Left Section - Projects */}
        <motion.div
          className="space-y-6"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-3xl font-bold text-pink-400">🚀 Projects</h2>

          <Card>
            <CardContent>
              <img
                src="https://media.giphy.com/media/SS8CV2rQdlYNLtBCiF/giphy.gif"
                alt="Amazon Clone"
                className="rounded-md mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-cyan-300">Amazon Clone</h3>
              <p className="text-gray-300">
                Full-stack e-commerce app using React, Node.js, MongoDB, Firebase & Stripe.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img
                src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif"
                alt="Face Mask Detection"
                className="rounded-md mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-cyan-300">Face Mask Detection</h3>
              <p className="text-gray-300">
                Python + OpenCV real-time face mask detection with machine learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <img
                src="https://media.giphy.com/media/l3vR1n4bL9WjY4LNK/giphy.gif"
                alt="Street Light"
                className="rounded-md mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-cyan-300">Auto Intensity Street Light</h3>
              <p className="text-gray-300">
                Algorithm-controlled lighting system using sensors and motion detection.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Section - Certifications, Skills, Contact */}
        <motion.div
          className="space-y-6"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-3xl font-bold text-yellow-400">📜 Certifications</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>IBM - Databases and SQL for Data Science</li>
            <li>Coursera - Intro to Relational Databases</li>
            <li>NPTEL - Quantum Mechanics for Engineers</li>
            <li>Full Stack Training - CNET, CU</li>
          </ul>

          <h2 className="text-3xl font-bold text-lime-400 mt-8">📈 Skills</h2>
          <div className="space-y-2">
            {[
              { name: "JavaScript", color: "bg-yellow-400", level: "85%" },
              { name: "React & Node.js", color: "bg-blue-400", level: "80%" },
              { name: "MongoDB", color: "bg-green-400", level: "70%" },
              { name: "Python / ML", color: "bg-purple-400", level: "65%" },
            ].map((skill, i) => (
              <div key={i}>
                <p>{skill.name}</p>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: skill.level }} />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-green-400 mt-8">📫 Contact</h2>
          <div className="flex flex-col gap-4 text-sm">
            <a
              href="mailto:anshulverma2003lmp@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:underline"
            >
              <Mail className="w-5 h-5" /> anshulverma2003lmp@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/anshul-verma-03a37724a"
              target="_blank"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <Linkedin className="w-5 h-5" /> linkedin.com/in/anshul-verma-03a37724a
            </a>
            <a
              href="https://github.com/Anshu8853"
              target="_blank"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <Github className="w-5 h-5" /> github.com/Anshu8853
            </a>
            <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resume.pdf";
    link.download = "Anshul_Resume.pdf";
    link.click();
  }}
  className="text-green-500 underline"
>
  ⬇️ Download My Resume
</button>











          </div>

          <motion.img
            src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
            alt="Cat typing"
            className="rounded-lg mt-6 mx-auto w-3/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      </motion.section>

      {/* Blog Section */}
      <motion.section className="max-w-4xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">📝 Blog Highlights</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-white">How I Built My Amazon Clone</h3>
              <p className="text-gray-400">
                A walkthrough of tools, design choices, challenges, and features...
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold text-white">Getting Started with MongoDB</h3>
              <p className="text-gray-400">
                Basics of MongoDB for beginners and how I used it in full stack apps.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
