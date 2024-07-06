import React from 'react';
import Navbar from "../components/Navbar"
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Sessaodupla from '../components/Sessaodupla'
import Sessaodireta from '../components/Sessaodireta';
import Menu from '../components/Menu';
import YouTubeVideo from '../components/YouTubeVideo';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Card/>
      <Sessaodupla/> 
      <Sessaodireta/>
      <Menu/>
     <YouTubeVideo videoId="IS1XHAJVURI" />
     <Footer/>
    </>
  );
}

export default Home;
