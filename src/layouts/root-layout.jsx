import React, { memo } from 'react'
import { Link, Outlet } from 'react-router-dom'
Link

const RootLayout = memo(() => {
    return (
        <section>
            <nav>
                You are in root layout
                <ul>
                    <Link to="/home" >Home</Link>
                    <Link to="/players">Players</Link>
                    <Link to="/teams">Teams</Link>

                </ul>
            </nav>
            <Outlet />
        </section>
    )
}, [])

export default RootLayout