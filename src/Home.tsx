import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className = "main" >
            <h1>Please select the project you want to see:</h1>
            <div className="menu">
                <Link className="button" to="/bubble-burst" >Bubble Burst</Link>
                <Link className="button" to="/bounding-box" >Bounding Box</Link>
            </div>
        </div >
    )
}

export default Home
