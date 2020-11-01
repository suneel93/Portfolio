import React, { Component } from 'react';
import { Grid, Cell,List, ListItem,ListItemContent } from 'react-mdl';
import Suneel from '../suneel.png';
class Contact extends Component{
    render(){
        return(
           <div className="contact-body">
             <Grid className="contact-grid">
               <Cell col={6}>
                <h2>Suneel Kumar</h2>
                <img
                     src={Suneel} 
                     alt="avatar"
                     className="avatar-img"
                     />
                     <p style={{width: '75%', margin: 'auto', paddingTop: 'lem'}}>
                       I am a Web developer with 1.8 year industry experience building websites and web applications. 
                         I specialize in JavaScript and have professiona experience working with HTML5, CSS, JavaScript, and ReactJS. 
                         Take a look at my work or get in touch! 
                     </p>
               </Cell>
               <Cell col={6}>
                   <h2>Contact Me</h2>
                   <hr/>
                  <div className="contact-list">
                  <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square"  aria-hidden="true"/>
                         9795769820
                        </ListItemContent>
                </ListItem>
                <ListItem>
                       <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope"  aria-hidden="true"/>
                        sunilkumar.up91@.gmail.com
                       </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype"  aria-hidden="true"/>
                        {123} 456-7890
                        </ListItemContent>
                </ListItem>
                
                </List>
                  </div>
               </Cell>
             </Grid>
           </div>
        )
    }
}

export default Contact;