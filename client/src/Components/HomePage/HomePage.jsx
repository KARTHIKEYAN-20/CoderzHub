import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import Main from '../Main/Main'
import RightSideBar from '../RightSideBar/RightSideBar'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='App_HomePage'>
            <div className="App_HomePage_Container">
                <LeftSideBar />
                <Main />
                <RightSideBar />
            </div>
        </div>
    )
}

export default HomePage
