import React from "react";
import ReviewBG from './ReviewImages/Review_BG.svg'
import ReviewImage from './ReviewImages/Review_1.svg'
const Review = () => {
    return (
        <>
            <div className="review_container flex p-28 items-center justify-center  ">
                <div className="bg_container relative  ">
                    <img src={ReviewBG} className="z-1" />
                    
                <div className="review_content flex items-center justify-center absolute top-0 left-0 z-10">
                    <div className="review_image_container ">
                        <img src={ReviewImage} className="object-cover rounde-l-[12px] w-[664px] h-[664px]" />
                    </div>
                    {/* <div className="review_text_container">
                        <p>“After 765 days in the hospital, I thought I was going to die there - I had no where to go. I met Sam and we clicked - he got me, he understood, there is a light at the end of the tunnel. Thank you to everyone at Good Housing, we got there! </p>
                    </div> */}
                    
                </div>
                </div>
            </div>
        </>
    )
}

export default Review