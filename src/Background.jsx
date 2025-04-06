


import React from 'react';

const Background = ({ children }) => {

  return (
<div className="relative min-h-screen  ">  {/* Changed overflow-hidden to overflow-auto */}
      {/* Background Shape 1 */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

      {/* Background Shape 2 */}
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      {/* Main Content */}
      <main className="relative z-10 overflow-auto ">{children}</main>
    </div>
  );
};

export default Background;
