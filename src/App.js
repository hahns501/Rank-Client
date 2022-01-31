import React from 'react';

import Header from './components/Header/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css'

const App = () => {
    return (
        <div>
            <Header/>
            <div className={"App"}>
                {/*<Header/>*/}
                <Sidebar/>
                <Main/>
            </div>
        </div>
    )
}

export default App;