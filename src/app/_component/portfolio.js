import React from 'react';
import Container from "../_system/container";

import Image from "next/image";

function Portfolio() {
    return (
        <section id="portfolio" className="bg-[#f8f9ff] pb-[70px] pt-[120px]">
            <Container className="container">
                <div className="mx-[-16px] flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto text-center mb-[50px] max-w-[600px]"
                            // style="max-width:600px;margin-bottom:50px"
                        ><span
                            className="mb-2 block text-lg font-semibold text-primary">Creative Portfolio</span>
                            <h2 className="text-3xl font-bold sm:text-4xl md:text-[45px]/[55px] text-black mb-5 undefined">
                                Recent Works</h2>
                            <p className="text-lg font-medium text-body-color undefined">There are many variations of
                                passages
                                of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="portfolio-buttons mb-12 flex flex-wrap items-center justify-center">
                            <button
                                className="active mb-2 block rounded-full px-5 py-2 text-sm text-body-color sm:text-base sm:font-semibold md:mx-2">All
                            </button>
                            <button
                                className="hover:bg-primary/5 hover:text-primary mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2">web
                            </button>
                            <button
                                className="hover:bg-primary/5 hover:text-primary mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2">design
                            </button>
                            <button
                                className="hover:bg-primary/5 hover:text-primary mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2">app
                            </button>
                            <button
                                className="hover:bg-primary/5 hover:text-primary mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2">graphic
                            </button>
                            <button
                                className="hover:bg-primary/5 hover:text-primary mb-2 block rounded-full px-5 py-2 text-sm capitalize text-body-color sm:text-base sm:font-semibold md:mx-2">web
                                design
                            </button>
                        </div>
                    </div>
                </div>
                <div className="portfolio-container -mx-4 flex justify-center">
                    <div className="w-full px-4 xl:w-10/12">
                        <div>
                            <div
                                //  style="display:flex;flex-direction:row;justify-content:center;align-content:stretch;box-sizing:border-box;width:100%;gap:30px"
                            >
                                <div
                                    // style="display:flex;flex-direction:column;justify-content:flex-start;align-content:stretch;flex:1;width:0;gap:30px"
                                >
                                    <div
                                        //  className="flex justify-stretch"
                                    >
                                        <div className="mb-4">
                                            <div
                                                className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
                                                <Image alt="image" loading="lazy" decoding="async" data-nimg="fill"
                                                     className="w-full"
                                                    // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                                     sizes="100vw"
                                                     srcSet="image_28 640w, image_59 750w, image_60 828w, image_75 1080w, image_65 1200w, image_74 1920w, image_69 2048w, image_1 3840w"
                                                     src="image_1"/>
                                                <div
                                                    className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
                                                    <button
                                                        className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                                        <svg
                                                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="mt-6"><a
                                                className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
                                                href="/portfolio/startup-landing-page">Startup landing page</a></h3>
                                            <p className="text-base font-medium text-body-color">Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
                                        </div>
                                    </div>
                                    <div //className="flex justify-stretch"
                                    >
                                        <div className="mb-4">
                                            <div
                                                className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
                                                <Image alt="image" loading="lazy" decoding="async" data-nimg="fill"
                                                     className="w-full"
                                                    // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                                     sizes="100vw"
                                                     srcSet="image_70 640w, image_63 750w, image_68 828w, image_78 1080w, image_73 1200w, image_67 1920w, image_61 2048w, image_5 3840w"
                                                     src="image_5"/>
                                                <div
                                                    className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
                                                    <button
                                                        className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                                        <svg
                                                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="mt-6"><a
                                                className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
                                                href="/portfolio/job-portal-landing-page">Job portal landing page</a>
                                            </h3>
                                            <p className="text-base font-medium text-body-color">Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
                                        </div>
                                    </div>
                                    <div
                                        //    className="flex justify-stretch"
                                    >
                                        <div className="mb-4">
                                            <div
                                                className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
                                                <Image alt="image" loading="lazy" decoding="async" data-nimg="fill"
                                                     className="w-full"
                                                    // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                                     sizes="100vw"
                                                     srcSet="image_72 640w, image_71 750w, image_64 828w, image_66 1080w, image_77 1200w, image_76 1920w, image_79 2048w, image 3840w"
                                                     src="image"/>
                                                <div
                                                    className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
                                                    <button
                                                        className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                                        <svg
                                                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="mt-6"><a
                                                className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
                                                href="/portfolio/saas-landing-page">SaaS landing page</a></h3>
                                            <p className="text-base font-medium text-body-color">Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-stretch">
                                        <div className="mb-4">
                                            <div
                                                className="group relative mb-8 aspect-[518/291] overflow-hidden rounded-md shadow-service">
                                                <Image alt="image" loading="lazy" decoding="async" data-nimg="fill"
                                                     className="w-full"
                                                    // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                                     sizes="100vw"
                                                     srcSet="image_80 640w, image_82 750w, image_81 828w, image_84 1080w, image_83 1200w, image_87 1920w, image_85 2048w, image_7 3840w"
                                                     src="image_7"/>
                                                <div
                                                    className="invisible absolute left-0 top-0 flex h-full w-full items-center justify-center bg-primary bg-opacity-[17%] opacity-0 transition group-hover:visible group-hover:opacity-100">
                                                    <button
                                                        className="glightbox flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                                                        <svg
                                                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                                                                  fill="white"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="mt-6"><a
                                                className="mb-3 inline-block text-xl font-semibold text-black hover:text-primary"
                                                href="/portfolio/business-corporate-template">Business & corporate
                                                template</a></h3>
                                            <p className="text-base font-medium text-body-color">Lorem ipsum dolor sit
                                                amet,
                                                consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Portfolio;