import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HookApp from '../HookApp'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import NavBar from './NavBar'

const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar/>

                <Routes>
                    <Route exact path="/about" element={<AboutScreen/>} />
                    <Route exact path="/login" element={<LoginScreen/>} />
                    <Route exact path="/" element={<HomeScreen/>} />
                    <Route path="*" element={<HomeScreen/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter