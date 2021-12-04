import { NavLink } from 'react-router-dom';
import { ReactComponent as Manage } from 'src/assets/icons/manage.svg';
import { ReactComponent as Boards } from 'src/assets/icons/boards.svg';
import { ReactComponent as Schedule } from 'src/assets/icons/schedule.svg';
import { ReactComponent as Reports } from 'src/assets/icons/reports.svg';
import { ReactComponent as Settings } from 'src/assets/icons/settings.svg';

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
                            <Manage />
                            <span>Manage</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to="/"
                        >
                            <Boards />
                            <span>Boards</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/schedule">
                            <Schedule />
                            <span>Schedule</span>
                        </NavLink >
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/reports">
                            <Reports />
                            <span>Reports</span>
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/settings">
                            <Settings />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LeftBar;