import React from 'react';
import Card from './Card';

const CardList = ({results}) =>{
	// if (true){
	// 	throw new Error('NooOOO!!');
	// }
	let imagesObj = results.slice(results.length-1)[0]; // isolate images URL list
	console.log('category: ',imagesObj.category);

	let theData = results.slice(0, results.length-2); // isolate data object
	console.log('data: ',theData);

	for(let item in theData){ //this interpolates '/' and ':' as '-'
		let name = theData[item].name;
		let nuname = name.replace(/\//, "-");
		theData[item].name = nuname;
   }

	return(
		<div> {
			theData.map((user,i)=>{
				return (
					<Card key={i}
					name={theData[i].name}
					classification={theData[i].classification}
					homeworld={theData[i].homeworld}
					model={theData[i].model}
					vehicle_class={theData[i].vehicle_class}
					starship_class={theData[i].starship_class}
					manufacturer={theData[i].manufacturer}
					climate={theData[i].climate}
					terrain={theData[i].terrain}
					images={imagesObj}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;