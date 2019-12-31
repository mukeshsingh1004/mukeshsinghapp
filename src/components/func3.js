import React, {Component } from 'react';
import {withCookies} from 'react-cookie';

class func3 extends Component
{
    constructor(props)
    {
        super(props);
        const {cookies} = this.props;
        this.state = {mycookies: cookies, token: ''};
    }

    componentDidMount()
    {  
        var h = new Headers();
        h.append("Access-Control-Allow-Origin", "*");

       fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
           method: 'post',
           headers: h
       })
       .then(result => {
           return result.text();
       })
       .then(textData => {           
           console.log(textData);
           this.setState({token: textData});  
       })
       .catch((error) => {
        console.error(error);
      });
    }

    render() {
        return (
            <>
             <p>AppServiceAuthSession Cookie: {this.state.mycookies.get('AppServiceAuthSession')}</p>
             <p>AppServiceAuthSession Token: {this.state.token}</p>
            </>
        )
    }
}

export default withCookies(func3);