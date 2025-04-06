import React from "react";
import resume from "./assets/resume.pdf";

const About = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          I'm Sathish Kumar, a passionate React developer with hands-on experience in 
          building modern web applications. I specialize in React, Firebase, Tailwind CSS, 
          and Material UI, aiming to create seamless user experiences.
        </p>

        {/* Skills & Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* Skills Card */}
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-slate-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>React.js</li>
              <li>Material UI & Tailwind CSS</li>
              <li>Firebase</li>
              <li>JavaScript (ES6+)</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          {/* Experience Card */}
          <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-slate-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
            <ul className="text-gray-600">
              <li>
                <strong>Dynamics Liquid</strong> - Frontend Developer (1+ year)
              </li>
              <li>
                Worked on Billing Software, and integrating Firebase.
              </li>
            </ul>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <a
            href={resume}
            className="px-6 py-3 bg-black text-white rounded-lg font-medium shadow-md hover:bg-gray-900"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
