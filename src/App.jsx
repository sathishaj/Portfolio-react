import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import ContactPage from "./Contact";
import Background from "./Background";

function App() {
  return (
    <>
       <Navbar />
      <Background>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="project"><Project /></section>
        <section id="contact"><ContactPage /></section>
      </Background>
     
    </>
  );
}

export default App;