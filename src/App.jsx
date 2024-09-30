import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section41 from "./components/Section41";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section11 from "./components/Section11";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section41/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section11/>
    </div>

  );
}

export default App;
