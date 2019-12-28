import React, {Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

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

          //fetch('http://localhost:7071/api/AddNewUser', {
          fetch('https://mukeshsingh.azurewebsites.net/api/AddNewUser?code=GcU4AMRhxHKCiyMLoxp4tZUI2maeuq8U5GUI56oW8haWLOoUZE3Xdw==', {
            method: 'post',           
            body: JSON.stringify(userObject)
           })
           .then((response) => {
            this.setState({Id: '', Name: '', Mobile: '', Email: '' } );
            alert('User was added: ' + this.state.Name);
           })
           .catch((error) => {
             console.error(error);
           });
        
      }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formId">
                      <Form.Label column sm={2}>Id:</Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" name="Id" placeholder="enter id" value={this.state.Id} onChange={this.handleChangeId}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formName">
                      <Form.Label column sm={2}>Name:</Form.Label>
                      <Col sm={10}>
                        <Form.Control  type="text" name="Name" placeholder="enter name" value={this.state.Name} onChange={this.handleChangeName}/>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formMobile">
                      <Form.Label column sm={2}>Mobile:</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" name="Mobile" placeholder="enter mobile no." value={this.state.Mobile} onChange={this.handleChangeMobile}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEmail">
                      <Form.Label column sm={2}>Email:</Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" name="Email" placeholder="enter email" value={this.state.Email} onChange={this.handleChangeEmail}/>
                        </Col>
                    </Form.Group>                                                            
                    
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default func1;