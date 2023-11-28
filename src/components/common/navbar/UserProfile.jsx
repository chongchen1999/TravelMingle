import { useState } from 'react';
import { Link } from 'react-router-dom'; // 如果你使用 react-router-dom

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative group">
            <button
                className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={toggleDropdown}
            >
                <img src="src/assets/images/profile_photo.jpg" alt="User" className="w-8 h-8 rounded-full" />
            </button>
            <div
                className={`absolute right-0 mt-2 ${isOpen ? 'block' : 'hidden'} bg-white border border-gray-300 rounded-md shadow-lg w-48`}
            >
                {/* 这里可以根据你的路由配置来调整 Link 的 to 属性 */}
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Your Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign out</Link>
            </div>
        </div>
    );
}

export default UserProfile;
