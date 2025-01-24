import React from 'react';
import Image from "next/image";
import Container from "@/app/_system/container";

function Ourteam() {
    return (<div>
            <section className="mt-[-160px] bg-white">
                <Container className="container">
                    <div className="relative z-10 overflow-hidden rounded-md bg-primary py-[70px] text-center">
                        <div className="relative z-10 mx-auto max-w-[770px] px-6">
                            <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-[40px]">Subscribe
                                our
                                newsletter to receive future updates</h2>
                            <form className="relative mx-auto max-w-[480px]"><input type="email" id="email"
                                                                                    placeholder="Enter your email"
                                                                                    className="mb-5 w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-center text-white placeholder-white placeholder-opacity-70 outline-none transition focus:border-opacity-100 focus-visible:shadow-none sm:mb-0 sm:text-left"
                                                                                    name="email" value=""/>
                                <button
                                    className="right-2 top-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold text-primary sm:absolute sm:w-auto sm:py-[10px]">Subscribe
                                    Now
                                </button>
                            </form>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 -z-10 w-full">
                            <svg width="818" height="286"
                                 viewBox="0 0 818 286" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="mx-auto">
                                <circle cx="409" cy="409" r="408.5" stroke="url(#paint0_linear_0:1)"></circle>
                                <circle cx="409" cy="409" r="349.5" stroke="url(#paint1_linear_0:1)"></circle>
                                <defs>
                                    <linearGradient id="paint0_linear_0:1" x1="-34.5" y1="291.5" x2="851" y2="291.5"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.35"></stop>
                                        <stop offset="0.218415" stopColor="white" stopOpacity="0"></stop>
                                        <stop offset="0.728079" stopColor="white" stopOpacity="0"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_0:1" x1="29.4768" y1="308.45" x2="787.24"
                                                    y2="308.45"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.35"></stop>
                                        <stop offset="0.218415" stopColor="white" stopOpacity="0"></stop>
                                        <stop offset="0.777261" stopColor="white" stopOpacity="0"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="bg-white pt-20 lg:pt-[120px]">
                <Container className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center"><span
                                className="mb-2 block text-lg font-semibold text-primary">TEAM</span>
                                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">Our Awesome
                                    Team</h2>
                                <p className="text-base text-body-color">There are many variations of passages of Lorem
                                    Ipsum
                                    available but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                            <div className="mx-auto mb-10 w-full max-w-[370px]">
                                <div className="relative aspect-[149/182] overflow-hidden rounded-lg"><Image
                                    alt="Coriss Ambady"
                                    loading="lazy" decoding="async" data-nimg="fill"
                                    className="w-full object-cover object-center"
                                    width={'1000'}
                                    height={'1000'}
                                    //      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="100vw"
                                   // srcSet="image_86 640w, image_88 750w, image_89 828w, image_90 1080w, image_91 1200w, image_32 1920w, image_92 2048w, image_8 3840w"
                                    src="/images/image_8"/>
                                    <div className="absolute bottom-5 left-0 w-full text-center">
                                        <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                                            <h3 className="text-base font-semibold text-dark">Coriss Ambady</h3>
                                            <p className="text-sm text-body-color">Web Developer</p>
                                            <div><span className="absolute bottom-0 left-0"><svg width="61" height="30"
                                                                                                 viewBox="0 0 61 30"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="45" r="45" fill="#13C296" fillOpacity="0.11">
                                                </circle>
                                            </svg></span><span className="absolute right-0 top-0"><svg width="20"
                                                                                                       height="25"
                                                                                                       viewBox="0 0 20 25"
                                                                                                       fill="none"
                                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="0.706257" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 0.706257 24.3533)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 6.39669 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 12.0881 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 17.7785 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 0.706257 18.6624)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 6.39669 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 12.0881 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 17.7785 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 0.706257 12.9717)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 6.39669 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 12.0881 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 17.7785 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 0.706257 7.28077)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 6.39669 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 12.0881 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 17.7785 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 0.706257 1.58989)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 6.39669 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 12.0881 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 17.7785 1.58989)" fill="#3056D3"></circle>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                            <div className="mx-auto mb-10 w-full max-w-[370px]">
                                <div className="relative aspect-[149/182] overflow-hidden rounded-lg"><Image
                                    alt="Glorius Cristian"
                                    width={'1000'}
                                    height={'1000'}
                                    loading="lazy" decoding="async" data-nimg="fill"
                                    className="w-full object-cover object-center"
                                    //  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="100vw"
                                   // srcSet="image_94 640w, image_33 750w, image_34 828w, image_93 1080w, image_96 1200w, image_97 1920w, image_98 2048w, image_9 3840w"
                                    src="/images/image_9"/>
                                    <div className="absolute bottom-5 left-0 w-full text-center">
                                        <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                                            <h3 className="text-base font-semibold text-dark">Glorius Cristian</h3>
                                            <p className="text-sm text-body-color">App Developer</p>
                                            <div><span className="absolute bottom-0 left-0"><svg width="61" height="30"
                                                                                                 viewBox="0 0 61 30"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="45" r="45" fill="#13C296" fillOpacity="0.11">
                                                </circle>
                                            </svg></span><span className="absolute right-0 top-0"><svg width="20"
                                                                                                       height="25"
                                                                                                       viewBox="0 0 20 25"
                                                                                                       fill="none"
                                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="0.706257" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 0.706257 24.3533)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 6.39669 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 12.0881 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 17.7785 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 0.706257 18.6624)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 6.39669 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 12.0881 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 17.7785 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 0.706257 12.9717)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 6.39669 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 12.0881 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 17.7785 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 0.706257 7.28077)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 6.39669 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 12.0881 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 17.7785 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 0.706257 1.58989)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 6.39669 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 12.0881 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 17.7785 1.58989)" fill="#3056D3"></circle>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                            <div className="mx-auto mb-10 w-full max-w-[370px]">
                                <div className="relative aspect-[149/182] overflow-hidden rounded-lg"><Image
                                    alt="Jackie Sanders"
                                    width={'1000'}
                                    height={'1000'}
                                    loading="lazy" decoding="async" data-nimg="fill"
                                    className="w-full object-cover object-center"
                                    //      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="100vw"
                                   // srcSet="image_95 640w, image_100 750w, image_99 828w, image_104 1080w, image_101 1200w, image_102 1920w, image_37 2048w, image_10 3840w"
                                    src="/images/image_10"/>
                                    <div className="absolute bottom-5 left-0 w-full text-center">
                                        <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                                            <h3 className="text-base font-semibold text-dark">Jackie Sanders</h3>
                                            <p className="text-sm text-body-color">UI/UX Designer</p>
                                            <div><span className="absolute bottom-0 left-0"><svg width="61" height="30"
                                                                                                 viewBox="0 0 61 30"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="45" r="45" fill="#13C296" fillOpacity="0.11">
                                                </circle>
                                            </svg></span><span className="absolute right-0 top-0"><svg width="20"
                                                                                                       height="25"
                                                                                                       viewBox="0 0 20 25"
                                                                                                       fill="none"
                                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="0.706257" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 0.706257 24.3533)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 6.39669 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 12.0881 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 17.7785 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 0.706257 18.6624)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 6.39669 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 12.0881 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 17.7785 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 0.706257 12.9717)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 6.39669 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 12.0881 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 17.7785 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 0.706257 7.28077)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 6.39669 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 12.0881 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 17.7785 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 0.706257 1.58989)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 6.39669 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 12.0881 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 17.7785 1.58989)" fill="#3056D3"></circle>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:w-1/4">
                            <div className="mx-auto mb-10 w-full max-w-[370px]">
                                <div className="relative aspect-[149/182] overflow-hidden rounded-lg"><Image
                                    alt="Nikolas Brooten"
                                    width={'1000'}
                                    height={'1000'}
                                    loading="lazy" decoding="async" data-nimg="fill"
                                    className="w-full object-cover object-center"
                                    //    style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                    sizes="100vw"
                                   // srcSet="image_105 640w, image_103 750w, image_35 828w, image_106 1080w, image_39 1200w, image_36 1920w, image_38 2048w, image_12 3840w"
                                    src="/images/image_12"/>
                                    <div className="absolute bottom-5 left-0 w-full text-center">
                                        <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                                            <h3 className="text-base font-semibold text-dark">Nikolas Brooten</h3>
                                            <p className="text-sm text-body-color">Sales Manager</p>
                                            <div><span className="absolute bottom-0 left-0"><svg width="61" height="30"
                                                                                                 viewBox="0 0 61 30"
                                                                                                 fill="none"
                                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="16" cy="45" r="45" fill="#13C296" fillOpacity="0.11">
                                                </circle>
                                            </svg></span><span className="absolute right-0 top-0"><svg width="20"
                                                                                                       height="25"
                                                                                                       viewBox="0 0 20 25"
                                                                                                       fill="none"
                                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="0.706257" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 0.706257 24.3533)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 6.39669 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 12.0881 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="24.3533" r="0.646687"
                                                        transform="rotate(-90 17.7785 24.3533)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 0.706257 18.6624)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 6.39669 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 12.0881 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="18.6624" r="0.646687"
                                                        transform="rotate(-90 17.7785 18.6624)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 0.706257 12.9717)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 6.39669 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 12.0881 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="12.9717" r="0.646687"
                                                        transform="rotate(-90 17.7785 12.9717)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 0.706257 7.28077)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 6.39669 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 12.0881 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="7.28077" r="0.646687"
                                                        transform="rotate(-90 17.7785 7.28077)" fill="#3056D3"></circle>
                                                <circle cx="0.706257" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 0.706257 1.58989)"
                                                        fill="#3056D3"></circle>
                                                <circle cx="6.39669" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 6.39669 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="12.0881" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 12.0881 1.58989)" fill="#3056D3"></circle>
                                                <circle cx="17.7785" cy="1.58989" r="0.646687"
                                                        transform="rotate(-90 17.7785 1.58989)" fill="#3056D3"></circle>
                                            </svg></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>);
}

export default Ourteam;