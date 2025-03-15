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
        <header className=" max-w-screen-2xl mx-auto ">
               <div className={"flex flex-row justify-between items-center py-3"}>
                   <Link
                       className="header-logo block w-full "
                       href="/"><img src={"/logo.png"} alt={"logo"} className={"h-16 py-3"}/></Link>

                   <div>
                       <ul className="flex flex-row gap-3 ">
                           {tabs.map((tab, index) => (<li key={index} >{tab.title}</li>))}
                       </ul>
                   </div>

               </div>
        </header>
    );
}

export default Header;
