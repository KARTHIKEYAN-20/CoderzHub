import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='App_HomePage'>
            <div className="App_HomePage_Container">
                <LeftSideBar />
                <div className="App_HomePage_Right">
                    Middle
                </div>
                <RightSideBar />
            </div>
        </div>
    )
}

export default HomePage
