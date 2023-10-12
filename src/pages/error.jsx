import React from 'react'
import { useRouteError } from 'react-router';

import NotFoundPage from "@/pages/not-found"

const ErrorPage = () => {
    let error = useRouteError();

    console.error(error);
    return (
        error.status === 404 ? <NotFoundPage /> :
            (<div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.message || error.status}</i>
                </p>
            </div>)

    )
}

export default ErrorPage