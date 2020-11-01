import React, {Component} from 'react';
import { Grid, Cell,ProgressBar} from 'react-mdl';
class Skills extends Component {
    render(){
        return(
            <div>
            <Grid>
            <Cell col={12}>
            <div style={{display: 'fiex'}}>{this.props.skills} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress}/></div> 
            </Cell>
           </Grid>
            </div>
        )
    }
}

export  default Skills;