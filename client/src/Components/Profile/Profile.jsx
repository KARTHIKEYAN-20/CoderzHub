import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='App_Profile'>
        <div className="App_Profile_Box">
            <div className="App_Profile_top">
                <div className="App_Profile_search"></div>
                <div className="App_Profile_intro">
                    <div className="App_Profile_introLeft"></div>
                    <div className="App_Profile_introRight">
                        <div className="App_Profile_introcard"></div>
                        <div className="App_Profile_share"></div>
                    </div>
                </div>
            </div>
            <div className="App_Profile_down">
                <div className="App_Profile_left">Hello world</div>
                <div className="App_Profile_right">
                    Hello world
                    <div className="App_Profile_qnTop"></div>
                    <div className="App_Profile_qnDown"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile