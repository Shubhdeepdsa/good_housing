import React from "react";
import ReviewBG from './ReviewImages/Review_BG.svg'
import ReviewImage from './ReviewImages/Review_1.svg'
const Review = () => {
    return (
        <>
            <div className="review_container flex p-28 items-center justify-center flex-col  ">
                <div className="title_container w-full  flex flex-col flex-start">
                    <p className="text-6xl text-[#1C4075] font-gilroy-bold font-bold">Good Stories</p>
                    <p className="text-xl text-[#1C4075] font-gilroy-bold mt-4">From Tenants that are empowered.</p>
                </div>
                <div className="bg_container relative mt-16 ">
                    <img src={ReviewBG} className="z-1" />

                    <div className="review_content flex items-center justify-around absolute top-0 left-0 z-10">
                        <div className="review_image_container ">
                            <img src={ReviewImage} className="object-cover rounded-l-[12px] w-[600px] h-[664px]" />
                        </div>
                        <div className="review_text_container flex flex-col space-y-8 justify-center items-center w-[600px]  ml-4 h-[664px] ">
                            <p className="text-3xl text-center font-gilroy font-bold">“After 765 days in the hospital, I <br /> thought I was going to die there - <br /> I had no where to go. I met Sam <br /> and we clicked - he got me, <br /> he understood, there is a light at the <br /> end of the tunnel. Thank you to <br /> everyone at Good Housing, we <br /> got there! </p>
                            <div className="reviewer_name">
                                <p className="font-gilroy-regular">Tenant Name, Property Name</p>
                            </div>
                            <div className="play_story pt-[16px]">
                                <button className="flex space-x-2 items-center justify-center px-6 py-4 border-2 border-[#fffff] rounded-[12px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM9.38965 7.69666C9.62853 7.56579 9.91959 7.57472 10.15 7.72L16 11.36C16.2182 11.4997 16.3501 11.7409 16.3501 12C16.3501 12.2591 16.2182 12.5003 16 12.64L10.15 16.28C9.91959 16.4253 9.62853 16.4342 9.38965 16.3033C9.15076 16.1725 9.00161 15.9224 9 15.65V8.35C9.00161 8.07762 9.15076 7.82752 9.38965 7.69666Z" fill="white" />
                                    </svg>
                                    <p className="font-gilroy font-medium text-[18px]">

                                    Play Tenants' Story
                                    </p>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review