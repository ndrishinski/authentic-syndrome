import React from 'react';
import {Link} from 'react-router-dom'

import * as emailjs from 'emailjs-com';
import Nick from '../images/nickDrishinski.jpg'
import code from '../images/codePic.jpg'

export default class Landingpage extends React.Component {
    
    render() {
        return (
            <div>
                <section style={{paddingTop: 70}}>
                        <header>
                            <h3 style={{padding: 30}}>Change your life.<br /> become a developer. Fast.</h3>
                            <img style={{alignSelf: 'center', height: 300, padding: 5}} src={code} alt="Nick Drishinski, Founder of The Jr. Devs" />
                        <ul className="actions special" style={{paddingTop: 20, border: 'none'}}>
                            <Link to={'/contact'}><li><input style={{margin: 5}} type="button" value="Schedule a time to talk" /></li></Link>
                            <Link to={'/get-started'}><li><input style={{margin: 5}} type="button" value="Enroll for $250" /></li></Link>
                        </ul>

                        </header>

                        <div style={{marginTop: 40, padding: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <img style={{alignSelf: 'center', height: 200, borderRadius: 10}} src={Nick} alt="Nick Drishinski, Founder of The Jr. Devs" />
                            
                            <h3 style={{marginTop: 20}}>Meet your Mentor</h3>

                            <p style={{padding: 10}}>Hi, my name is Nick Drishinski. I am a web/mobile developer living in Mesa, Arizona with my wife Emilie. I created
                            Jr. Dev Life because when I was first looking to break into the development ranks after being self taught, I felt 
                            completely lost in all the different languages, frameworks, libraries and tech jargon in general. I interviewed via phone, skype and in person so many times and still had trouble 
                            getting work, until I figured out <span style={{color: 'green'}}>what employers are really looking for.</span></p>
                            <p style={{padding: 10}}>I started Jr. Dev Life to help aspiring developers learn <strong>EXACTLY</strong> what they need to know in order to get a job, as soon as possible. 
                            What most people don't understand, is that you can learn <strong>WHILE</strong> you are getting paid to code. That's what I did and now I'm willing to share the <strong>SECRET SAUCE </strong> 
                            with you.
                            </p>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <h3 style={{marginTop: 40}}>Technologies you will learn in this course: </h3>

                            <ul>
                                <li><i style={{padding: 3}} class="fab fa-html5"></i>HTML5</li>
                                <li><i style={{padding: 3}} class="fab fa-css3-alt"></i>CSS</li>
                                <li><i style={{padding: 3}} class="fab fa-js-square"></i>JavaScript</li>
                                <li><i style={{padding: 3}} class="fab fa-node-js"></i>Node.JS</li>
                                <li><i style={{padding: 3}} class="fab fa-react"></i>React</li>
                                <li><i style={{padding: 3}} class="fas fa-database"></i>MongoDB</li>
                                <li><i style={{padding: 3}} class="fas fa-database"></i>SQL</li>
                            </ul>

                            <div style={{marginTop: 40, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <h3>How you will get your first devloper job: </h3>

                            <ul>
                                <li><i style={{marginRight: 5}} class="fas fa-circle-notch"></i>Mock Interviews with senior developers/hiring managers</li>
                                <li><i style={{marginRight: 5}} class="fas fa-circle-notch"></i>Pair programming with other developers</li>
                                <li><i style={{marginRight: 5}} class="fas fa-circle-notch"></i>Algorithm/whiteboard challenges</li>
                                <li><i style={{marginRight: 5}} class="fas fa-circle-notch"></i>Hackathons</li>
                                <li><i style={{marginRight: 5}} class="fas fa-circle-notch"></i>Agile Methodology/ Task Management</li>
                            </ul>
                            </div>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 45, paddingBottom: 50}}>
                            <h3>Disclaimer!</h3>

                            <h5 style={{color: 'green'}}>This is not a course of pre-recorded videos teaching you how to code. This is one-on-one training sessions done personally by myself to help 
                                you get a developer job ASAP. 
                            </h5>

                            <h5 style={{color: 'green'}}>
                                This is for people that are motivated to change their life in a matter of weeks.
                            </h5>
                        </div>
                        
                    </section>
            </div>
        )
    }
}