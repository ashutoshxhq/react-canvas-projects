import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/bubble-burst" >Bubble Burst</Link>
            <Link to="/bounding-box" >Bounding Box</Link>
        </div>
    )
}

export default Home
