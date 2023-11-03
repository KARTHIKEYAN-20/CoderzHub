import React from 'react'
import Python from '../../assets/python.png'
import Debugging from '../../assets/debugging.png'
import Git from '../../assets/Git.PNG'
import Cpp from '../../assets/cpp.png'
import Java from '../../assets/java.png'
import './RightSideBar.css'


const RightSideBar = () => {
    return (
        <div>
            <div className="App_RightSideBar">
                <div className="App_RightSideBar_Container">
                    <h3>Contests</h3>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Cpp} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h4>C++ / C - Beginner</h4>
                            <p>5th November 2023</p>
                        </div>
                    </div>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Python} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h4>Python - Beginner</h4>
                            <p>5th November 2023</p>
                        </div>
                    </div>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Java} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h4>Java - Intermediate</h4>
                            <p>12th November 2023</p>
                        </div>
                    </div>
                </div>

                <div className="App_RightSideBar_Container_Blog">
                    <h3>Blogs</h3>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Debugging} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h5>Mastering the Art of Debugging: Tips and Techniques</h5>
                            <p>by Kishoth Kumar</p>
                        </div>
                    </div>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Python} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h5>Getting Started with Machine Learning: A Beginner's Guide</h5>
                            <p>by Lakshmi Priya</p>
                        </div>
                    </div>
                    <div className="App_RightSideBar_ContainerList">
                        <div className="App_RightSideBar_MenuRight">
                            <img src={Git} alt='following' className='App_RightSideBar_MenuIcons' />
                        </div>
                        <div className="App_RightSideBar_MenuRight">
                            <h5>Mastering Git and GitHub for Version Control</h5>
                            <p>by Yogasri</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightSideBar
