
import React from "react";

const Article = () => {
	return (
		<article className="article">
    
			<h2>Album</h2>
			<p>Artist</p>
			<p>relese date</p>
			<img src="https://www.pexels.com/sv-se/foto/kurva-torr-textur-gul-5699811/150x150" alt="img-info"/>

			<div className="article-tag-container">
				<div className="article-tag">tags</div>
				<div className="article-tag">tags</div>
				<div className="article-tag">tags</div>
			</div>
		</article>
	);
};

export default Article