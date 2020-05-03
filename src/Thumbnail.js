import React from 'react';
import './Thumbnail.css';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import PopIcon from './PopIcon'
import IntelIcon from './IntelIcon'
import FunnyIcon from './FunnyIcon'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Sextile from './Sextile.js'



class Thumbnail extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            intelligence: this.props.tmbdata.weights.intelligence,
            intelUpvote: false,
            intelDownvote: false,
            popularity: this.props.tmbdata.weights.popularity,
            popUpvote: false,
            popDownvote: false,
            funny: this.props.tmbdata.weights.funny,
            funnyUpvote: false,
            funnyDownvote: false
        }

        this.onIntelUpvote = this.onIntelUpvote.bind(this);
        this.onPopUpvote = this.onPopUpvote.bind(this);
        this.onFunnyUpvote = this.onFunnyUpvote.bind(this);  
        this.onIntelDownVote = this.onIntelDownVote.bind(this);
        this.onPopDownVote = this.onPopDownVote.bind(this);
        this.onFunnyDownVote = this.onFunnyDownVote.bind(this);   
    }

    onIntelUpvote(){
       this.setState({
           intelligence : parseInt(this.state.intelligence) + parseInt(1),
           intelUpvote: true,
           intelDownvote: false
       })
       console.log("Intelligence upvoted:" + this.state.intelligence)
    }

    onPopUpvote(){
        this.setState({
            popularity : parseInt(this.state.popularity + 1),
            popUpvote: true,
            popDownvote: false
        })
        console.log("Popularity upvoted:" + this.state.popularity)
     }

     onFunnyUpvote(){
        this.setState({
            funny : parseInt(this.state.funny) + parseInt(1),
            funnyUpvote: true,
            funnyDownvote: false
        })
        console.log("Funny upvoted:" + this.state.funny)
     }

     onIntelDownVote(){
        this.setState({
            intelligence : parseInt(this.state.intelligence) - parseInt(1),
            intelUpvote: false,
            intelDownvote: true
        })
        console.log("Intelligence DownVoted:" + this.state.intelligence)
     }
 
     onPopDownVote(){
         this.setState({
             popularity : parseInt(this.state.popularity - 1),
             popUpvote: false,
             popDownvote: true
         })
         console.log("Popularity DownVoted:" + this.state.popularity)
      }
 
      onFunnyDownVote(){
         this.setState({
             funny : parseInt(this.state.funny) - parseInt(1),
             funnyUpvote: false,
             funnyDownvote: true
         })
         console.log("Funny DownVoted:" + this.state.funny)
      }

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
                                   <Tooltip title="Popularity" placement="bottom">
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon onClick={this.onPopUpvote} style={{color: (this.state.popUpvote ? "green" : "white")}}/>
                                        <PopIcon/>
                                        <KeyboardArrowDownIcon onClick={this.onPopDownVote} style={{color: (this.state.popDownvote ? "red" : "white") }}/>
                                    </Grid>
                                    </Tooltip>
                                    <Grid item>
                                       <Sextile sextileWeight= {Math.round(this.state.popularity)} colorValue={this.props.tmbdata.sextiles.popularity}/>
                                    </Grid>
                                </Grid>
                           </Grid>
                           <Grid item xs={4} md={4}>
                           <Grid container direction="row"   justify="center" alignItems="center" spacing={2}>
                           <Tooltip title="Intelligence" placement="bottom">
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon onClick={this.onIntelUpvote}  style={{color: (this.state.intelUpvote ? "green" : "white")}} />
                                        <IntelIcon/>
                                        <KeyboardArrowDownIcon onClick={this.onIntelDownVote} style={{color: (this.state.intelDownvote ? "red" : "white") }}/>
                                    </Grid>
                                    </Tooltip>
                                    <Grid item>
                                        <Sextile sextileWeight= {Math.round(this.state.intelligence)} colorValue={this.props.tmbdata.sextiles.intelligence}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                           <Grid item xs={4} md={4}>
                           <Grid container direction="row"  justify="center" alignItems="center" spacing={2}>
                           <Tooltip title="Funny" placement="bottom">
                                   <Grid item xs={4} md={4}>
                                        <KeyboardArrowUpIcon onClick={this.onFunnyUpvote}  style={{color: (this.state.funnyUpvote ? "green" : "white")}} />
                                        <FunnyIcon/>
                                        <KeyboardArrowDownIcon onClick={this.onFunnyDownVote} style={{color: (this.state.funnyDownvote ? "red" : "white") }} />
                                    </Grid>
                                    </Tooltip>
                                    <Grid item>
                                        <Sextile sextileWeight= {Math.round(this.state.funny)} colorValue={this.props.tmbdata.sextiles.funny}/>
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