import React, {Component } from 'react';

class func3 extends Component
{
    constructor(){
        super();
        this.state = {data: String};
    }

    componentDidMount()
    {
        fetch('http://localhost:7071/api/GetAllUsers')
        .then(result => {
            return result.text();
        })
        .then( d=> {
            console.log(d);
            this.setState({data: d});
        })
    }

    render() {
        return (
            <div>{this.state.data}</div>
        )
    }
}

export default func3;