import React from "react";
import "./Home.css";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Chat from "../../components/Chat/Chat";
const Home = () => {
  return (
    <div className="home">
      <div className="chat_container">
        <LeftSideBar/>
        <Chat/>
        <RightSideBar/>
        
        
      </div>
    </div>
  );
};

export default Home;
