import React from 'react';


const levelColors = {
    first: '#00E4FF',
    second: '#00FFA6',
    third: '#3EFF00',
    fourth: '#FFFB00',
    fifth: '#FFAE00',
    sixth: '#FF6100'
    }


class Sextile extends React.Component{

    render(){
       return <p style={{borderBottom: (parseInt(this.props.sextileWeight) != 0 ? "solid 3px " + levelColors[this.props.colorValue] : 'none') }}>{this.props.sextileWeight}</p>
    }
}

export default Sextile