import React, { useState } from 'react'
import ValidationLogin from './loginValidation'
import swal from 'sweetalert'
import "./login.css"

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(ValidationLogin(values))
        if (Object.keys(errors).length == 0) {
            if (values.email.length && values.password.length > 1) {
                swal({
                    title: "Sucess!",
                    text: "Registred Successfully!",
                    icon: "success",
                    button: "ok!",
                }).then(() => {
                    window.location = "/dashboard";
                });
            }
        }
    }

    return (
        <>
            <div className="app-wrapper">
                <div>
                    <h2 className="title"> Login</h2>
                </div>
                <form className='from-wrapper'>

                    <div className="email">
                        <label className="label">E-mail</label>
                        <input className='input'
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className='input'
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login