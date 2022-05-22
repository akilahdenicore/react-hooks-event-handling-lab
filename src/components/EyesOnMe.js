// Code EyesOnMe Component Here

import React from "react";

//render button "Eyes on me", event handler listens for focus and blur events
//focus fire --> console.log 'Good!'
//blur event fires, console.log "Hey!, Eyes on me!"

function EyesOnMe(){
    function listenFocus() {
        console.log('Good!')
    }
    function listenBlur(){
        console.log('Hey! Eyes on me!')
    }
    return (
        //invoke function in JSX syntax
        <button onFocus={listenFocus} onBlur={listenBlur}>
        </button>
    );
}