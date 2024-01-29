import React from "react";
// import Nav from "./nav/Nav";
import Header from "./header/Header";
import { Main } from "./main/Main";
import Body from  "./body/Body";
import SimpleModal from "./simpleModal/SimpleModal";


 const Home = () => {
  return (
    <div>
        {/* <Nav /> */}
        <Header />
        <Main />
        <Body />
        <SimpleModal />
    </div>
  );
};

export default Home;