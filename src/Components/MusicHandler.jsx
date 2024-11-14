import React, {useEffect, useRef, useState} from "react"
import {FaPlay} from "react-icons/fa"
import {IoPauseSharp} from "react-icons/io5"
import {BsArrowRepeat} from "react-icons/bs"
import "./MusicHandler.css"

function MusicHandler({url}) {
	const audioRef = useRef(null)
	const [progress, setProgress] = useState(0)
	const [duration, setDuration] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const [isRepeating, setIsRepeating] = useState(false)

	const onPlayBtnChange = () => setIsPlaying((prev) => !prev)
	const onRepeatBtnChange = () => setIsRepeating((prev) => !prev)

	const handleTimeUpdate = () => {
		const currentTime = audioRef.current.currentTime
		setProgress((currentTime / duration) * 100)
	}

	const handleLoadedMetadata = () => setDuration(audioRef.current.duration)

	const handleProgressClick = (event) => {
		const clickX = event.nativeEvent.offsetX
		const width = event.target.clientWidth
		const newTime = (clickX / width) * duration
		audioRef.current.currentTime = newTime
	}

	const handleAudioEnd = () => {
		audioRef.current.currentTime = 0
		setProgress(0)
		setIsPlaying(false)
	}

	useEffect(() => {
		if (isPlaying) audioRef.current.play()
		else audioRef.current.pause()
	}, [isPlaying])

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.pause()
			audioRef.current.load()
			setProgress(0)
			if (isPlaying) audioRef.current.play()
		}
	}, [url, isPlaying])

	return (
		<div className="music-handler-container">
			<audio
				ref={audioRef}
				autoPlay={false}
				loop={isRepeating}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleLoadedMetadata}
				onEnded={handleAudioEnd}
			>
				<source src={url} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
			<div className="audio-controls">
				<button className="audio-button" onClick={onPlayBtnChange}>
					{isPlaying ? (
						<IoPauseSharp className="text-orange-500" />
					) : (
						<FaPlay className="text-orange-500" />
					)}
				</button>
				<button className="audio-button" onClick={onRepeatBtnChange}>
					<BsArrowRepeat
						className={isRepeating ? "text-blue-400" : "text-orange-500"}
					/>
				</button>
			</div>
			<div className="progress-bar-container" onClick={handleProgressClick}>
				<div className="progress-bar" style={{width: `${progress}%`}}></div>
			</div>
		</div>
	)
}

export default MusicHandler
