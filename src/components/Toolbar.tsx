import React from 'react';
import Bell from '../assets/images/bell.svg';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="search-input">
                <img className="search-input__icon" src="./images/search.svg" alt="" />
                <input type="text" placeholder="Search for tasks..." />
            </div>
            <div className="toolbar-controls">
                <button className="mail-btn">
                    <img src="./images/mail.svg" alt="mail" />
                </button>
                <button className="noty-btn">
                    <Bell />
                    <img src="./images/bell.svg" alt="bell" />
                </button>
            </div>
            <div className="current-user">
                <h4 className="current-user__name">M.Thompson</h4>
                <div className="current-user__icon">
                    <img src="./images/avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Toolbar;