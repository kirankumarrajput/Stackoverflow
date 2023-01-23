 import React from 'react'
 import LeftSideBar from "../../componets/LeftSideBar/LeftSideBar";
 import HomeMainBar from "../../componets/HomeMainBar/HomeMainBar";
 import RightSideBar from "../../componets/RightSideBar/RightSideBar";
 
 const Questions = () => {
   return (
     <div className="home-container-1">
       <LeftSideBar />
       <div className="home-container-2">
         <HomeMainBar />
         <RightSideBar />
       </div>
     </div>
   );
 }; 
 
 export default Questions