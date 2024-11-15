import "./App.css"
import Gita from "./Components/Gita"
import React from "react"
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Gita />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
