//Libs
import {
	BrowserRouter,
	Route,
	Switch,
	Navigate,
	Routes,
} from "react-router-dom";
import React from "react";
import {
	Navbar,
	Home,
	Login,
	Register,
	CreatePost,
	AllPost,
	NotFound,
} from "./components";
//Components

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/createPost" element={ <Navigate to="/login"/>} />
						<Route exact path="/allPost" element={<AllPost />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}
export default App;
