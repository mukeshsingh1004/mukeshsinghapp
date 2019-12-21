import React, {Component } from 'react';

class func1 extends Component
{
    constructor(){
        super();
        this.state = {Id: String, Name: String, Mobile: String, Email: String };
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobile = this.handleChangeMobile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(event) {
      this.setState({Id: event.target.value});
      }

      handleChangeName(event) {
        this.setState({Name: event.target.value});
      }

      handleChangeMobile(event) {
        this.setState({Mobile: event.target.value});
      }

      handleChangeEmail(event) {
        this.setState({Email: event.target.value});
      }

    handleSubmit(event) {    
        event.preventDefault();
         
        let userObject =   { "Id": this.state.Id,
         "Name": this.state.Name,
         "Mobile": this.state.Mobile,
         "Email": this.state.Email};

         //http://localhost:7071/api/AddNewUsery
        fetch('https://mukeshsingh.azurewebsites.net/api/AddNewUser?code=GcU4AMRhxHKCiyMLoxp4tZUI2maeuq8U5GUI56oW8haWLOoUZE3Xdw==', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'Sec-Fetch-Mode': 'no-cors',
            'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(userObject)
           })
           .catch((error) => {
             console.error(error);
           });

        //alert('User was added: ' + this.state.Name);
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Id:<input type="text" name="Id" value={this.state.Id} onChange={this.handleChangeId}/></label>
                    <label>Name:<input type="text" name="Name" value={this.state.Name} onChange={this.handleChangeName}/></label>
                    <label>Mobile:<input type="text" name="Mobile" value={this.state.Mobile} onChange={this.handleChangeMobile}/></label>
                    <label>Email:<input type="text" name="Email" value={this.state.Email} onChange={this.handleChangeEmail}/></label>
                    <input type="submit"variant="primary" name="Submit"/>
                </form>
            </div>
        )
    }
}

export default func1;