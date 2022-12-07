import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Lifecycle = () => {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);

	// useEffect(()=>{
	//     console.log("UseEffect no dependency")
	// })

	//  useEffect(()=>{
	//     console.log("UseEffect arreglo vacio")
	// },[])

	// useEffect(()=>{
	//     console.log("UseEffect una dependencia")
	// },[counter1])

	useEffect(() => {
		console.log('UseEffect dos dependencia');
	}, [counter1, counter2]);

	return (
		<div>
			<h1>Click: {counter1}</h1>
			<h1>Click: {counter2}</h1>
			{/* SI queremos que se ejecute solo cuando le damos click () =>{} porque tiene parametros */}
			<button onClick={() => setCounter1(counter1 + 1)}>Aumentar 1</button>
			<button onClick={() => setCounter2(counter2 + 1)}>Aumentar 2</button>
		</div>
	);
};
