import React from 'react'

function Car(props){
    return(
        <div> 
            <h1>Hi,Today we are drive {props.CarName}</h1>
            <h1>Hi,Today we are drive {props.BikeName}</h1>
        </div>
    )
}

export default Car