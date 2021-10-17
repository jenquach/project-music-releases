import React from "react";
import { ReactComponent as LogoOne } from 'icons/heart.svg'
import { ReactComponent as LogoTwo } from 'icons/play.svg'
import { ReactComponent as LogoThree } from 'icons/dots.svg'

const Album = (album) => {
	return (
		<div className="albums">

		<div className="img-container">
			<div className="overlay">
				<div className="logo-heart"> <LogoOne /></div>
				<div className="logo-play"> <LogoTwo /></div>
				<div className="logo-dot"> <LogoThree /></div>	
			</div>     
			<img className="image" src={album.cover} alt="album cover"/>
		</div>

		<div className="album-textcontainer">
			<h2 className="album-title"> {album.name} </h2>
			<h3 className="artist-name">{album.artist}</h3>		
		</div>	
		</div>
	)
}

export default Album
