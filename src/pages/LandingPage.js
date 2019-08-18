import React from 'react';

import * as emailjs from 'emailjs-com';
import Nick from '../images/nickDrishinski.jpg'
import money from '../images/wasteMoney.png'

export default class Landingpage extends React.Component {
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
            <div>
                <section style={{paddingTop: 70}}>
                        <header>
                            <h3 style={{padding: 30}}>Change your life.<br /> become a developer. Fast.</h3>
                        {/* <div style={{border: '3px solid black'}}> */}
                            <img style={{alignSelf: 'center', height: 200, border: '2px solid black', padding: 5}} src={money} alt="Nick Drishinski, Founder of The Jr. Devs" />
                        {/* </div> */}
                        </header>

                        <div style={{padding: 30}}>
                            <h3>The 3 major problems with <span style={{color: 'red'}}>code bootcamps</span>:</h3>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{flex: 1}}><strong>1</strong>: They are way too <span style={{color: 'red'}}>expensive</span>.</p>
                                <p style={{flex: 1}}><strong>2</strong>: Teacher to student ratio sucks.</p>
                                <p style={{flex: 1, color: 'red'}}><strong>3</strong>: They don't actually help you get a job.</p>
                            </div>
                        </div>

                        <div style={{padding: 30}}>
                            <h3>Why you should join <span style={{color: 'green'}}>Jr. Dev Life</span>:</h3>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{flex: 1}}><strong>1</strong>: Entire course is designed to help you get a job fast. <span style={{color: 'green'}}>I got a $67,000 job in under 9 months of development experience.</span></p>
                                <p style={{flex: 1}}><strong>2</strong>: My course is a fraction the cost of a bootcamp: <span style={{color: 'green'}}>Sign up today for $50 off.</span></p>
                                <p style={{flex: 1}}><strong>3</strong>: I give <span style={{color: 'green'}}>one on one training</span> focused solely on real life job requirements.</p>
                            </div>
                        </div>
                                 
                                    <div>
                                        <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                                        $250 for one month of training to change your life. Fill out the form below to start your journey or to find out more:
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
                                                <textarea name="message" onChange={(value) => this.setState({message: value.target.value})} value={this.state.message} placeholder="What do you want to accomplish?" rows="6"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions special">
                                                    <li><input type="button" onClick={() => this.handleSubmit()} value="Submit" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                    </div>

                        <div style={{padding: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img style={{alignSelf: 'center', height: 200, borderRadius: 10}} src={Nick} alt="Nick Drishinski, Founder of The Jr. Devs" />

                            <p style={{padding: 10}}>Hi, my name is Nick Drishinski. I am a web/mobile developer living in Mesa, Arizona with my wife Emilie. I created
                            Jr. Dev Life because when I was first looking to break into the development ranks after being self taught, I felt 
                            completely lost in all the different languages, frameworks, libraries and tech jargon in general. I interviewed so many places via phone, skype and in person, I
                            gained valuable insight into what experience really matters when hiring developers. As a lead developer at my current company I am also involved in the 
                            hiring process for our devolopment team and have seen the struggles and pitfalls of Jr. Developers interviewing from the employers side too. My mission is to bring 
                            every aspiring developer confidence that comes with valuable experience, so that they can get a great job feeling confident with no imposter syndrome.
                            </p>
                        </div>
                        
                    </section>
            </div>
        )
    }
}