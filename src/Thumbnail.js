import React from 'react';
import './Thumbnail.css';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import PopIcon from './PopIcon'
import IntelIcon from './IntelIcon'
import FunnyIcon from './FunnyIcon'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Sextile from './Sextile.js'



class Thumbnail extends React.Component{
 

    render(){
        return (
        <div>
            <Grid  container direction="column" justify="center" alignItems="center">
                <Grid item className="topBorderRound"  xs={4} md={3}>
                <p>{this.props.tmbdata.title}</p>
                    <a href={this.props.tmbdata.previewData.url}><img id="postimg" src={this.props.tmbdata.previewData.img}/></a>                  
                </Grid>
                <Grid item id="cardFooter" item xs={4} md={3}>
                    <Grid container direction="row" justify="center" alignItems="center" >
                           <Grid item xs={4} md={4}>
                               <Grid container direction="row"  justify="center" alignItems="center" spacing={2}>
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon/>
                                        <PopIcon/>
                                        <KeyboardArrowDownIcon/>
                                    </Grid>
                                    <Grid item>
                                       <Sextile sextileWeight= {this.props.tmbdata.weights.popularity} colorValue={this.props.tmbdata.sextiles.popularity}/>
                                    </Grid>
                                </Grid>
                           </Grid>
                           <Grid item xs={4} md={4}>
                           <Grid container direction="row"   justify="center" alignItems="center" spacing={2}>
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon/>
                                        <IntelIcon/>
                                        <KeyboardArrowDownIcon/>
                                    </Grid>
                                    <Grid item>
                                        <Sextile sextileWeight= {this.props.tmbdata.weights.intelligence} colorValue={this.props.tmbdata.sextiles.intelligence}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                           <Grid item xs={4} md={4}>
                           <Grid container direction="row"  justify="center" alignItems="center" spacing={2}>
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon/>
                                        <FunnyIcon/>
                                        <KeyboardArrowDownIcon/>
                                    </Grid>
                                    <Grid item>
                                        <Sextile sextileWeight= {this.props.tmbdata.weights.funny} colorValue={this.props.tmbdata.sextiles.funny}/>
                                    </Grid>
                                </Grid>
                           </Grid>
                       </Grid>
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default Thumbnail;