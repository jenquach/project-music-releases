import React from "react";
import data from "./data.json";

import Album from "components/Album";



export const App = () => { console.log(data)
	return (
	
    <div>
      <h1 className="header"> New albums & singles</h1>
      <Album/>
      <Album/>
      <Album/>
    </div>
    
	);
};