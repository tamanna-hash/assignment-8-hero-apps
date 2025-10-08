import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-gray-500 mb-4">
                <i>{error.message}</i>
            </p>
            <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;