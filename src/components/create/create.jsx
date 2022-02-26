import React, { useState } from 'react'
import Validation from './createValidations'
import swal from 'sweetalert'
import './create.css'

const Create = () => {

    const [values, setValues] = useState({
        name: "",
        userName: "",
        email: "",
        address: "",
        phone: "",
        website: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const sendData = async (e) => {
        e.preventDefault()
        const { name, userName, email, address, phone, website } = values
        const res = await fetch("http://jsonplaceholder.typicode.com/users.", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, userName, email, address, phone, website
            })
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
        if (Object.keys(errors).length == 0) {
            console.log(values.name.length, values)
            if (values.name.length && values.email.length
                && values.address.length && values.phone.length && values.website.length > 1) {
                sendData()
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
            <div className="create-form">
                <div className="create-wrapper">
                    <div>
                        <h2 className="title"> Create </h2>
                    </div>
                    <form className='from-wrapper'>
                        <div className="name">
                            <label className="label">Name</label><br />
                            <input className='input'
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="username">
                            <label className="label">User Name</label><br />
                            <input className='input'
                                type="text"
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="email">
                            <label className="label">E-mail</label><br />
                            <input className='input'
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="address">
                            <label className="label">Address</label><br />
                            <input className='input'
                                type="address"
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                            />
                            {errors.address && <p className="error">{errors.address}</p>}
                        </div>
                        <div className="phone">
                            <label className="label">Phone</label><br />
                            <input className='input'
                                type="number"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className="website">
                            <label className="label">Website</label><br />
                            <input className='input'
                                type="website"
                                name="website"
                                value={values.website}
                                onChange={handleChange}
                            />
                            {errors.website && <p className="error">{errors.website}</p>}
                        </div>
                        <div>
                            <button className="submit" onClick={handleFormSubmit}> Create</button>
                        </div>
                        <br />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create