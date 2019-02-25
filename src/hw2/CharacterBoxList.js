import React from 'react'
import CharacterBox from './CharacterBox'
import './Hw2.css'

const characterBoxList = (props) => [...props.input].map((cc, index) => {
    return(
        <CharacterBox
            myChar={cc}
            click={()=>props.clickCharacterBox(index)}
        />
    );
})
export default characterBoxList;
