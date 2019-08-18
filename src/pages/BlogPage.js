import React from 'react'
import Nick from '../images/nickDrishinski.jpg'

export default class BlogPage extends React.Component {
    render() {
        return (
            <div>
                <section style={{paddingTop: 70}}>
						<header>
							<h3>The 3 Most Important Things You're Not <br /> Doing For Your First Dev Job</h3>
						<img style={{alignSelf: 'center', height: 200, borderRadius: 10}} src={Nick} alt="Nick Drishinski, Founder of The Jr. Devs" />
						</header>
            {/* <img style={{height: 40, width: 40, border: '1px solid black'}} src="images/pic01.jpg" alt="" /> */}
						<p style={{padding: 20}}>
                            In my limited experience as a Jr. Developer, I have come to realize that pure JavaScript or Python code is only one part of the job. 
                            Although it is definitely important to know the fundamentals of object oriented programming specific to the language you want to work
                            in, it is not the only thing on the minds of interviewers. 
                            <br />
                            <br />

                            While you should study a programming language adequately enough to write some algorithms and programs, there are things that can
                            really set you apart from other inexperienced developers. 
                            <br />
                            <br />
                            1. Knowledge of Git.
                            <br />
                            <br />
                            Having actual experience working within a team on applications can have a huge positive affect on your reputation. By understanding
                            how Git works within a team, builds credit that you are responsible enough to jump in the code base right away. 
                            <br />
                            <br />
                            2. Understanding of Agile.
                            <br />
                            <br />
                            Almost every development team is using a form of Agile, either SCRUM / KANBAN. Again having at least a working knowledge of these concepts
                            is required, however actual experience with managing your own tasks in a team with a software like Jira or Trello will show that you need 
                            little attention once hired. 
                            <br />
                            <br />
                            3. Long term commitment.
                            <br />
                            <br />
                            One of the most important factors in the mind of hiring managers is the time commitment that a new hire is. It takes much more effort and 
                            money to hire a new developer than to try and keep an existing employee. Let me give you an example:<br/><br /> In my current position, my manager and I 
                            were interviewing Jr. Developers. We interviewed 3 candidates. The first 2 were pretty solid in their JavaScript and testing frameworks. Both
                            would have been able to make an immediate impact. The third candidate was very underqualified for the position, and was very clear that they 
                            did not have the current skillset to contribute in any way. <br /><br />

                            My boss wanted to hire the third candidate more than the first two solely because they were in a circumstance that would likely guarantee that
                            they would be staying put with our company for at least the next 3 years. Because in his very impressive experience, he knows that we can 
                            catch anyone up to speed in a matter of weeks/months, and long term that is much better than hiring good talent for only a year. 
                            <br />
                            <br />
                            Get This Experience!
                            <br />
                            
                            Anyone can have a portfolio showcasing some of the work that they have done, in fact a portfolio is a pre-requisite to getting a job.
                            However if you want to get hired, you need to show that you can contribute quickly, and that you have a commitment to the company and the team.
                            <br />
                            <hr />
                            Every job posting "requires" experience. How do you get experience when noone will give you a job because you have no experience? Sounds familiar right? 
                            <br />
                            <br />
                            It took me over 5 months to get my first Jr. Developer role and it was brutal.
                            I started Jr. Dev Life as an open source project to help developers get their first jobs in the industry with tips, skills and experience that I wish someone had 
                            given me.
                            <br />
                            <br />
                            <b> Contact me at ndrishinski@gmail.com to get the experience required for your first job.</b>


                            

                        </p>
						
					</section>
            </div>
        )
    }
}