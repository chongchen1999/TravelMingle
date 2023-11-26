import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium inline-flex items-center"
                id="login-menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
            >
                MyInsight
                <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"/>
                </svg>
            </button>

            <div
                className={`absolute z-10 mt-2 bg-white rounded-md shadow-lg w-44 py-1 ${isOpen ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="login-menu-button"
            >
                <Link to="/Login" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Log in</Link>
                <Link to="/Registration" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">Sign up</Link>
            </div>
        </div>
    );
}

export default LoginMenu;
