import React, { useState } from "react";
import './Header.css'
import MenuIcon from '../../assets/icon/menu-open.png'
import CloseMenu from '../../assets/icon/menu-close.png'
import { useLocation } from 'react-router-dom'
// import AccountMenu from "../accountMenu/AccountMenu";
import MenuExample from "../accountMenu/AccountMenu";
// import Test, {AccountMenu} from '../../components/accountMenu/AccountMenu'



const Header = ({ isMenuOpen, onClick, setIsLoggedIn }) => {
    const [isProfileMenuOpen, setProfileMenu] = useState(false)
    const location = useLocation();
    const segments = location.pathname.split('/');
    const currentRoute = segments[segments.length - 1]
    let pageTitle;
    let isLoggedIn = true
    const ProfileIcon = 'https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg'

    switch (true) {
        case currentRoute === '':
            pageTitle = 'Dashboad';
            break;
        case currentRoute.includes('user'):
            pageTitle = 'User'
            break;
        case currentRoute.includes('aboutus'):
            pageTitle = 'About Us';
            break;
        case currentRoute.includes('profile'):
            pageTitle = 'Profile';
            break;
        case currentRoute.includes('yourfirstcomponent'):
            pageTitle = 'Your first component'
            break;
        case currentRoute.includes('passingPropToComponent'):
            pageTitle = 'Props'
            break;
        case currentRoute.includes('conditionRendering'):
            pageTitle = 'Condition Rendering'
            break;
        case currentRoute.includes('state'):
            pageTitle = 'State'
            break;
            case currentRoute.includes('formHandling'):
                pageTitle = 'Form Handling'
                break;
        default:
            // Default case, in case none of the above conditions are met
            pageTitle = 'Dashboad';
            break;
    }

    const toggleProfileMenu = () => {
        setProfileMenu(!isProfileMenuOpen)
    }

    const closeProfileMenu = () => {
        setProfileMenu(false);
    };

    return (
        <header className="main-header">
            <div>
                <img
                    src={isMenuOpen ? CloseMenu : MenuIcon}
                    alt=""
                    className="menu-icon"
                    onClick={onClick}
                />
                <h1 className="main-header-content">{pageTitle}</h1>

                <MenuExample setIsLoggedIn={setIsLoggedIn} isOpen={isProfileMenuOpen} onClose={closeProfileMenu} />

                {/* Profile menu */}
                {isLoggedIn ? (
                    <div className="profile-icon" onClick={toggleProfileMenu}>
                        <img src={ProfileIcon} alt="Profile" />

                        {/* Profile Menu */}

                        {isProfileMenuOpen && (
                            <div>

                            </div>
                        )}
                    </div>

                ) : (
                    <div className="login-link">
                        {/* Add login link or button */}
                        <a href="/login">Login</a>
                    </div>
                )}

            </div>
        </header>
    )
}


export default Header;
