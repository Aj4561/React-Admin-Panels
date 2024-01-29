import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import IconButton from '@mui/material/IconButton';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleIcon from '@mui/icons-material/People';
import TopicIcon from '@mui/icons-material/Topic';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';


const Sidebar = ({ isMenuOpen }) => {
    const [isNavTitle, setIsNavTitle] = useState({});

    const handleLearnReactClick = (section) => {
        setIsNavTitle((prevIsNavTitle) => ({
            ...prevIsNavTitle,
            [section]: !prevIsNavTitle[section],
        }));
    };

    return (
        <aside className={isMenuOpen ? 'sidebar-closed' : 'sidebar-open'}>
            <ul className="menu-list">
                <li>
                    <Link to='/dashboard' className="menu-link">
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Dashboard'}
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to='/user' className="menu-link">
                        <IconButton size='small'>
                            <PeopleIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Users'}
                        </span>
                    </Link>
                </li>

                <li>
                    <Link className="menu-link" onClick={() => handleLearnReactClick('learnReact')}>
                        <IconButton size='small'>
                            {/* Use the appropriate icon for Learn React */}
                            <FolderIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Learn React'}

                        </span>
                        <IconButton size='small' className={isMenuOpen ? 'close-arrow' : 'open-arrow'}>
                            {isNavTitle['learnReact'] ? (
                                <KeyboardArrowDownIcon fontSize='small' /> // Show different icon when isNavTitle is true
                            ) : (
                                <KeyboardArrowRightIcon fontSize='small' />
                            )}
                        </IconButton>
                    </Link>
                    <div className='nested-cell'>
                        {isNavTitle['learnReact'] && (
                            <ul>
                                <li>
                                    <Link to='/learnReact/yourfirstcomponent'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Your First Component'}
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/learnReact/passingPropToComponent'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Passing Prop To Component'}
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/learnReact/conditionRendering'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Condition Rendering'}
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/learnReact/renderingList'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Rendering List'}
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </div>
                </li>

                <li>
                    <Link className="menu-link" onClick={() => handleLearnReactClick('addingInteractivity')}>
                        <IconButton size='small'>
                            {/* Use the appropriate icon for Learn React */}
                            <FolderIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Adding Interactivity'}

                        </span>
                        <IconButton size='small' className={isMenuOpen ? 'close-arrow' : 'open-arrow'}>
                            {isNavTitle['addingInteractivity'] ? (
                                <KeyboardArrowDownIcon fontSize='small' /> // Show different icon when isNavTitle is true
                            ) : (
                                <KeyboardArrowRightIcon fontSize='small' />
                            )}
                        </IconButton>
                    </Link>
                    <div className='nested-cell'>
                        {isNavTitle['addingInteractivity'] && (
                            <ul>
                                <li>
                                    <Link to='/learnReact/yourfirstcomponent'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Your First Component'}
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to='/learnReact/anotherComponent'>Another Component</Link>
                                </li> */}
                            </ul>
                        )}
                    </div>
                </li>

                <li>
                    <Link className="menu-link" onClick={() => handleLearnReactClick('managingState')}>
                        <IconButton size='small'>
                            {/* Use the appropriate icon for Learn React */}
                            <FolderIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Managing State'}

                        </span>
                        <IconButton size='small' className={isMenuOpen ? 'close-arrow' : 'open-arrow'}>
                            {isNavTitle['managingState'] ? (
                                <KeyboardArrowDownIcon fontSize='small' /> // Show different icon when isNavTitle is true
                            ) : (
                                <KeyboardArrowRightIcon fontSize='small' />
                            )}
                        </IconButton>
                    </Link>
                    <div className='nested-cell'>
                        {isNavTitle['managingState'] && (
                            <ul>
                                <li>
                                    <Link to='/learnReact/yourfirstcomponent'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Your First Component'}
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to='/learnReact/anotherComponent'>Another Component</Link>
                                </li> */}
                            </ul>
                        )}
                    </div>
                </li>

                <li>
                    <Link className="menu-link" onClick={() => handleLearnReactClick('escapeHatches')}>
                        <IconButton size='small'>
                            {/* Use the appropriate icon for Learn React */}
                            <FolderIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Escape Hatches'}

                        </span>
                        <IconButton size='small' className={isMenuOpen ? 'close-arrow' : 'open-arrow'}>
                            {isNavTitle['escapeHatches'] ? (
                                <KeyboardArrowDownIcon fontSize='small' /> // Show different icon when isNavTitle is true
                            ) : (
                                <KeyboardArrowRightIcon fontSize='small' />
                            )}
                        </IconButton>
                    </Link>
                    <div className='nested-cell'>
                        {isNavTitle['escapeHatches'] && (
                            <ul>
                                <li>
                                    <Link to='/learnReact/yourfirstcomponent'>
                                        <IconButton size='small'>
                                            <TopicIcon fontSize='small' />
                                        </IconButton>  {!isMenuOpen && 'Your First Component'}
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to='/learnReact/anotherComponent'>Another Component</Link>
                                </li> */}
                            </ul>
                        )}
                    </div>
                </li>

                <li>
                    <Link to='/cardLists' className="menu-link">
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Cards'}
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to='/state' className="menu-link">
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'State'}
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to='/props' className='menu-link'>
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large' />
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Props'}
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to='/formHandling' className='menu-link'>
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large'/>
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Form Handling'}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/cameraCaptureTask' className='menu-link'>
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large'/>
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Camera Task'}

                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/pannels' className='menu-link'>
                        <IconButton size='small'>
                            <SpaceDashboardIcon fontSize='large'/>
                        </IconButton>
                        <span className='sidebar-title'>
                            {!isMenuOpen && 'Pannels'}

                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
