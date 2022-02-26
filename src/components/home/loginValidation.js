const ValidationLogin = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "E-mail is Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Please provide a valid email address"
    }
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors
}

export default ValidationLogin