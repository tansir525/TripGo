import React, { Component } from "react";
import Footer from "../../Shared/Footer/Footer";

// import AddService from "../AddService/AddService";
import Bannar from "../Bannar/Bannar";
import Services from "../Services/Services";
import TravelEssential from "../TravelEssential/TravelEssential";
import TravelItem from "../TravelItem/TrevelItem";
import WhyChoose from "./WhyChoose/WhyChoose";

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <Bannar></Bannar>
        <TravelEssential></TravelEssential>
        <Services></Services>
        <TravelItem></TravelItem>
        <WhyChoose></WhyChoose>
        {/* <AddService></AddService> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
