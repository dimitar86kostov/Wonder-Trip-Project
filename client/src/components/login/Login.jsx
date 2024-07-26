import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import useForm from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

const initValues = {
    username: '',
    password: ''
}

export function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const navigate = useNavigate();
    const login = useLogin();


    const loginSubmitHandler = ({ username, password }) => {
        login(username, password);
        navigate('/');
    }

    const { values, changeHandler, submitHandler } = useForm(initValues, loginSubmitHandler)


    return (
        <section className="grid text-center h-screen items-center p-8">
            <div className="p-20 flex items-center gap-x-4 text-xs">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <Typography variant="h3" color="blue-gray" className="mb-2">
                            Sign In
                        </Typography>
                        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                            Enter your email and password to sign in
                        </Typography>
                        <form onSubmit={submitHandler} action="POST" className="mx-auto max-w-[24rem] text-left">
                            <div className="mb-6">
                                <label htmlFor="email">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900"
                                    >
                                        Your Email
                                    </Typography>
                                </label>
                                <Input
                                    color="gray"
                                    size="lg"
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={changeHandler}
                                    placeholder="name@mail.com"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900"
                                    >
                                        Password
                                    </Typography>
                                </label>
                                <Input
                                    size="lg"
                                    placeholder="********"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    type={passwordShown ? "text" : "password"}
                                    icon={
                                        <i onClick={togglePasswordVisiblity}>
                                            {passwordShown ? (
                                                <EyeIcon className="h-5 w-5" />
                                            ) : (
                                                <EyeSlashIcon className="h-5 w-5" />
                                            )}
                                        </i>
                                    }
                                />
                            </div>
                            <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
                                sign in
                            </Button>
                            <div className="!mt-4 flex justify-end">
                                <Typography
                                    as="a"
                                    href="#"
                                    color="blue-gray"
                                    variant="small"
                                    className="font-medium"
                                >
                                    Forgot password
                                </Typography>
                            </div>
                            <Button
                                variant="outlined"
                                size="lg"
                                className="mt-6 flex h-12 items-center justify-center gap-2"
                                fullWidth
                            >
                                <img
                                    src={`https://www.material-tailwind.com/logos/logo-google.png`}
                                    alt="google"
                                    className="h-6 w-6"
                                />{" "}
                                sign in with google
                            </Button>
                            <Typography
                                variant="small"
                                color="gray"
                                className="!mt-4 text-center font-normal"
                            >
                                Not registered?{" "}
                                <a href="/register" className="font-medium text-gray-900">
                                    Create account
                                </a>
                            </Typography>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;