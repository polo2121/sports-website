import useAxios from '@/hooks/useAxios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


const Player = () => {
    const { player } = useParams();

    const { response: players, fetchStatus } = useAxios(`/players/${player}`, "GET");
    console.log(players)
    return (
        <div>
            {fetchStatus === "loading" ? <h1>Loading</h1> : null}
            {fetchStatus === "success" ? (
                <div>
                    <h1>{players.name}</h1>
                    <h1>{players.position}</h1>
                    <h1>{players.teamId}</h1>
                    <h1>{players.apg}</h1>
                    <h1>{players.spg}</h1>
                    <h1>{players.rpg}</h1>
                    <h1>{players.ppg}</h1>
                </div>) : null}


        </div>
    )
}

export default Player