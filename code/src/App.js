import React from "react";
import data from "./data.json";
import css from "index.css"
import Album from "components/Album";



export const App = () => { console.log(data)
	return (
	
   
    <div className="container">
    <div className="header-container"> 
    <h1>New album & singles</h1>
    <hr className="hr"></hr>
    </div>  

    <div className="album-container">
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
      <Album/>
   </div>
   </div>
    
	);
};