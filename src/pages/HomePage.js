import React from 'react';

import Nick from '../images/nickDrishinski.jpg';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="is-preload">

			<div id="header">
				<span className="logo icon"><i class="fa fa-code" aria-hidden="true"></i></span>
				<h1>Jr. Dev Life</h1>
				<p>A place for Jr. Developers to learn and get job ready
				<br />
				by Jr. Developers.</p>
			</div>

			<div id="main">

				<header className="major container medium">
					<h2>We give developers practical
					<br />
					experience, so they can go 
					<br />
					into a job prepared.</h2>
					
					<p>
                    Trying to get experience <br />
                        with no previous experience? <br />
                        This is an open source project to help new developers <br />
                        get meaningful experience to help them get their first job. 
                        Our goal is to<br />
                    
					rid Jr. Developers of <a href="https://en.wikipedia.org/wiki/Impostor_syndrome" target="_blank">imposter syndrome</a></p>
				</header>

				<div className="box alt container">
					<section className="feature left">
						<a href={"#"} className="image icon solid fa-signal"><img src="https://amp.businessinsider.com/images/56c4cd972e5265bc008b7bc2-750-563.png" alt="" /></a>
						<div className="content">
							<h3>Mock Interviews</h3>
							<p>Giving you multiple mock interviews with other developers.</p>
						</div>
					</section>
					<section className="feature right">
						<a href={"#"} className="image icon solid fa-code"><img src="https://d3e1o4bcbhmj8g.cloudfront.net/photos/732303/big_square/5d5b7887cdb6df351e61eab5c286befb4e63fc52.jpg" alt="" /></a>
						<div className="content">
							<h3>Development & Task Management</h3>
							<p>Assigning you real development tasks on task management platforms like Jira, Asana and Trello while using Git extensively, building out your portfolio.</p>
						</div>
					</section>
					<section className="feature left">
						<a href={"#"} className="image icon solid"><img src="https://static.thenounproject.com/png/299353-200.png" alt="" /></a>
						<div className="content">
							<h3>Code Reviews</h3>
							<p>Upon completion of tasks, your code can be reviewed and revised with other developers.</p>
						</div>
					</section>
				</div>

				
				<div className="box container">
					{/* <header>
						<h2>A lot of generic stuff</h2>
					</header>
					<section>
						<header>
							<h3>Paragraph</h3>
							<p>This is the subtitle for this particular heading</p>
						</header>
						<p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
						habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
						leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
						amet risus elit.</p>
					</section>
					<section>
						<header>
							<h3>Blockquote</h3>
						</header>
						<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
						tempus euismod. Vestibulum ante ipsum primis in faucibus.</blockquote>
					</section>
					<section>
						<header>
							<h3>Divider</h3>
						</header>
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p>
						<hr />
						<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
						ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
						facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
						tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia.</p>
					</section>
					<section>
						<header>
							<h3>Unordered List</h3>
						</header>
						<ul className="default">
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						</ul>
					</section>
					<section>
						<header>
							<h3>Ordered List</h3>
						</header>
						<ol className="default">
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
							<li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
						</ol>
					</section>
					<section>
						<header>
							<h3>Table</h3>
						</header>
						<div className="table-wrapper">
							<table className="default">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>45815</td>
										<td>Something</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>24524</td>
										<td>Nothing</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>45815</td>
										<td>Something</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>24524</td>
										<td>Nothing</td>
										<td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
										<td>19.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</section>
					<section>
						<header>
							<h3>Form</h3>
						</header>
						<form method="post" action="#">
							<div className="row">
								<div className="col-6 col-12-mobilep">
									<label htmlFor="name">Name</label>
									<input onChange={() => console.log('wassup')} className="text" type="text" name="name" id="name" value="" placeholder="John Doe" />
								</div>
								<div className="col-6 col-12-mobilep">
									<label htmlFor="email">Email</label>
									<input onChange={() => console.log('wassup')} className="text" type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
								</div>
								<div className="col-12">
									<label htmlFor="subject">Subject</label>
									<input onChange={() => console.log('wassup')} className="text" type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
								</div>
								<div className="col-12">
									<label htmlFor="subject">Message</label>
									<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions special">
										<li><input onChange={() => console.log('wassup')} type="submit" value="Send" /></li>
										<li><input onChange={() => console.log('wassup')} type="reset" value="Reset" className="alt" /></li>
									</ul>
								</div>
							</div>
						</form>
          </section> */}
          <section>
						<header>
							<h3>Meet the Founder</h3>
						<img style={{alignSelf: 'center', height: 200, borderRadius: 10}} src={Nick} alt="Nick Drishinski, Founder of The Jr. Devs" />
						{/* <Nick height={200} width={200} /> */}
						</header>
            {/* <img style={{height: 40, width: 40, border: '1px solid black'}} src="images/pic01.jpg" alt="" /> */}
						<p style={{paddingTop: 10}}>Hi, my name is Nick Drishinski. I am a web/mobile developer living in Mesa, Arizona with my wife Emilie. I created
              Jr. Dev Life because when I was first looking to break into the development ranks after being self taught, I felt 
              completely lost in all the different languages, frameworks, libraries and tech jargon in general. I interviewed so many places via phone, skype and in person, I
              gained valuable insight into what experience really matters when hiring developers. As a lead developer at my current company I am also involved in the 
              hiring process for our devolopment team and have seen the struggles and pitfalls of Jr. Developers interviewing from the employers side too. My mission is to bring 
              every aspiring developer confidence that comes with valuable experience, so that they can get a great job feeling confident with no imposter syndrome.
            </p>
						
					</section>
				</div>

				<footer className="major container medium">
					<h3>Get Coding!</h3>
		  			<p>Contact me at nick@jrdevlife.com to get job ready!</p>
					<ul className="actions special">
						{/* <li><a href={"#"} className="button">Join our crew</a></li> */}
					</ul>
				</footer>

			</div>

			<div id="footer">
				<div className="container medium">

					{/* <header className="major last">
						<h2>Questions or comments?</h2>
					</header>

		  			<h4>Contact me at ndrishinski@gmail.com</h4> */}

					{/* <form method="post" action="#">
						<div className="row">
							<div className="col-6 col-12-mobilep">
								<input onChange={() => console.log('wassup')} type="text" name="name" placeholder="Name" />
							</div>
							<div className="col-6 col-12-mobilep">
								<input onChange={() => console.log('wassup')} type="email" name="email" placeholder="Email" />
							</div>
							<div className="col-12">
								<textarea name="message" placeholder="Message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions special">
									<li><input onChange={() => console.log('wassup')} type="submit" value="Send Message" /></li>
								</ul>
							</div>
						</div>
					</form> */}

					{/* <ul className="icons">
						<li><a href={"#"} className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href={"#"} className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href={"#"} className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href={"#"} className="icon brands fa-github"><span className="label">Github</span></a></li>
						<li><a href={"#"} className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul> */}

					<ul className="copyright">
						<li>&copy; <a href={'https://www.nickdrishinski.com'}>Nick Drishinski</a>. All rights reserved.</li><li><a style={{opacity: 0.3}} href="http://html5up.net">HTML5 UP</a></li>
					</ul>

				</div>
			</div>



	</div>

        )
    }
}