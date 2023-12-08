import RegistrationForm from "../components/UI/Registration/RegistrationForm.jsx";
import {Helmet} from "react-helmet";
import Navbar from "../components/common/navbar/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const Registration = () => {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="src/assets/styles/home/swiper.min.css" />
                <link rel="stylesheet" href="src/assets/styles/home/bootstrap.css" />
                <link rel="stylesheet" href="src/assets/styles/home/index.css" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="src/assets/styles/home/iconfont.css" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            </Helmet>

            <Navbar />
            <RegistrationForm />
            <Footer />
        </div>
    );
};

export default Registration;