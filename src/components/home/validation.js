const Validation = (values) => {
    let errors = {};
    if (!values.name) {
        errors.name = "Name is Required"
    }
    if (!values.email) {
        errors.email = "E-mail is Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Please provide a valid email address"
    }
    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 5) {
        errors.password = "Provide at least five character in password"
    }

    return errors
}

export default Validation