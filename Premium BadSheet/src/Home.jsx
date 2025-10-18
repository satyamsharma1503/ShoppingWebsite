import React from 'react'
import Marquees from "./Marquee/Marquees";
import Hero from "./component/Hero/Hero";
import Selling from "./component/Selling/Selling";
import Background from "./component/Background/Background";
import Arrivals from "./component/Arrivals/Arrivals";
import Style from "./component/Allstyle/Style";
import Icon from "./component/AllIcon/Icon";
import ShopNow from "./component/ShopNow/ShopNow";
import Cards from "./component/Cards/Cards";
import Customer from "./component/Customer/Customer";
import Accordion from "./component/Accordion/Accordion";
import { Divider } from "@react-md/divider";
import Layout from './Layout';
import Card2 from './component/Card2/Card2';
function Home() {
  return (
    <div>
      <Hero />
      <Selling />
      <Background />
      <Arrivals />
      <Style />
      <Icon/>
      <ShopNow />
      <Cards />
      <Customer />
      <Accordion />
    </div>
  );
}

export default Home