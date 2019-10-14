import React from 'react';

const MidContent = () => {
	return (
		<section className="midcontainer">
			<div>
				<iframe
					className="youtube"
					src="https://www.youtube.com/embed/D8pnmwOXhoY"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</section>
	);
};

export default MidContent;
