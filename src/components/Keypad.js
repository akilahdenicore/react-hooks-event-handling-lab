// Code Keypad Component Here
import React from "react";


function Keypad() {
    function renderInput(){
        console.log('Entering a password...')
    }

    return (
        // onChange attribute is useful for handling changes to input values
    <input type="password" onChange={renderInput}/>
    )
}

//export

export default Keypad 