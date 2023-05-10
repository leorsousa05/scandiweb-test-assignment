import React from "react";

export const ErrorPage: React.FC = () => {
    return(
        <div className="error">
            <meta http-equiv="refresh" content="2; url=/"/>
            <h1>Error 404</h1>
            <p>We Are Redirecting You!</p>
        </div>
    );
}
