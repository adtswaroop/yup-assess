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
       return <u style={{color: levelColors[this.props.colorValue]}}>{Math.round(this.props.sextileWeight)}</u>
    }
}

export default Sextile