import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Suneel from '../suneel.png';
class Resume extends Component{
    render(){
        return(
             <div>
                 <Grid>
                     <Cell col={4}>
                         <div style={{textAlign: 'center'}}>
                         <img
                     src={Suneel} 
                     alt="avatar"
                     className="avatar-img"
                     />
                         </div>
                         <h2 style={{paddingTop: '2em'}}>Suneel Kumar</h2>
                         <h4 style={{color: 'grey'}}>Web Developer</h4>
                         <hr style={{bordrTop: '3px solid #833fb2', width: '50%'}}/>
                         <p>
                         I am a Web developer with 1.8 year industry experience building websites and web applications. 
                         I specialize in JavaScript and have professiona experience working with HTML5, CSS, JavaScript, and ReactJS. 
                         Take a look at my work or get in touch!  
                         </p>
                         <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                         <h5>Address</h5>
                         <p>
                         House No - 417 Block No - 25 
                         Trilok Puri PIN-110091,New Delhi, India
                         </p>
                         <h5>Phone</h5>
                         <p>9795769820</p>
                         <h5>Email</h5>
                         <p>sunilkumar.up91@gmail.com</p>
                         <hr style={{borderTop:'3px solid #833fb2',width: '50%'}}/>
                     </Cell>
                     <Cell className="resume-right-col"col={8}>
                       <h2>Education</h2>
                       <Education
                       startYear={2015}
                       endYear={2018}
                       schoolName="Maulana Azad National Institute of Technology"
                       schoolDedcription="Master of Computer Applications (MCA)"
                       />
                       <Education
                       startYear={2012}
                       endYear={2015}
                       schoolName="Nehru Gram Bharati University - Allahabad"
                       schoolDedcription="Bachelor in Computer Application (BCA)"
                       />
                       <hr style={{borderTop: '3px solid #e22947'}}/>
                       <h2>Experince</h2>
                       <Experience
                       startYear={2018}
                       endYear={2020}
                       jobName="MSS Payments Bangalore,India"
                       jobDedcription="                 
                       MSS is known for digital wallets, prepaid network cards, UPI based
                      merchant management modules, domestic remittances platform &
                      anything related to payments.
Developing new features and maintaining existing
applications.
Familiarity with modern front-end build pipelines and tools.
Experience with JavaScript, designing, and developing clientside graphical user interfaces using HTML, CSS, and React
js.
Thorough understanding of React.js and its core principles.
Experience with popular React.js workflows (such as Flux or
Redux)
Familiarity with RESTful APIs.
Familiarity with newer specifications of EcmaScript
Knowledge of modern authorization mechanisms, such as
JSON Web Token.
Experience with common front-end development tools such
as Babel, Webpack, NPM, etc.
Ability to understand business requirements and translate
them into technical requirements.
                       "
                       />
                       <hr style={{borderTop: '3px solid #e22947'}}/>
                       <h2>Skills</h2>
                       <Skills
                       skills="HTML/CSS"
                       progress={90}
                       />
                       <Skills
                       skills="java Script"
                       progress={80}
                       />
                       <Skills
                       skills="React JS"
                       progress={70}
                       />
                       <Skills
                       skills="Redux"
                       progress={50}
                       />
                     </Cell>
                 </Grid>
             </div>
        )
    }
}
export default Resume;