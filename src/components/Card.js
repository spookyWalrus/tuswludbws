import React from 'react';

const Card = ({name,homeworld,model,vehicle_class,starship_class,climate,terrain,manufacturer,images}) =>{
	// console.log(images);
	let vehicle = name+'.jpg';
	return(
		<div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 mw5'>
			<img alt='' src={images[vehicle]}  />
			<div>
				<h3 className="f3">{name}</h3>
				<p>{homeworld}</p>
				<p>{model}</p>
				<p>{vehicle_class}</p>
				<p>{starship_class}</p>
				<p>{climate}</p>
				<p>{terrain}</p>
				<p>{manufacturer}</p>
			</div>
		</div>
	);
}

export default Card;