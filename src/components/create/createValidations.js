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
    if (!values.address) {
        errors.address = "Address is Required"
    }
    if (!values.phone) {
        errors.phone = "Phone is Required"
    }
    if (!values.website) {
        errors.website = "Website is Required"
    }

    return errors
}

export default Validation