import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const text = "Hi, I'm Sathish Kumar".split("");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="text-center px-6">
        {/* Animated Text */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: i * 0.05, // Adjust animation delay
              }}
            >
              {el}
            </motion.span>
          ))}
        </h1>

        {/* Short Description */}
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >        
        A passionate React developer crafting modern and responsive web applications.<br/>
        I specialize in creating user-friendly interfaces with clean and efficient code.<br/>
        Committed to turning ideas into seamless digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          
            <button onClick={()=>scrollToSection("about")} className="px-6 py-3 bg-black text-white rounded-lg font-medium shadow-md hover:bg-gray-900">
              About Me
            </button>     
            <button onClick={()=>scrollToSection("contact")}  className="px-6 py-3 border border-black text-black rounded-lg font-medium shadow-md hover:bg-gray-200">
              Contact Me
            </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
