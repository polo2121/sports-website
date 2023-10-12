import React, { memo, useCallback, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

// - components
import GoBackButton from "@/components/go-back-button"

import useAxios from '@/hooks/useAxios'

const Players = memo(() => {
    const [triger, setTriger] = useState(false);
    const { response: players, fetchStatus } = useAxios("/players", "GET");
    console.log("players page triggered")
    const textToHyphenated = useCallback((text) => {
        // Convert the text to lowercase.
        const lowerCaseText = text.toLowerCase();

        // Remove all spaces from the text.
        const noSpacesText = lowerCaseText.replace(/ /g, "-");
        return noSpacesText;
    }, [])

    return (
        <div>

            <h1>Players</h1>
            <button onClick={() => setTriger(!triger)}>Get Tigger</button>
            {fetchStatus === "loading" ? <h1>Loading....</h1> : null}
            {fetchStatus === "error" ? <h1>Something went wrong....</h1> : null}
            {fetchStatus === "success" ? players.map((player) => (<Link to={textToHyphenated(player.name)} key={player.id} ><li>{player.name}</li></Link>)) : null}
            <Outlet />
            <GoBackButton />
        </div>
    )
}, [])

export default Players 