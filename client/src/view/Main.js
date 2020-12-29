import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../components/Header'



function Main(props) {
    return (
        <>
            <Header/>
            {props.children}
        </>
    )
}

export default Main;