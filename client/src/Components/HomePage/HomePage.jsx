import React, { useState } from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Main from '../Main/Main';
import RightSideBar from '../RightSideBar/RightSideBar';
import './HomePage.css';

const HomePage = () => {
    const [filterOption, setFilterOption] = useState('all'); // Default filter option

    const handleFilterChange = (option) => {
        setFilterOption(option);
    };

    return (
        <div className='App_HomePage'>
            <div className='App_HomePage_Container'>
                <LeftSideBar onFilterChange={handleFilterChange} />
                <Main filterOption={filterOption} />
                <RightSideBar />
            </div>
        </div>
    );
};

export default HomePage;