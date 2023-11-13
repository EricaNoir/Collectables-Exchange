import React from "react";
import { Link } from "react-router-dom";

import "../css/logInPage.scss"

function LogInPage() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = "/api/login";

        const body = new URLSearchParams();
        body.append("username", formData.username);
        body.append("password", formData.password);

        fetch(url, {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("success");
                window.location.href = `/home/${formData.username}`;
            } else {
                alert("Login fail.");
            }
        });
    };

    return (
        <>
            <Link to="/">
                <button className="back">Back to selection</button>
            </Link>
            <div className="form-container">
                <div className="form-title-container">
                    <h1>Welcome</h1>
                    <h2>Collectables Exchange Management System</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input type="submit" value="Log in" />
                </form>
            </div>
        </>
    );
}

export default LogInPage;
