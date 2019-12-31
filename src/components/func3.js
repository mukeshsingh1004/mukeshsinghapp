import React, {Component } from 'react';
import {withCookies} from 'react-cookie';

class func3 extends Component
{
    constructor(props)
    {
        super(props);
        const {Cookies} = this.props;
        this.state = {mycookies: Cookies};
    }

    render() {
        return (
            <>
             <p>AppServiceAuthSession Cookie: {this.state.mycookies.get('AppServiceAuthSession')}</p>
            </>
        )
    }
}

export default withCookies(func3);