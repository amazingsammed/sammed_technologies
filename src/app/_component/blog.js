import React from 'react';
import Container from "../_system/container";
import Image from "next/image";
const Blog =[
    {title:"Exploring MERN Stack: Powering Modern Web Development",
        description:"In the world of web development, staying ahead of the curve is crucial. One technology stack that has",
        image:"/images/image_18",
        url:"/blog/exploring-the-mern-stack-powering-modern-web-development"},
    {title:"Graphics Design",
        description:"We create poster for various occasions and flyers for specific needs",
        image:"",
        url:"/service/graphics-design"},
    {title:"App Development",
        description:"We create Application software for various platforms such as Android, IOS, Mac ,Windows and Linux",
        image:"",
        url:"/service/app-development"},
];
function Blog() {
    return (
        <section id="news" className="bg-[#f8f9ff] py-20 lg:pt-[120px]">
            <Container className="container">
                <div className="mx-[-16px] flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[50px] max-w-[600px] text-center"><span
                            className="mb-2 block text-lg font-semibold text-primary">BLOG</span>
                            <h2 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]">Latest
                                Blogs</h2>
                            <p className="text-lg font-medium text-body-color">There are many variations of passages of
                                Lorem
                                Ipsum available but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="mb-10 w-full px-4 lg:w-1/2 xl:w-1/3">
                        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-blog">
                            <a className="relative block aspect-video"
                            href="/blog/exploring-the-mern-stack-powering-modern-web-development">
                            <Image
                                alt="Exploring MERN Stack: Powering Modern Web Development" loading="lazy"
                                decoding="async" data-nimg="fill" className="w-full duration-300 group-hover:scale-110"
                                //style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100vw"
                                width={"1000"}
                                height={"1000"}
                                // srcSet="image_111 640w, image_110 750w, image_112 828w, image_113 1080w, image_118 1200w, image_117 1920w, image_120 2048w, image_18 3840w"
                                src="/images/image_18"/></a>
                            <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">
                                <div>
                                    <h3 className="mb-3 line-clamp-2"><a
                                        className="block text-xl font-semibold text-black duration-200 hover:text-primary"
                                        href="/blog/exploring-the-mern-stack-powering-modern-web-development">Exploring
                                        MERN Stack: Powering Modern Web Development</a></h3>
                                    <p className="mb-4 line-clamp-3 text-base font-medium text-body-color">In the world
                                        of web
                                        development, staying ahead of the curve is crucial. One technology stack that
                                        ha</p>
                                </div>
                                <div><a
                                    className="text-sm font-medium text-black underline duration-200 hover:text-primary hover:no-underline"
                                    href="/blog/exploring-the-mern-stack-powering-modern-web-development">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="mb-10 w-full px-4 lg:w-1/2 xl:w-1/3">*/}
                    {/*    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-blog"><a*/}
                    {/*        className="relative block aspect-video" href="/blog/best-ui-components-for-modern-websites">*/}

                    {/*        <Image*/}
                    {/*        alt="Test webhook" loading="lazy" decoding="async" data-nimg="fill"*/}
                    {/*        className="w-full duration-300 group-hover:scale-110"*/}
                    {/*      //  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"*/}
                    {/*        sizes="100vw"*/}
                    {/*        srcSet="image_48 640w, image_53 750w, image_122 828w, image_115 1080w, image_114 1200w, image_116 1920w, image_121 2048w, image_17 3840w"*/}
                    {/*        src="image_17"/></a>*/}
                    {/*        <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">*/}
                    {/*            <div>*/}
                    {/*                <h3 className="mb-3 line-clamp-2"><a*/}
                    {/*                    className="block text-xl font-semibold text-black duration-200 hover:text-primary"*/}
                    {/*                    href="/blog/best-ui-components-for-modern-websites">Test webhook</a></h3>*/}
                    {/*                <p className="mb-4 line-clamp-3 text-base font-medium text-body-color">Duis aute irure dolor*/}
                    {/*                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.*/}
                    {/*                    Excepteur sint occaecat cupidatat.</p>*/}
                    {/*            </div>*/}
                    {/*            <div><a className="text-sm font-medium text-black underline duration-200 hover:text-primary hover:no-underline"*/}
                    {/*                    href="/blog/best-ui-components-for-modern-websites">Read More</a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="mb-10 w-full px-4 lg:w-1/2 xl:w-1/3">*/}
                    {/*    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-blog"><a*/}
                    {/*        className="relative block aspect-video"*/}
                    {/*        href="/blog/the-power-of-uiux-elevating-digital-experiences">*/}
                    {/*        <Image*/}
                    {/*        alt="The Power of UI/UX: Elevating Digital Experiences" loading="lazy" decoding="async"*/}
                    {/*        data-nimg="fill" className="w-full duration-300 group-hover:scale-110"*/}
                    {/*        ///style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"*/}
                    {/*        sizes="100vw"*/}
                    {/*        srcSet="image_119 640w, image_123 750w, image_125 828w, image_124 1080w, image_126 1200w, image_54 1920w, image_127 2048w, image_16 3840w"*/}
                    {/*        src="image_16"/></a>*/}
                    {/*        <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-11">*/}
                    {/*            <div>*/}
                    {/*                <h3 className="mb-3 line-clamp-2"><a*/}
                    {/*                    className="block text-xl font-semibold text-black duration-200 hover:text-primary"*/}
                    {/*                    href="/blog/the-power-of-uiux-elevating-digital-experiences">The Power of UI/UX:*/}
                    {/*                    Elevating Digital Experiences</a></h3>*/}
                    {/*                <p className="mb-4 line-clamp-3 text-base font-medium text-body-color">Lorem ipsum dolor sit*/}
                    {/*                    amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>*/}
                    {/*            </div>*/}
                    {/*            <div><a className="text-sm font-medium text-black underline duration-200 hover:text-primary hover:no-underline"*/}
                    {/*                    href="/blog/the-power-of-uiux-elevating-digital-experiences">Read More</a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Container>
        </section>
    );
}

export default Blog;