import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const home = () => {
    return (
        <div>
            <Jumbotron style={{height: '440px'}}>
                <h1>Welcome!</h1>
                <p>Welcome to Mukesh Singh Home Page, this site is created in react and hosted in azure app.
                   The pupose of this site is to call Azure functions.
                    <br/>
                   Click on Functions link and execute all the functions.
                </p>
            </Jumbotron>
        </div>
    );
}

export default home;