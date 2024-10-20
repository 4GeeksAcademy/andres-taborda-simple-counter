import React, { useEffect, useState, useRef, useContext } from "react";


import { SecondsCounter } from "./SecondsCounter";
import { Button } from "./button";
import { Modal } from "./modal";
import { ThemeMenu } from "./themeMenu";
import { ThemeContext } from "../../context/themeContext";



//create your first component
const Home = () => {
	
	const [seconds, setSeconds] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [intervalId, setIntervalId] = useState(0);
	const [isReverse, setIsReverse] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const {themeApp, setThemeApp} = useContext(ThemeContext)
	const inputRef = useRef()

	const handleReset = () => {
		setSeconds(0)
		setIsPlaying(true)
		setIsReverse(false)
		inputRef.current.value = ""
	}

	const handleReverse = () => {	
		
		const time = Number(inputRef.current.value)

		if (time <= 0 || typeof time !== "number") {
			showModal("Please enter a valid time")
			return
		}
		
		setSeconds(time)
		setIsReverse(true)
		setIsPlaying(true)
	}

	const start = () => {
		setIsPlaying(true)
		
	}

	const stopCounter = () => {
		clearInterval(intervalId)
		setIsPlaying(false)
		
	}

	const showModal = (message) => {
		setModalMessage(message)
		const btnModal = document.getElementById('modalButton')
		btnModal.click()
	}

	const handlePlay = () => {		
				
		if (isPlaying && isReverse) {
			setIntervalId(
				setInterval(() => {					
					setSeconds(prev => {

						if (prev > 0) {							
							return prev - 1
						}												
						stopCounter()
						showModal("Your Time Is Up")
						return inputRef.current.value
						
					})					
				}, 1000)
			)
			return
		}

		if (isPlaying) {
			setIntervalId(
				setInterval(() => {					
					setSeconds(prev =>  prev + 1)				
				}, 1000)
			)
		}
	}

	useEffect(() => {
		!isPlaying 
		? document.querySelector('body').className =`theme ${themeApp}`
		: document.querySelector('body').className=``
		handlePlay()
		return clearInterval(intervalId)
	}, [isPlaying, isReverse,themeApp]);

	const handleChangeTheme = (theme) => {
		setThemeApp(theme)
		localStorage.setItem("theme", theme)		
	}
	
	return (
		<>
			<Modal message={modalMessage}/>
			<SecondsCounter seconds={seconds} />
			<div className="container d-grid justify-content-center gap-5 p-5">
				<Button 
					description={"Reset"} 
					action={handleReset} 
					currentIcon="RESET"
				/>
				<Button 
					description={isPlaying ? "Pause" : "Start"} 
					action={isPlaying ? stopCounter : start}
					currentIcon={isPlaying ? "PAUSE" : "PLAY"}
				/>
				<input 
					className="actions-counter"
					ref={inputRef} 
					type="number" 
					onChange={handleReverse} 
					placeholder="Countdown time"
					min={1}
				/>
			</div>
			<ThemeMenu changeTheme={handleChangeTheme} isPlaying={isPlaying}/>
		</>
	);
};

export default Home;
