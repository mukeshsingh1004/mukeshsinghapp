import React, {Component } from 'react';
import {Card} from 'react-bootstrap';
import {withCookies} from 'react-cookie';
//import {UserAgentApplication} from 'msal';

class func2 extends Component
{
    constructor(props){
        super(props);
        const {cookies} = this.props;
        this.state = {
            data: [],
            mycookies: cookies
        };

        this.CallGetAllData = this.CallGetAllData.bind(this);
        this.requiresInteraction = this.requiresInteraction.bind(this);
    }

    componentDidMount()
    {
        let myheaders = new Headers();
        myheaders.append('cookie', 'Bearer ' + this.state.mycookies.get('AppServiceAuthSession'));

        console.info('AppServiceAuthSession: ' +  this.state.mycookies.get('AppServiceAuthSession'))

        //fetch('http://localhost:7071/api/GetAllUsers')
        fetch('https://mukeshsingh.azurewebsites.net/api/GetAllUsers?code=NOC7aTuJ5YGLd0Sn9OxFaoTGBKxTOlUaU5VZOc2kjLiBbfORiVKHOw==',
        {
            headers: myheaders
        })
        .then(result => {
            return result.json();
        })
        .then(jsonData => {           
            console.log(jsonData);
            let dd = jsonData.Value.map( jd => {
            //console.log(jd);
            return <div className="card" key={jd.Id}>
                            <Card>
                                <Card.Header>
                                    {jd.Name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Id: {jd.Id}</Card.Title>
                                    <Card.Text>
                                        Mobile: {jd.Mobile}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    {jd.Email}
                                </Card.Footer>
                            </Card>
                    </div>;
            })
            .catch((error) => {
                console.error(error);
            });;

            this.setState({data: dd});       
        })

        /*let redirectUri = window.location.origin;
        console.info('redirect uri:' + redirectUri);

        var msalConfig = {
            auth: {
                clientId: '7e1341ac-fd38-4b16-9f32-1496091d3157',
                authority: 'https://login.microsoftonline.com/ce8dddd8-c361-4e5e-87d3-f7203f024b8e', //This is your tenant info
                redirectUri: 'https://mukeshsinghapp.azurewebsites.net'
            },
            cache: {
                cacheLocation: "localStorage",
                storeAuthStateInCookie: true
            },
        };

        var myMSALObj = new UserAgentApplication(msalConfig);
        myMSALObj.handleRedirectCallback((error, response) => {
            if (error) {
                console.log(error);
            }
            else {
                if (response.tokenType === "access_token") {
                    //this.CallGetAllData(response.accessToken);
                } else {
                    console.log("token type is:" + response.tokenType);
                }
            }
        });

        var requestObj = {
            scopes: ["user.read"]
        };

        myMSALObj.loginRedirect(requestObj)
            .then((loginResponse) => {
                myMSALObj.acquireTokenSilent(requestObj)
                    .then((tokenResponse) => {
                        this.CallGetAllData(tokenResponse.accessToken);
                    }).catch((error) => {
                        console.log(error);
                        if (this.requiresInteraction(error.errorCode)) {
                            myMSALObj.acquireTokenPopup(requestObj).then((tokenResponse) => {
                                this.CallGetAllData(tokenResponse.accessToken);
                            }).catch((error) => {
                                console.log(error);
                            });
                        }
                    });
            }).catch((error) => {
                console.log(error);
            }); */
    }

    requiresInteraction = (errorCode) => {
        if (!errorCode || !errorCode.length) {
            return false;
        }
        return errorCode === "consent_required" ||
            errorCode === "interaction_required" ||
            errorCode === "login_required";
    }

    AuthRedirectCallBack = (error, response) => {
        if (error) {
            console.log(error);
        } 
        else {
            if (response.tokenType === "access_token") {
                console.info('auth redirect callback');
                //this.CallGetAllData(response.accessToken);
            } else {
                console.log("token type is:" + response.tokenType);
            }
        }
    }
   
    CallGetAllData = (accesstoken) => 
    {
        let headers = new Headers();
        headers.append('Authorization', accesstoken);

        //fetch('http://localhost:7071/api/GetAllUsers')
        fetch('https://mukeshsingh.azurewebsites.net/api/GetAllUsers?code=NOC7aTuJ5YGLd0Sn9OxFaoTGBKxTOlUaU5VZOc2kjLiBbfORiVKHOw==', 
        {
            method: 'GET',
            Accept: 'application/json',
            Content: 'application/json',
            credentials: 'include',
            headers: headers
        })
        .then(result => {
            return result.json();
        })
        .then(jsonData => {           
            console.log(jsonData);
            let dd = jsonData.Value.map( jd => {
               //console.log(jd);
               return <div className="card" key={jd.Id}>
                            <Card>
                                <Card.Header>
                                    {jd.Name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Id: {jd.Id}</Card.Title>
                                    <Card.Text>
                                        Mobile: {jd.Mobile}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    {jd.Email}
                                </Card.Footer>
                            </Card>
                      </div>;
            })
            .catch((error) => {
                console.error(error);
            });;

            this.setState({data: dd});       
        })
    }

    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default withCookies(func2);