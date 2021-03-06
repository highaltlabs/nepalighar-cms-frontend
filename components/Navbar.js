import {Fragment, useEffect, useState} from 'react'
import Link from 'next/link'
import {Popover, Transition} from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'
import Avatar from "./Image";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({navs}) {
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            window.scrollY > 0 && e ? setScrolled(true) : setScrolled(false)
        });
        return () => {
            window.removeEventListener("scroll", (e) => {
            });
        };
    }, [isScrolled]);
    return (
        <Popover className={`z-50 fixed top-0 left-0 w-screen transition-all duration-200
          ${isScrolled ? "bg-gray-900" : "bg-transparent"}`}>
            {({open}) => (
                <>
                    <div className="mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                            <div className="flex justify-end lg:w-0 lg:flex-1">
                                <div className="pr-10">
                                    <Avatar src={'/nepali-ghar-logo.png'} alt={'nav logo'} width={'70'} height={'70'}/>
                                </div>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                {navs && navs.map((eachNav, index) =>
                                    ((eachNav.navigation_items.length === 0) ?
                                        <Link href={`${eachNav.name === 'Home' ? '/' : eachNav.url}`} key={index}>
                                            <a className={`text-base font-small hover:text-dark-900 ${isScrolled ? "text-white" : "text-white"}`}
                                               title={`/${eachNav.name === 'Home' ? eachNav.name : ''}`}>
                                                {eachNav.name}
                                            </a>
                                        </Link> :
                                        <Popover className="relative" key={index}>
                                            {({open}) => (
                                                <>
                                                    <Popover.Button
                                                        className={classNames(
                                                            `${isScrolled ? "text-white" : "text-white"}`,
                                                            'group rounded-md inline-flex items-center text-base font-medium focus:outline-none active:white'
                                                        )}>
                                                        <span>{eachNav.name}</span>
                                                        <ChevronDownIcon
                                                            className={classNames(
                                                                open ? 'text-gray-600' : 'text-gray-400',
                                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                            )}
                                                            aria-hidden="true"/>
                                                    </Popover.Button>

                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1">
                                                        <Popover.Panel
                                                            static
                                                            className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                            <div
                                                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                                <div
                                                                    className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                    {eachNav.navigation_items.map((item) => (
                                                                        <a key={item.name}
                                                                           href={item.url}
                                                                           className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                            </div>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>)
                                )}
                            </Popover.Group>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            </div>
                        </div>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div
                                className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <Avatar src={'/nepali-ghar-logo.png'} alt={'nav logo'} width={'50'}
                                                height={'50'}/>
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navs && navs.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.url}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <a href="#"
                                   className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                                    Donate
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
