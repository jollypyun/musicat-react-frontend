import { Router,Routes, Route } from "react-router-dom";
import Login from "../component/member/Login";
import Join from "../component/member/Join";

const LoginRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={Login} />
                <Route exact path="/join" element={Join} />
            </Routes>
        </Router>
    );
};

export default LoginRouter;