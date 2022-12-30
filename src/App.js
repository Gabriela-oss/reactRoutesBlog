//Libs
import { BrowserRouter, Route, Switch, Redirect, Routes } from "react-router-dom";
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
						<Route exact path="/createPost" element={<CreatePost />} />
						<Route exact path="/allPost" element={<AllPost />} />
						<Route path="*" element={<NotFound/>} />
					</Routes>
					{/* <Switch>
        <Redirect from='/CreatePost' to='/Register' />
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

          <Route exact path='/Register' component={Register}>
            <Register /> 
          </Route>

          <Route exact path='/Login' component={Login}>
            <Login />
          </Route>

          <Route exact path='/CreatePost' component={CreatePost}>
            <CreatePost />
          </Route>

          <Route exact path='/AllPost' component={AllPost}>
            <AllPost />
          </Route>

          <Route component=
            {NotFound}>

          </Route>

          

        </Switch> */}
				</div>
			</BrowserRouter>
		</>
	);
}
export default App;
