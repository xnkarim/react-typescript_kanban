import { NavLink } from 'react-router-dom';

const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="leftbar__header">
                <h3><span>JUST</span>DOIT</h3>
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/about">
                            <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M18.98 10.73C20.06 10.73 21.26 10.89 22.58 11.21C24.04 11.59 25.23 12.08 26.15 12.68C27.23 13.4 27.77 14.21 27.77 15.11V18.23H20.27V15.11C20.27 13.41 19.45 11.97 17.81 10.79C18.09 10.75 18.48 10.73 18.98 10.73ZM9.01998 10.73C10.1 10.73 11.29 10.89 12.59 11.21C14.05 11.59 15.23 12.08 16.13 12.68C17.21 13.4 17.75 14.21 17.75 15.11V18.23H0.22998V15.11C0.22998 14.21 0.769975 13.4 1.84998 12.68C2.76999 12.08 3.95997 11.59 5.41998 11.21C6.73999 10.89 7.93997 10.73 9.01998 10.73ZM9.01998 8.27C8.35998 8.27 7.73998 8.1 7.15998 7.76C6.57998 7.41999 6.11998 6.96 5.77998 6.38C5.43998 5.79999 5.26998 5.18 5.26998 4.52C5.26998 3.85999 5.43998 3.24 5.77998 2.66C6.11998 2.07999 6.57998 1.62 7.15998 1.28C7.73998 0.939995 8.35998 0.769997 9.01998 0.769997C9.67998 0.769997 10.295 0.939995 10.865 1.28C11.435 1.62 11.885 2.07499 12.215 2.645C12.545 3.215 12.71 3.83999 12.71 4.52C12.71 5.2 12.545 5.82499 12.215 6.395C11.885 6.965 11.435 7.41999 10.865 7.76C10.295 8.1 9.67998 8.27 9.01998 8.27ZM18.98 8.27C18.32 8.27 17.7 8.1 17.12 7.76C16.54 7.41999 16.08 6.96 15.74 6.38C15.4 5.79999 15.23 5.18 15.23 4.52C15.23 3.85999 15.4 3.24 15.74 2.66C16.08 2.07999 16.54 1.62 17.12 1.28C17.7 0.939995 18.32 0.769997 18.98 0.769997C19.64 0.769997 20.26 0.939995 20.84 1.28C21.42 1.62 21.88 2.07999 22.22 2.66C22.56 3.24 22.73 3.85999 22.73 4.52C22.73 5.18 22.56 5.79999 22.22 6.38C21.88 6.96 21.42 7.41999 20.84 7.76C20.26 8.1 19.64 8.27 18.98 8.27Z"
                                    fill="#B7BEC7" />
                            </svg>
                            <span>Manage</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/">
                            <img src="./images/boards.svg" alt="" />
                            <span>Boards</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/about">
                            <img src="./images/schedule.svg" alt="" />
                            <span>Schedule</span>
                        </NavLink >
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/about">
                            <img src="./images/reports.svg" alt="" />
                            <span>Reports</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/settings">
                            <img src="./images/settings.svg" alt="search" />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftBar;