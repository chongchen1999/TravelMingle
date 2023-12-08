import useFormHandling from "./useFormHandling";
import FormModal from "./FormModal.jsx";
import {useState} from "react";

const RegistrationForm = () => {
    // You can add state and event handlers here if needed
    const {
        groupSize,
        hotelChoice,
        name,
        email,
        startDate,
        phone,
        contactPreferences,
        specialRequests,
        handleChange
    } = useFormHandling();

    // 添加状态来控制模态框
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFormData = {
            groupSize,
            hotelChoice,
            name,
            email,
            startDate,
            phone,
            contactPreferences,
            specialRequests,
        };
        setFormData(newFormData);  // 设置表单数据
        setModalIsOpen(true);      // 打开模态框
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <div className="mb-4">
                <h1 className="text-xl font-bold text-gray-700">
                    Experience a safe and personalized journey.
                </h1>
            </div>

            <form id="travelForm" className="space-y-6" noValidate onSubmit={handleSubmit}>
                {/* Group Size Selection */}
                <div>
                    <label className="block mb-1 font-bold text-gray-700">Number in your group</label>
                    <select
                        name="groupSize"
                        value={groupSize}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option>Family</option>
                        <option>Couple</option>
                        <option>Solo</option>
                        <option>Other group</option>
                    </select>

                </div>

                {/* Hotel Choice */}
                <div>
                    <label className="block mb-1 font-bold text-gray-700">What's your hotel choice?</label>
                    <div className="flex items-center space-x-3">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="hotelChoice"
                                value="luxury"
                                checked={hotelChoice === "luxury"}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Luxury (5 stars & up)</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="hotelChoice"
                                value="handpicked"
                                checked={hotelChoice === "handpicked"}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Handpicked Comfort (4-5 stars)</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="hotelChoice"
                                value="standard"
                                checked={hotelChoice === "standard"}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Standard (3 stars)</span>
                        </label>
                    </div>
                </div>

                {/* Personal Information Fields */}
                <div>
                    <label className="block mb-1 font-bold text-gray-700" htmlFor="name">Your name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-bold text-gray-700" htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-bold text-gray-700" htmlFor="date">Starting date *</label>
                    <input
                        type="date"
                        id="date"
                        name="startDate"
                        value={startDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-bold text-gray-700" htmlFor="phone">Phone number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Contact Preference */}
                <div>
                    <label className="block mb-4 font-bold text-gray-700">I prefer to be contacted via:</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="contactPreferences"
                                value="WhatsApp"
                                checked={contactPreferences.includes("WhatsApp")}
                                onChange={handleChange}
                            />
                            <span className="ml-2">WhatsApp</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="contactPreferences"
                                value="WeChat"
                                checked={contactPreferences.includes("WeChat")}
                                onChange={handleChange}
                            />
                            <span className="ml-2">WeChat</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="contactPreferences"
                                value="Phone call"
                                checked={contactPreferences.includes("Phone call")}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Phone call</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="contactPreferences"
                                value="Email"
                                checked={contactPreferences.includes("Email")}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Email</span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="contactPreferences"
                                value="Video appointment"
                                checked={contactPreferences.includes("Video appointment")}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Video appointment</span>
                        </label>
                    </div>
                </div>


                {/* Special Requests */}
                <div>
                    <label className="block mb-1 font-bold text-gray-700" htmlFor="special-requests">Tell us your travel requirements/special requests here.</label>
                    <p className="text-sm text-gray-500 mb-4">
                        E.g. This is a big trip for the reunion with family members, attending a wedding, birthday celebration, 20-year anniversary, honeymoon, kid's graduation... Our must-dos/must-sees are...
                    </p>
                    <textarea
                        id="special-requests"
                        name="specialRequests"  // 修改此处以匹配状态变量名
                        value={specialRequests}  // 绑定到对应的状态变量
                        onChange={handleChange}  // 设置事件处理器
                        rows="4"
                        className="shadow-sm h-32 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full border border-gray-300 rounded-md"
                        placeholder="Your special requests here"
                    ></textarea>
                </div>

                <div className="flex justify-center items-center">
                    <button type="submit" id="submitButton"
                            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700">
                        Send My Inquiry
                    </button>
                </div>
            </form>

            <FormModal
                formData={formData}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />

        </div>
    );
}

export default RegistrationForm;
