import React from 'react';
import Image from "next/image";
function Clients() {
    return (
        <section id="clients" className="relative bg-black pb-[250px] pt-20">
            <div className="container">
                <div className="mx-[-16px] flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[570px] text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Some of Our Happy
                                Clients</h2>
                            <p className="text-lg font-medium text-body-color">There are many variations of passages of
                                Lorem
                                Ipsum available but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center"><a href="https://lineicons.com"
                                                                                       target="_blank"
                                                                                       rel="nofollow noreferrer"
                                                                                       className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"><Image
                            alt="Lineicons" loading="lazy" width="246" height="40" decoding="async" data-nimg="1"
                            //
                            src="images/lineicons-2.36d02cde.svg"/></a><a
                            href="https://formbold.com" target="_blank" rel="nofollow noreferrer"
                            className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"><Image
                            alt="Formbold" loading="lazy" width="219" height="40" decoding="async" data-nimg="1"
                            //
                            src="images/formbold-2.8ffdccb3.svg"/></a><a
                            href="https://tailadmin.com" target="_blank" rel="nofollow noreferrer"
                            className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"><Image
                            alt="Tailadmin" loading="lazy" width="221" height="40" decoding="async" data-nimg="1"
                            //
                            src="images/tailadmin-2.ffc1bf85.svg"/></a><a
                            href="https://uideck.com" target="_blank" rel="nofollow noreferrer"
                            className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"><Image
                            alt="Uideck" loading="lazy" width="171" height="40" decoding="async" data-nimg="1"
                            //
                            src="images/uideck-2.6b8ba64f.svg"/></a><a
                            href="https://graygrids.com" target="_blank" rel="nofollow noreferrer"
                            className="relative mx-3 flex max-w-[120px] items-center justify-center py-[15px] opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"><Image
                            alt="Graygrids" loading="lazy" width="193" height="40" decoding="async" data-nimg="1"
                            //
                            src="images/graygrids-2.432f9e06.svg"/></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients;