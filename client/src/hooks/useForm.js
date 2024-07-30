import { useState } from "react";

export default function useForm(initValues, submitCallback) {
    const [values, setValues] = useState(initValues);

    const changeHandler = (e) => {

        setValues(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values)

        setValues(initValues);
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
}