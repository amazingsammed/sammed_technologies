import React from 'react';
import Container from "@/app/_system/container";
import {ArrowRightSVG} from "@/app/_system/mysvg";
import Image from "next/image";

const OurServices = [

    {
        title: "Website Development",
         description: "We create professional website for small, medium and large scale businesses",
        image: "/images/image_3",
        url: "/service/website-development",
    },
    {
        title: "Graphics Design",
        description: "We create poster for various occasions and flyers for specific needs",
        image: "/images/image_2",
        url: "/service/graphics-design"
    },
    {
        title: "App Development",
        description: "We create Application software for various platforms such as Android, IOS, Mac ,Windows and Linux",
        image: "/images/image_4",
        url: "/service/app-development"
    },
];

function Services() {
    return (
        <section id="services" className=" pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <Container className="container">
                <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
                    <div className="w-full px-4 lg:w-8/12">
                        <div className=""
                            //style="max-width:625px;margin-bottom:50px"
                        ><span
                            className="mb-2 block text-lg font-semibold text-primary">WHAT WE DO</span>
                            <h2 className="text-3xl font-bold sm:text-4xl md:text-[45px]/[55px] text-white undefined undefined">
                                We help to build clients their dream projects</h2>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-4/12">
                        <div className="mb-[50px] flex lg:justify-end"><a
                            className="text-lg font-medium text-white underline hover:text-primary" href="/service">EXPLORE
                            SERVICES</a></div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    {OurServices.map((service, key) => (
                        <div key={key} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mb-10 bg-white"><a className="relative block aspect-[34/23] w-full"
                                                               href={service.url}><Image
                                alt={service.title} loading="lazy"
                                decoding="async" data-nimg="fill" className="w-full object-cover object-center"
                                // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100vw"
                                width={'1000'}
                                height={'1000'}
                                src={service.image}/></a>
                                <div className="p-8 sm:p-11 md:p-8 lg:px-6 xl:p-10 2xl:p-11">
                                    <h3><a
                                        className="mb-4 block text-lg font-bold text-dark hover:text-primary sm:text-xl"
                                        href="/service/website-development">{service.title}</a></h3>
                                    <p className="mb-6 border-b border-[#F3F3F3] pb-7 text-base leading-relaxed text-body-color">
                                        {service.description}</p><a
                                    className="inline-flex items-center text-base font-medium text-body-color hover:text-primary"
                                    href={service.url}>View Details<span className="ml-3"><ArrowRightSVG/></span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Services;