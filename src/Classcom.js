import React from "react";
import {Component} from 'react';
export class Classcom extends Component{
    render(){
        return (
            <div className="container2">
                <center>
                <h1 className='funch2'>This is created using class Component</h1>
                <p className="external">This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
                </center>
                
            </div>
        )
    }
    
}
export default Classcom;