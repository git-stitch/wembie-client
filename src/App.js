import React from 'react';
import logo from './logo.svg';
import marketImg from './images/qnmarket2.jpg'
import './App.sass'
import HeroContainer from './containers/HeroContainer'
import Footer from './components/Footer'
import MarketImgContainer from './containers/MarketImgContainer'
import CountriesContainer from './containers/CountriesContainer'
import FoodImgContainer from './containers/FoodImgContainer'
import DessertsContainer from './containers/DessertsContainer'
import LocationContainer from './containers/LocationContainer'
import SliderContainer from './containers/SliderContainer';

const bash = {
  name: "Bashkiria",
  bio: 'The Republic of Bashkortostan, also historically known as Bashkiria, is a federal subject of Russia. It is located between the Volga River and the Ural Mountains. Its capital is the city of Ufa. With a population of 4,072,292 as of the 2010 Census, Bashkortostan is the most populous republic in Russia.'
}

const mold = {
  name:"Moldova",
  bio:`Moldova, an Eastern European country and former Soviet republic, has varied terrain including forests, rocky hills and vineyards. Its wine regions include Nistreana, known for reds, and Codru, home to some of the world’s largest cellars. Capital Chișinău has Soviet-style architecture and the National Museum of History, exhibiting art and ethnographic collections that reflect cultural links with neighboring Romania.`
}

const dessertArray = [
  {
    name:"Moldovan Waffles",
    description:"Whipped cheese cake filled waffles in chocolate and vanilla flavors.",
    img:"https://i.ibb.co/3m24R7J/vvembie-waffles-top.jpg"
  },
  {
    name:"Bashkir Farm Donuts",
    description:"Warm farm cheese donuts topped with powder sugar.",
    img:"https://i.ibb.co/8gNKyFz/vvembie-donuts.jpg"
  }
]

class App extends React.Component {
  state={
    bashkir: true,
    moldova: false,
    b:bash,
    m:mold,
    desserts:dessertArray
  }

  setActiveCountry = (country) => {
    if(country === "bashkir" && this.state.moldova){
      this.setState({
        bashkir: !this.state.bashkir,
        moldova: !this.state.moldova
      })
    }
    if(country === "moldova" && this.state.bashkir){
      this.setState({
        moldova: !this.state.moldova,
        bashkir: !this.state.bashkir
      })
    }
  }

  render(){
    return (
      <div className="container is-fluid box">
        <HeroContainer />
        <MarketImgContainer/>
        <CountriesContainer setActiveCountry={this.setActiveCountry} bashkir={this.state.bashkir} moldova={this.state.moldova} b={this.state.b} m={this.state.m}/>
        <FoodImgContainer />
        <DessertsContainer desserts={this.state.desserts}/>
        <LocationContainer />
        <SliderContainer />
        <Footer />
      </div>
    )
  }
}

export default App;
