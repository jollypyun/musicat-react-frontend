import { useState } from "react";
import { Button } from "react-bootstrap";
// import '../../css/bootstrap.min.css';
// import { Link } from "react-router-dom";
// import styled, { css } from "styled-components";
// import { useLocation } from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
}
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header">
                            <h3 className="text-center font-weight-light my-4">
                                <span>musicat</span>
                            </h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-floating mb-3">
                                    <input className="form-control" value={user.email} name="email" type="email" onChange={handleChange} />
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" value={user.password} name="password" type="password" onChange={handleChange} />
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <Button>Login</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    );
};

export default Login;