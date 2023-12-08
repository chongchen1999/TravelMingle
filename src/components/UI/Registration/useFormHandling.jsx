import { useState } from "react";

const useFormHandling = () => {
    const [groupSize, setGroupSize] = useState('');
    const [hotelChoice, setHotelChoice] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [phone, setPhone] = useState('');
    const [contactPreferences, setContactPreferences] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        switch (name) {
            case 'groupSize':
                setGroupSize(value);
                break;
            case 'hotelChoice':
                setHotelChoice(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'startDate':
                setStartDate(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'contactPreferences':
                setContactPreferences(prev =>
                    checked ? [...prev, value] : prev.filter(pref => pref !== value)
                );
                break;
            case 'specialRequests':
                setSpecialRequests(value);
                break;
            default:
                break;
        }
    };

    return {
        groupSize,
        hotelChoice,
        name,
        email,
        startDate,
        phone,
        contactPreferences,
        specialRequests,
        handleChange
    };
};

export default useFormHandling;
