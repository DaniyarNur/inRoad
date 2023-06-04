import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import Map from "./components/mapSection/map";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Reviews from "./components/reviewsSection/Reviews";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="App">
            <Header/>
            <Section1/>
            <Map/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Reviews/>
            <Footer/>
        </div>
  );

}

export default App;
