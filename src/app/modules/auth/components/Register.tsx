import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../../routing/paths";
import {useDispatch} from "react-redux";
import {FormDataRegister} from "../models/Props";


export default function Register() {

    const [formData, setFormData] = useState<FormDataRegister>({
        // firstName: '',
        // lastName: '',
        email: '',
        password: '',
        // passwordConfirmation: '',
    })
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setLoading(true);

        // const {firstName, lastName, email, password, passwordConfirmation} = formData

        console.log(formData)

        // setTimeout(() => {
        //     register(formData)
        //         .then((response) => {
        //             console.log({response})
        //         })
        //         .catch(error => {
        //             console.log({error})
        //         })
        //         .finally(() => {
        //             setLoading(true);
        //         })
        // }, 300)
    }

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const {name, value} = e.target
            setFormData({
                ...formData, [name]: value
            });
        },
        [formData]
    );


    return (
        <div>
            <h1>Login Page</h1>

            <h3>{loading.toString()}</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    firstName:
                    {/*<input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>*/}
                </div>
                <div>
                    lastName:
                    {/*<input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>*/}
                </div>
                <div>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div>
                    passwordConfirmation:
                    {/*<input type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange}/>*/}
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
