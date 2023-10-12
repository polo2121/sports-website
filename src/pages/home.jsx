import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Hash History Basketball League</h1>
            <h3>Select a team</h3>
            <Link to="bulls">Bulls</Link>
            <Link to="foxes">Foxes</Link>
            <Link to="hedgehogs">Hedgehogs</Link>
            <Link to="lemurs">Lemurs</Link>
            <Link to="koalas">Kolas</Link>
        </div>
    )
}

export default Home