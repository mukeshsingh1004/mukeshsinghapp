import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const about = () => {
    return (
        <div>
            <Jumbotron style={{height: '440px'}}>
                <h1>About</h1>
                <p>I've created this site for learning puprposes.
                    Explore the code on git.
                    <br/>
                    <br/>
                        <strong>WebApp</strong>: https://github.com/mukeshsingh1004/mukeshsinghapp.git
                    <br/>
                        <strong>Functions Service</strong>: https://github.com/mukeshsingh1004/mukeshsingh.git
                </p>
            </Jumbotron>
        </div>
    );
};

export default about;