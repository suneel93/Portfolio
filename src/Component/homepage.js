import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 
import Suneel from '../suneel.png';
class Homepage extends Component{
    render(){
        return(
             <div style={{width: '100%',margin: 'auto'}}>
                   <Grid className="landing-grid">
                    <Cell col={12}>
                     <img
                     src={Suneel} 
                     alt="avatar"
                     className="avatar-img"
                     />
                     <div className="banner-text">
                    <h1>Web Developer</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstap | Java Script | React JS | React Native | Node JS | Express | Mongo DB</p>
                     <div className="socail-links">
                         {/*LinedIn*/}
                       <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-linkedin-square" aria-hidden="true"/>
                       </a>
                        {/*Github*/}
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-github-square" aria-hidden="true"/>
                       </a>
                       {/*Freecodecamp*/}
                       <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-free-code-camp" aria-hidden="true"/>
                       </a>
                       {/*Youtube*/}
                       <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                       <i className="fa fa-youtube-square" aria-hidden="true"/>
                       </a>
                     </div>
                     </div>
                    </Cell>
                    </Grid>
                 </div>
        )
    }
}

export default Homepage;
