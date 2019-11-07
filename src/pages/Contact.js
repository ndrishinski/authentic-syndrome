import React from 'react';
import * as emailjs from 'emailjs-com';

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.didSubmit = false
    }

    handleSubmit() {
        let obj = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        if (this.state.name && this.state.email.indexOf('@') != -1 && this.state.message) {
            console.log(this.state)
            emailjs.send('gmail', 'template_5mDSH2Eo', this.state, 'user_YMOJabv1UiRUDMzLMr2qX')
       .then((response) => {
          // console.log('SUCCESS!', response.status, response.text);
          alert('Thank you, we will be in touch shortly.')
          console.log('success')
       }, (err) => {
          // console.log('FAILED...', err);
          console.log('failed')
       })
    .then(() => {
      this.setState({
        name: '',
        email: '',
        message: '',
      })
    })
    }
    }
    render() {
        return (
            <div style={{paddingTop: 70}}>
                <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <p style={{textAlign: 'center'}}>
                $250 training to change your life. Normally $500. <br/>Training usually lasts 2-3 months until job filled. <br/>Please fill out the form below. <br /> Or schedule a time to talk <a href="https://www.calendly.com/ndrishinski">here</a>.
                </p>
            </div>
            
            <form name="form" id="form">
                <div className="row">
                    <div className="col-6 col-12-mobilep">
                        <input onChange={(value) => this.setState({name: value.target.value})} value={this.state.name} type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-mobilep">
                        <input onChange={(value) => this.setState({email: value.target.value})} value={this.state.email} type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <textarea name="message" onChange={(value) => this.setState({message: value.target.value})} value={this.state.message} placeholder="What questions do you have?" rows="6"></textarea>
                    </div>
                    <div className="col-12">
                        <ul className="actions special">
                            <li><input type="button" onClick={() => this.handleSubmit()} value="Submit" /></li>
                        </ul>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}