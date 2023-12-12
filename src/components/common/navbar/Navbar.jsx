import { Link } from 'react-router-dom'; // 假设你使用 react-router-dom
import LoginMenu from "./LoginMenu";
import UserProfile from "./UserProfile";
import MobileMenuButton from "./MobileMenuButton";
import Destinations from "./Destinations.jsx";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 nav-on-top">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>

                    <div className="md:flex items-center space-x-4">
                        <Link to="/Home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">
                            Homepage
                        </Link>

                        <LoginMenu />

                        <Destinations />

                        <Link to="/Registration" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">
                            Register now!
                        </Link>

                        <button
                            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                            </svg>
                        </button>

                        <UserProfile />
                    </div>

                    <MobileMenuButton />

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
