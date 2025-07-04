import { Link } from "react-router-dom";

function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <div className="w-full h-[64px] bg-white flex items-center justify-end p-5 shadow-md fixed top-0 left-0 z-50">
      <ul className="flex gap-2">
        <li>
          
            <button onClick={() => scrollToSection("home")} className="text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded-lg px-4">
              Home
            </button>
         
        </li>
        <li>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded-lg px-4">
              About
            </button>
        
        </li>
        <li>
         
            <button  onClick={() => scrollToSection("project")} className="text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded-lg px-4">
              Project
            </button>
        </li>
        <li>
      
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 font-semibold hover:bg-gray-300 p-2 rounded-lg px-4">
              Contact
            </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
