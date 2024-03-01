import React, { useState } from "react";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {
        setName("Dr. " + e.target.value);
    };
    return (
        <div>
            <input data-testid="username" onChange={onChange} />
            <h2>{name}</h2>

            <input
                data-testid={"password-input"}
                onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 7 && (
                <div data-testid="errorComponent">
                    please enter more than 7 chars
                </div>
            )}
            <button
                disabled={name === ""}
                data-testid={"button-input"}
            ></button>
        </div>
    );
}
