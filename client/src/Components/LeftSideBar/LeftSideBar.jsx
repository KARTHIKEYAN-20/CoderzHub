import React from 'react'
import Following from '../../assets/following.png'
import Popular from '../../assets/popular.png'
import New from '../../assets/new.png'
import Java from '../../assets/java.png'
import Cpp from '../../assets/cpp.png'
import Python from '../../assets/python.png'
import './LeftSideBar.css'

const LeftSideBar = ({ onFilterChange }) => {

    const handleFilterClick = (option) => {
        onFilterChange(option);
    };

    return (
        <div className="App_LeftSideBar">
            <div className="App_LeftSideBar_Menu">
                <div className="App_LeftSideBar_MenuItems"
                    onClick={() => handleFilterClick('newest')}>
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={New} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>Newest and Recent</h4>
                        <p>Find the latest questions</p>
                    </div>
                </div>
                <div className="App_LeftSideBar_MenuItems"
                    onClick={() => handleFilterClick('popular')}>
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={Popular} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>Popular of the day</h4>
                        <p>Questions featured today by coderz</p>
                    </div>
                </div>
                <div className="App_LeftSideBar_MenuItems">
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={Following} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>Following</h4>
                        <p>Explore from your favorite person</p>
                    </div>
                </div>
            </div>
            <div className="App_LeftSideBar_Menu_Tags">
                <h3>Popular Tags</h3>
                <div className="App_LeftSideBar_MenuItems"
                    onClick={() => handleFilterClick('c/c++')}>
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={Cpp} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>C / C++</h4>
                        <p>Posted by this tag</p>
                    </div>
                </div>
                <div className="App_LeftSideBar_MenuItems"
                    onClick={() => handleFilterClick('java')}>
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={Java} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>Java</h4>
                        <p>Posted by this tag</p>
                    </div>
                </div>
                <div className="App_LeftSideBar_MenuItems"
                    onClick={() => handleFilterClick('python')}>
                    <div className="App_LeftSideBar_MenuLeft">
                        <img src={Python} alt='following' className='App_LeftSideBar_MenuIcons' />
                    </div>
                    <div className="App_LeftSideBar_MenuRight">
                        <h4>Python</h4>
                        <p>Posted by this tag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
