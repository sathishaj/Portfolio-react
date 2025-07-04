import { motion } from "framer-motion";
import sathish from "../src/assets/sathish.jpeg"
import { img } from "motion/react-client";

const Hero = () => {
  const text = "Hi, I'm Sathish Kumar".split("");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col gap-3 items-center justify-center h-screen ">
       <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        src ={sathish} alt="profile image" 
        className="w-32 h-32 bg-white rounded-full object-cover border-white " />
      <div className="text-center px-6">   
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
