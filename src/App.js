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
  src={process.env.PUBLIC_URL + "/anshul.jpg"}
  alt="Anshul Verma"
  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-800 shadow-md object-cover"
  initial={{ scale: 0}}
  animate={{ scale: 1.4 }}
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
          building real-world projects using MERN Stack, Java, Python.
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
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRrZTJjMjRvMWltaHNxeGVzMWN0MHZnOWQxdDd4Ynpmd3gzYWhvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RbDKaczqWovIugyJmW/giphy.gif"
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
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRrZTJjMjRvMWltaHNxeGVzMWN0MHZnOWQxdDd4Ynpmd3gzYWhvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGgsc5mWoryfgKBx1u/giphy.gif"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sYOGrpXA-9vOBgiTb0FOAi2zx4AwlsxYAnRwLTRbjYl0hIWfBWwtMY0EC04olYZtYkI&usqp=CAU"
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
                { name: "C++ / C", color: "bg-red-400", level: "90%" },
                { name: "Java", color: "bg-orange-400", level: "85%" },
               { name: "Python ", color: "bg-purple-400", level: "65%" },
              { name: "JavaScript", color: "bg-yellow-400", level: "85%" },
              { name: "React & Node.js", color: "bg-blue-400", level: "80%" },
              { name: "MongoDB", color: "bg-green-400", level: "70%" },
             
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
            
            <a
  href="tel:+918853273544"
  className="flex items-center gap-2 text-gray-200 hover:underline"
>
  📱 +91-8853273544
</a>

            <div className="flex gap-6 mt-4">
  <a
    href={process.env.PUBLIC_URL + "/resume.pdf"}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline"
  >
    📄 View Resume
  </a>
  <a
    href={process.env.PUBLIC_URL + "/resume.pdf"}
    download
    className="text-green-400 underline"
  >
    ⬇️ Download Resume
  </a>
</div>

          </div>

          <motion.img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnRrZTJjMjRvMWltaHNxeGVzMWN0MHZnOWQxdDd4Ynpmd3gzYWhvbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="Shut Down"
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
        <motion.div
  className="bg-slate-800 rounded-xl p-6 border border-slate-600 shadow-md"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3amNsbXk2eXJpcGUzbmRtNGN2YW1pc3kwdWV5dnJneXF2eWNzdXk2cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H03PuVdwREB21ANkLX/giphy.gif"
    alt="Amazon Clone"
    className="rounded-md mb-4 w-full h-48 object-cover"
  />
  <h3 className="text-2xl font-semibold text-cyan-300 mb-2">🛍️ How I Built My Amazon Clone</h3>
  <p className="text-gray-300 text-sm leading-relaxed">
    I built an Amazon Clone from scratch using the <strong>MERN stack</strong>. I handled
    user authentication using <strong>Firebase</strong>, created backend APIs with <strong>Node.js</strong> and
    <strong> Express</strong>, and stored data like products and orders in <strong>MongoDB Atlas</strong>. The frontend
    was developed using <strong>React</strong>, with components for product cards, search, cart, and
    checkout. I used <strong>Tailwind CSS</strong> for styling and <strong>Framer Motion</strong> for animations.
    <strong> Stripe</strong> was integrated for payment processing. The app is fully responsive and
    deployed on <strong>Vercel</strong>.
  </p>
</motion.div>

<motion.div
  className="bg-slate-800 rounded-xl p-6 border border-slate-600 shadow-md"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <img
    src="https://media.giphy.com/media/0IBekV40KIUjEYvvnS/giphy.gif"
    alt="MongoDB Tutorial"
    className="rounded-md mb-4 w-full h-48 object-cover"
  />
  <h3 className="text-2xl font-semibold text-green-300 mb-2">🍃 Getting Started with MongoDB</h3>
  <p className="text-gray-300 text-sm leading-relaxed">
    In this blog, I explain the basics of <strong>MongoDB</strong> — a NoSQL database that stores data in flexible, JSON-like documents.
    I covered concepts like collections, documents, and queries using <strong>Mongoose</strong> in Node.js.
    I also showed how I used MongoDB in real-world full stack projects like my Amazon Clone,
    storing product data, user profiles, and orders in the cloud via <strong>MongoDB Atlas</strong>.
    This blog is a great intro for anyone starting full-stack development with the <strong>MERN stack</strong>.
  </p>
</motion.div>

        </div>
      </motion.section>
    </div>
  );
}
