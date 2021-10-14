import React from "react";
import { ReactComponent as LogoOne } from 'icons/heart.svg'
import { ReactComponent as LogoTwo } from 'icons/play.svg'
import { ReactComponent as LogoThree } from 'icons/dots.svg'



const Album = (album) => {
	return (
		<div className="albums">

		<div className="img-container">
			<div className="overlay">
		
		
		<div className="logoTypeHeart"> <LogoOne /></div>
		<div className="logoTypePlay"> <LogoTwo /></div>
		<div className="logoTypeDot"> <LogoThree /></div>
					
				
					
			</div>
				      
					<img className="image" src={album.cover} alt="album cover"/>
					
		</div>

			 
		
			<div className="AlbumTextContainer">
		

					<h2 className="AlbumTitle"> {album.name} </h2>
					<h3 className="ArtiistName">{album.artist}</h3>
					
			</div>
						          
			
			
		</div>

	)
}

 
export default Album