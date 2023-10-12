import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Team = () => {

    const { team: teamName } = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location.state)

    const teamLists = ['Hedgehogs', 'bulls', 'foxes', 'lemurs', 'koalas']

    const isTeamExist = teamLists.includes(teamName)
    useEffect(() => {
        if (!isTeamExist) {
            throw new Response("Page Not Found Error", { status: 404 })
        }
    }, [])

    console.log(isTeamExist)
    return (
        <div>
            <h1> {teamName}</h1 >
            <Link>View Roster</Link>
            <p>championships</p>
            <p>2000 2002 2009</p>
            <div>
                <h2>Est.</h2>
                <p>2000</p>
            </div>
            <div>
                <h2>Manager</h2>
                <p>2000</p>
            </div>
            <div>
                <h2>Coach</h2>
                <p>2000</p>
            </div>
            <div>
                <h2>Record</h2>
                <p>2000</p>
            </div>
            <section>
                <h1>Articles</h1>
                <div>
                    <Link>Foxes close out big game</Link>
                </div>
            </section>
        </div>


    )
}

export default Team

