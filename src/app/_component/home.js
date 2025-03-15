import React from 'react';


function HomePage() {
    return (
<section className={"bg-[url('/images/bg.jpg')] bg-cover"}>
    <div className={"max-w-screen-2xl mx-auto my-auto h-dvh "}>
        <div className={"flex flex-col items-center justify-center py-96 gap-4"}>
            <h1 className={"text-6xl font-extrabold text-white"}>Sammed Technologies</h1>
            <p className={"text-xl text-black"}>Best Ghanaian  Software and Hardware service provider</p>
            <div>
                <button className={"py-3 px-4 bg-blue-700 text-white rounded-2xl"}> About Us</button>

            </div>
        </div>
    </div>
</section>
    );
}

export default HomePage;


// <div id="home" className="relative bg-white pb-20 pt-[120px] lg:pb-[110px] lg:pt-[150px]">
//     <Container>
//         <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
//                 <div className="hero-content">
//                     <h1
//                         className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
//                         Best Ghanaian Based<br/>Software and Hardware service provider<br/></h1>
//                     <p className="mb-8 max-w-[480px] text-base text-body-color">Elevate your online presence and
//                         impress
//                         clients effortlessly! — featuring essential integrations, pre-built pages, and
//                         customizable
//                         components. Modern, responsive design with fast loading and SEO optimization.</p>.
//                     <ul className="flex flex-wrap items-center gap-8">
//                         <li><a
//                             className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
//                             href="/portfolio">Explore</a></li>
//                         <li className="leading-none"><a
//                             className="inline-flex items-center justify-center py-1 text-center text-base font-normal text-body-color hover:text-primary"
//                             href="#"><span className="mr-2"><DownloadSVG/></span>Download Certificate</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="hidden px-4 xl:block xl:w-1/12"></div>
//             <div className="w-full px-4 lg:w-6/12">
//                 <div className="flex w-full max-lg:mt-10 lg:justify-end">
//                     <div
//                         className="relative z-10 flex aspect-[491/515] w-full max-w-[491px] pt-11 lg:justify-end lg:pt-0">
//                         <Image alt="hero" loading="lazy" decoding="async" data-nimg="fill"
//                             //style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
//                                height={"100"}
//                                width={"1000"}
//                             // srcSet="img_49 640w, img_47 750w, img_23 828w, img_27 1080w, img_26 1200w, img_24 1920w, img_62 2048w, img_6 3840w"
//                                src="/images/image_47.png"/><span className="absolute -bottom-8 -left-8 z-[-1]">
//                                <DotDotSVG/>
//                             </span></div>
//                 </div>
//             </div>
//         </div>
//     </Container>
// </div>