import Navbar from "../components/common/navbar/Navbar.jsx";
import LoginForm from "../components/UI/Login/LoginForm.jsx";
import {Helmet} from "react-helmet";
import Footer from "../components/common/Footer.jsx";

const Login = () => {
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
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;
