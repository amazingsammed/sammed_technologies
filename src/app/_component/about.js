import React from 'react';
import Container from "@/app/_system/container";

function About() {
    return (
        <section id="about" className="relative z-10 bg-white pb-[120px] pt-20 lg:pt-[145px]">
            <Container className="container">
                <div className="mx-[-16px] flex flex-wrap">
                    <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2 xl:w-7/12"><span
                        className="mb-3 text-lg font-bold text-primary md:text-xl">ABOUT US</span>
                        <h2
                            className="mb-5 max-w-[400px] text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-[45px] md:leading-tight">
                            Good reputation
                            Better design, Best experience</h2>
                        <p className="max-w-[570px] text-base font-medium text-body-color">We serve our customers with best and modern style of designs and conform to various industry standard </p>
                    </div>
                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <h3 className="mb-6 text-2xl font-semibold text-black md:text-3xl">Connect With Us</h3>
                        <p className="mb-10 text-base font-medium text-body-color">We are on various social media platform, we can communicate with us with the social media icons below</p>
                        <div className="flex items-center"><a href="/" target="_blank" rel="noopener noreferrer"
                                                              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8F2] text-body-color hover:border-primary hover:bg-primary hover:text-white"
                                                              aria-label="social-link">
                            <svg width="7" height="14" viewBox="0 0 7 14" className="fill-current">
                                <path
                                    d="M6.50914 5.6H5.42429H5.03684V5.14839V3.74839V3.29677H5.42429H6.23793C6.45103 3.29677 6.62538 3.11613 6.62538 2.84516V0.451613C6.62538 0.203226 6.4704 0 6.23793 0H4.82374C3.29332 0 2.22783 1.26452 2.22783 3.13871V5.10323V5.55484H1.84038H0.523056C0.251842 5.55484 0 5.80323 0 6.16452V7.79032C0 8.10645 0.213097 8.4 0.523056 8.4H1.80164H2.18909V8.85161V13.3903C2.18909 13.7065 2.40218 14 2.71214 14H4.53315C4.64939 14 4.74625 13.9323 4.82374 13.8419C4.90123 13.7516 4.95935 13.5935 4.95935 13.4581V8.87419V8.42258H5.36617H6.23793C6.48977 8.42258 6.6835 8.24194 6.72224 7.97097V7.94839V7.92581L6.99346 6.36774C7.01283 6.20968 6.99345 6.02903 6.87722 5.84839C6.83848 5.73548 6.66412 5.62258 6.50914 5.6Z">
                                </path>
                            </svg>
                        </a><a href="/" target="_blank" rel="noopener noreferrer"
                               className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8F2] text-body-color hover:border-primary hover:bg-primary hover:text-white"
                               aria-label="social-link">
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                                      fill="currentColor"></path>
                            </svg>
                        </a><a href="/" target="_blank" rel="noopener noreferrer"
                               className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8F2] text-body-color hover:border-primary hover:bg-primary hover:text-white"
                               aria-label="social-link">
                            <svg width="19" height="14" viewBox="0 0 19 14"
                                 className="fill-current">
                                <path
                                    d="M18.2753 2.19355C18.0645 1.32258 17.4323 0.645161 16.6194 0.419355C15.1742 7.69092e-08 9.33333 0 9.33333 0C9.33333 0 3.49247 7.69092e-08 2.04731 0.419355C1.23441 0.645161 0.60215 1.32258 0.391398 2.19355C0 3.77419 0 7 0 7C0 7 0 10.2581 0.391398 11.8065C0.60215 12.6774 1.23441 13.3548 2.04731 13.5806C3.49247 14 9.33333 14 9.33333 14C9.33333 14 15.1742 14 16.6194 13.5806C17.4323 13.3548 18.0645 12.6774 18.2753 11.8065C18.6667 10.2581 18.6667 7 18.6667 7C18.6667 7 18.6667 3.77419 18.2753 2.19355ZM7.46667 10V4L12.314 7L7.46667 10Z">
                                </path>
                            </svg>
                        </a><a href="/" target="_blank" rel="noopener noreferrer"
                               className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E8F2] text-body-color hover:border-primary hover:bg-primary hover:text-white"
                               aria-label="social-link">
                            <svg width="14" height="14" viewBox="0 0 14 14"
                                 className="fill-current">
                                <path
                                    d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60322V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z">
                                </path>
                            </svg>
                        </a></div>
                    </div>
                </div>
            </Container>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg width="60" height="120" viewBox="0 0 60 120"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)"></circle>
                    <defs>
                        <radialGradient id="paint0_radial_18:24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(60) rotate(90) scale(120)">
                            <stop stopColor="white"></stop>
                            <stop offset="0.569" stopColor="#F0F4FD"></stop>
                            <stop offset="0.993" stopColor="#D9E0F0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}

export default About;