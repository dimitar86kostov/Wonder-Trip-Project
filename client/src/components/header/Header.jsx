import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const { username: user } = useAuthContext();

    return (
        <nav
            className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to="/"
                    className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                    Wonder Trip
                </Link>
                {user
                    ? <Link to="/"
                        className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
                        {user}
                    </Link>
                    : "Guest"
                }
                
                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/catalog" className="flex items-center transition-colors hover:text-blue-500">
                                Catalog
                            </Link>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/create" className="flex items-center transition-colors hover:text-blue-500">
                                Create
                            </Link>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/about" className="flex items-center transition-colors hover:text-blue-500">
                                About
                            </Link>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/login" className="flex items-center transition-colors hover:text-blue-500">
                                Login
                            </Link>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/register" className="flex items-center transition-colors hover:text-blue-500">
                                Register
                            </Link>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/logout" className="flex items-center transition-colors hover:text-blue-500">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button">
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </nav>
    );

    // return (
    //     <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">

    //         <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
    //             <div className="flex items-center justify-between text-blue-gray-900">
    //                 <Typography
    //                     as={Link}
    //                     to="/"
    //                     className="mr-4 cursor-pointer py-1.5 font-medium"
    //                 >
    //                     Wonder Travel
    //                 </Typography>

    //                 <div className="flex items-center gap-4">
    //                     <div className="mr-4 hidden lg:block">{navList}</div>
    //                     <div className="flex items-center gap-x-1">
    //                         {/* <Button
    //                             variant="text"
    //                             size="sm"
    //                             className="hidden lg:inline-block"
    //                         >
    //                             <span>Log In</span>
    //                         </Button>
    //                         <Button
    //                             as={Link}
    //                             to="/register"
    //                             variant="gradient"
    //                             size="sm"
    //                             className="hidden lg:inline-block"
    //                         >
    //                             <span>Sign up</span>
    //                         </Button> */}
    //                         <Typography
    //                             as={Link}
    //                             to="/register"
    //                             className="mr-4 cursor-pointer py-1.5 font-medium"
    //                         >
    //                             <span>Sign Up</span>
    //                         </Typography>
    //                         <Typography
    //                             as={Link}
    //                             to="/login"
    //                             className="mr-4 cursor-pointer py-1.5 font-medium"
    //                         >
    //                             <span>Log In</span>
    //                         </Typography>
    //                         <Typography
    //                             as={Link}
    //                             to="/logout"
    //                             className="mr-4 cursor-pointer py-1.5 font-medium"
    //                         >
    //                             <span>Log Out</span>
    //                         </Typography>
    //                     </div>
    //                     <IconButton
    //                         variant="text"
    //                         className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //                         ripple={false}
    //                         onClick={() => setOpenNav(!openNav)}
    //                     >
    //                         {openNav ? (
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 fill="none"
    //                                 className="h-6 w-6"
    //                                 viewBox="0 0 24 24"
    //                                 stroke="currentColor"
    //                                 strokeWidth={2}
    //                             >
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M6 18L18 6M6 6l12 12"
    //                                 />
    //                             </svg>
    //                         ) : (
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="h-6 w-6"
    //                                 fill="none"
    //                                 stroke="currentColor"
    //                                 strokeWidth={2}
    //                             >
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M4 6h16M4 12h16M4 18h16"
    //                                 />
    //                             </svg>
    //                         )}
    //                     </IconButton>
    //                 </div>
    //             </div>
    //             <Collapse open={openNav}>
    //                 {navList}
    //                 <div className="flex items-center gap-x-1">
    //                     <Button fullWidth variant="text" size="sm" className="">
    //                         <span>Log In</span>
    //                     </Button>
    //                     <Button fullWidth variant="gradient" size="sm" className="">
    //                         <span>Sign in</span>
    //                     </Button>
    //                 </div>
    //             </Collapse>
    //         </Navbar>


    //     </div>
    // );
}

