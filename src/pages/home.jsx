import React from 'react';
import Navbar from "../components/Navbar"
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Sessaodupla from '../components/Sessaodupla'
import Sessaodireta from '../components/Sessaodireta';


function Home() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Card/>
  {/*     <Sessaodupla/> */}
      <Sessaodireta/>

    </>
  );
}

export default Home;
