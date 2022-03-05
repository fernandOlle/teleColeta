import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Galery from '../components/Galery';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Info/Data';
import {
  GaleryObjOne,
  GaleryObjTwo,
  GaleryObjThree,
  GaleryObjFour,
} from '../components/Galery/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/SideBar';
import ScrollButton from '../components/ScrollButton';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} contact={false} />
      <Info {...homeObjTwo} contact={false} />
      <Services />
      <Galery {...GaleryObjOne} />
      <Galery {...GaleryObjTwo} />
      <Galery {...GaleryObjThree} />
      <Galery {...GaleryObjFour} />

      <Info {...homeObjThree} contact={false} />
      <Footer />
      <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
    </>
  );
};

export default Home;
