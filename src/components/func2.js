import React, {Component } from 'react';
import {Card} from 'react-bootstrap';
import Cookies from 'universal-cookie';

class func2 extends Component
{
    constructor(){
        super();
        this.state = {data: []};
    }

    componentDidMount()
    {
        console.log('AppServiceAuthSession = ' + Cookies.get('AppServiceAuthSession'))
        //fetch('http://localhost:7071/api/GetAllUsers')
        fetch('https://mukeshsingh.azurewebsites.net/api/GetAllUsers?code=NOC7aTuJ5YGLd0Sn9OxFaoTGBKxTOlUaU5VZOc2kjLiBbfORiVKHOw==',{
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('AppServiceAuthSession')
              }
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

export default func2;