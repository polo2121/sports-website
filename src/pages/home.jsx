import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="Home">Home</Link>
            <Link to="players">Players</Link>
            <Link to="Teams">Teams</Link>

        </div>
    )
}

export default Home