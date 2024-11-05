import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}





import React from "react";

import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const { email: user, isAuthenticated } = useAuthContext();

    return (
        <nav
            className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
            <div className="flex items-center justify-between text-blue-gray-900">



                <img src="https://scontent.fsof10-1.fna.fbcdn.net/v/t39.30808-6/316535498_571138691686110_6533284081313083357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qGd52xbvzKkQ7kNvgFQpaBW&_nc_ht=scontent.fsof10-1.fna&oh=00_AYATwdZPGnAy5qmSw8GyUfcY7r0t3N5DKNRNVFTVvI8IiQ&oe=66C7ACC7" alt="logo-ct" className="w-10" />
                <Link to="/"

                    className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
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

                        {/* <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <Link to="/about" className="flex items-center transition-colors hover:text-blue-500">
                                About
                            </Link>
                        </li> */}
                        {isAuthenticated
                            ?
                            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    <Link to="/create" className="flex items-center transition-colors hover:text-blue-500">
                                        Create
                                    </Link>
                                </li>
                                <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    <Link to="/logout" className="flex items-center transition-colors hover:text-blue-500">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
                            </ul>
                        }


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
                <ProfileMenu />
            </div>
        </nav >
    );
}
