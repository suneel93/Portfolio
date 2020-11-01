import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton,CardText } from 'react-mdl';
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
               <div className="projects-grid">
                    {/*Project 1 */}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project # 1</CardTitle>
                        <CardText>
                        Loren Ipsum is simply dummy text of the Printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                 </Card>
                  {/*Project 2 */}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project # 2</CardTitle>
                        <CardText>
                        Loren Ipsum is simply dummy text of the Printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                 </Card>
                  {/*Project 3 */}
                <Card shadow={0} style={{width: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project # 3</CardTitle>
                        <CardText>
                        Loren Ipsum is simply dummy text of the Printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                 </Card>
               </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        } else if (this.state.activeTab === 2){
            return(
                <div><h1>This is VueJS</h1></div>
            )
        }
        else if (this.state.activeTab === 3){
            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }
    render(){
        return(
             <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
           <Tab>React</Tab>
           <Tab>Angular</Tab>
           <Tab>VueJS</Tab>
           <Tab>MongoDB</Tab>
        </Tabs>
            <Grid>
              <Cell col={12}>
               <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
             </div>
        )
    }
}

export default Project;