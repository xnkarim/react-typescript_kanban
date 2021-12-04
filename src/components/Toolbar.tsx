import React from 'react';
import { ReactComponent as Bell } from 'src/assets/icons/bell.svg';
import { ReactComponent as Mail } from 'src/assets/icons/mail.svg';
import AvatarPng from 'src/assets/icons/avatar.png';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="search-input">
                <img className="search-input__icon" src="./images/search.svg" alt="" />
                <input type="text" placeholder="Search for tasks..." />
            </div>
            <div className="toolbar-controls">
                <button className="mail-btn">
                    <Mail />
                </button>
                <button className="noty-btn">
                    <Bell />
                </button>
            </div>
            <div className="current-user">
                <h4 className="current-user__name">M.Thompson</h4>
                <div className="current-user__icon">
                    <img src={AvatarPng} alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default Toolbar;