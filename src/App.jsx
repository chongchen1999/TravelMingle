import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Signup from "./pages/Signup";
import Iberian from "./pages/Iberian";
import Switzerland from "./pages/Switzerland";
import Italy from "./pages/Italy";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/iberian" element={<Iberian/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/switzerland" element={<Switzerland/>}/>
            <Route path="/italy" element={<Italy/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default App;