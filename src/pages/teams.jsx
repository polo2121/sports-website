import React from 'react'

import { Link } from 'react-router-dom'
// - components
import GoBackButton from '@/components/go-back-button'

const Teams = () => {
    return (
        <div>
            <h1>Teams</h1>
            <Link>Bulls</Link>
            <br />
            <Link>Foxes</Link>
            <br />

            <Link>hedgehogs</Link>
            <br />

            <Link>lemurs</Link>
            <br />

            <Link>koalas</Link>
            <br />

            <GoBackButton />
        </div>
    )
}

export default Teams