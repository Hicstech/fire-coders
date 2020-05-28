import React from 'react'
import HomeImage from '../assets/imgs/home.jpg';
import Header from '../layout/Header'
// import Footer from '../layout/Footer'
// import MiddleSection from '../components/MiddleSection'

function Home() {
  return (
    <>
    <Header />
      <img src={HomeImage} alt="Home" style={{paddingTop:"52px"}}/>
      {/* <Header />
      <MiddleSection />
      <Footer /> */}
    </>
  )
}

export default Home
