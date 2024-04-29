import React from "react";
import StoryImg from './Images/story_img1.svg'
import HousingButton from "../Components/Housing_Button";
const Story = () => {
    return (
        <>
            <div className="story_container flex bg-[#F6F7F9] items-center justify-center p-28 space-x-28">
                <div className="story_text_section flex flex-col space-y-6">
                    <p className="text-[#1C4075] text-5xl">We believe that <br /> everybody has the right <br /> to have a place that <br /> feels like home</p>
                    <p className="text-[#1C4075] text-xl ">Good Housing was born out of a family need for <br />specialty housing, and our lived experience means we <br /> understand the challenges and requirements in finding <br /> the right home.</p>
                    <div className="story_button_container w-38 pt-8 ">
                        <HousingButton type_of_button="hollow" button_content="Our Story" />
                    </div>
                </div>
                <div className="story_image">
                    <img src={StoryImg} />
                </div>
            </div>
        </>
    )
}

export default Story