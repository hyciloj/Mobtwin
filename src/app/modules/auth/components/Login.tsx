import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../../routing/paths";
import {login} from "../redux/AuthCRUD";
import {useDispatch} from "react-redux";
import * as auth from "../redux/AuthRedux"

interface formData {
    email: string;
    password: string;
}

export default function Login() {

    const [formData, setFormData] = useState<formData>({email: 'admin@email.com', password: 'admin'})
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();
        setLoading(true);

        setTimeout(() => {
            login(formData)
                .then(({ data }) => {
                    const { data: {user: { token }} } = data;
                    dispatch(auth.actions.login({accessToken: token}))
                })
                .catch(error => {
                    console.log({error})
                })
                .finally(() => {setLoading(true);})
        }, 300)
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    //     const {name, value} = e.target
    //     setFormData({
    //         ...formData, [name]: value
    //     });
    // }

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
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>

            <Link to={PATH_AUTH.register}>register</Link>
        </div>
    )
}
