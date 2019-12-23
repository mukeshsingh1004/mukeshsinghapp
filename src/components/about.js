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
                        <strong>WebApp</strong>: <a href="https://github.com/mukeshsingh1004/mukeshsinghapp.git">https://github.com/mukeshsingh1004/mukeshsinghapp.git</a>
                    <br/>
                        <strong>Functions Service</strong>: <a href="https://github.com/mukeshsingh1004/mukeshsingh.git">https://github.com/mukeshsingh1004/mukeshsingh.git</a>
                </p>
            </Jumbotron>
        </div>
    );
};

export default about;