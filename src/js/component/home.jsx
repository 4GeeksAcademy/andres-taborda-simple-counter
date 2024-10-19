import React, { useEffect, useState, useRef } from "react";


import { SecondsCounter } from "./SecondsCounter";
import { Button } from "./button";


//create your first component
const Home = () => {
	
	const [seconds, setSeconds] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [intervalId, setIntervalId] = useState(0);
	const [isReverse, setIsReverse] = useState(false);
	const inputRef = useRef()

	const handleReset = () => {
		console.log(isReverse);
		!isReverse ? setSeconds(0) : setSeconds(inputRef.current.value)
		setIsPlaying(true)
	}

	const handleReverse = () => {	
		
			
		const time = Number(inputRef.current.value)
		if (time > 0 && typeof time === "number") {
			setSeconds(time)
			setIsReverse(true)
			setIsPlaying(true)
		}
		
	}
	const start = () => {
		setIsPlaying(true)
	}

	const pause = () => {
		clearInterval(intervalId)
		setIsPlaying(false)
	}

	const handlePlay = () => {		
					
		if (isPlaying) {

			setIntervalId(
				setInterval(() => {					
					setSeconds(prev => {

						if (isReverse && prev === 0) {
							pause()
							return prev
						}
						if (isReverse && prev > 0) {							
							return prev - 1
						}
						if (!isReverse) {
							return prev + 1
						}
					})					
				}, 1000)
			)
		}
		
	}

	useEffect(() => {
		handlePlay()
		return clearInterval(intervalId)
	}, [isPlaying, isReverse]);
	
	return (
		<>
			<SecondsCounter seconds={seconds} />
			<div className="container d-grid justify-content-center gap-5 p-5">
				<Button 
					description={"Reset"} 
					action={handleReset} 
					currentIcon="RESET"
				/>
				<Button 
					description={isPlaying ? "Pause" : "Start"} 
					action={isPlaying ? pause : start}
					currentIcon={isPlaying ? "PAUSE" : "PLAY"}
				/>
				<input 
					ref={inputRef} 
					type="number" 
					onChange={handleReverse} 
					placeholder="Countdown time"
				/>
			</div>
		</>
	);
};

export default Home;
