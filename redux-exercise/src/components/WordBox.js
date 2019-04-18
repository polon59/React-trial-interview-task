import React, { Component } from 'react'

class WordBox extends Component{

    render(){
        const {name,handleChange} = this.props;

        return(
            <div>
                <textarea id={name} cols="30" rows="10" onChange={handleChange}></textarea>
            </div>
        )
    }
}
export default WordBox;