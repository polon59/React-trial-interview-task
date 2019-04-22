import React from 'react'

const WordBox = (props) =>{
    const {name,handleChange} = props;
    return(
        <div>
            <textarea id={name} cols="30" rows="10" onChange={handleChange}></textarea>
        </div>
    )
}
export default WordBox;