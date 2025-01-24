import React from 'react';
import Link from "next/link";
import DropDownSVG, {SearchSVG} from "@/app/_system/mysvg";

const tabs = [
    {
        'title': 'About',
        'url': "/#home",
        'hasChildren': false
    },
    {
        'title': 'Services',
        'url': "/#home",
        'hasChildren': false
    },
    {
        'title': 'Portfolio',
        'url': "/#home",
        'hasChildren': false
    },
    {
        'title': 'Pricing',
        'url': "/#home",
        'hasChildren': false
    },
    {
        'title': 'Pages',
        'url': "/#home",
        'hasChildren': true,
        children: [
            {
                'title': 'Home',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'About',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'Services',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'Portfolio',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'Pricing',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'Blog',
                'url': "/#home",
                'hasChildren': false
            },
            {
                'title': 'Contact',
                'url': "/#home",
                'hasChildren': false
            },
        ]
    },
];

function Header() {
    return (
        <header className=" header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent transition">
                <div className="mx-auto w-full px-4 xl:container">
                    <div className="relative mx-[-16px] flex items-center justify-between">
                        <div className="w-52 max-w-full px-4 xl:w-60"><Link
                            className="header-logo block w-full py-6 lg:py-8"
                            href="/">STAS</Link></div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button aria-label="navbarToggler"
                                        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                                        name="navbarToggler"><span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-dark "></span><span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-dark "></span><span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-dark "></span></button>
                                <nav id="navbarCollapse"
                                     className="hidden lg:block absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white p-5 py-5 shadow-lg max-lg:max-h-[350px] max-lg:overflow-y-auto lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6">
                                    <ul className="block lg:flex">
                                        {tabs.map((tab, index) => (
                                            <div key={index} className="group relative lg:px-5 ">
                                                {!tab.hasChildren ? (<Link
                                                    className=" flex py-2 text-base text-black group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 menu-scroll"
                                                    href={tab.url}>{tab.title}</Link>) : (
                                                    <li className="group relative lg:px-5 submenu-item">
                                                        <button
                                                            className="flex w-full items-center justify-between py-2 text-base text-black group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6">{tab.title}<span
                                                            className="pl-3"><DropDownSVG/>
                                                            </span>
                                                        </button>
                                                        <ul
                                                            className="hidden lg:block submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                                                            {tab.children.map((item, index) => (
                                                                <li key={index}><Link
                                                                    className="block rounded px-4 py-[10px] text-sm text-primary"
                                                                    href={item.url}>{item.title} Page</Link></li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                )}

                                            </div>
                                        ))}

                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden items-center justify-end gap-4 pr-16 sm:flex lg:pr-0">
                                <button
                                    className="hidden h-10 w-10 items-center justify-center rounded-full text-body-color sm:flex">
                                    <SearchSVG/>
                                </button>
                                <Link
                                    className="rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-8 xl:px-9"
                                    href="/contact">Get a Quote</Link></div>
                        </div>
                    </div>
                </div>
        </header>
    );
}

export default Header;
