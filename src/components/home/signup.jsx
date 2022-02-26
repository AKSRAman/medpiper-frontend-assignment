import React, { useState } from 'react'
import Validation from './validation'
import swal from 'sweetalert'
import "./login.css"

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
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
        setErrors(Validation(values))
        if (Object.keys(errors).length == 0) {
            console.log(values.name.length,values)
            if (values.name.length && values.email.length && values.password.length > 1) {
                swal({
                    title: "Sucess!",
                    text: "Registred Successfully!",
                    icon: "success",
                    button: "ok!",
                })
            }
        }
    }

    return (
        <>
            <div className="login-form">
                <div className="app-wrapper">
                    <div>
                        <h2 className="title"> Signup </h2>
                    </div>
                    <form className='from-wrapper'>
                        <div className="name">
                            <label className="label">Name</label>
                            <input className='input'
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
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
                            <button className="submit" onClick={handleFormSubmit}> Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup