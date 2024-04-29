import React from "react";

interface Props {
    type_of_button: string;
    button_content: string;
}

const HousingButton: React.FC<Props> = ({ type_of_button, button_content }) => {
    return (
        <>
            <button className={` ${type_of_button == "hollow" ? "border-[#00B0B5] border-2" :  "bg-[#00B0B5]"}  rounded-lg px-8 py-3.5`}>

                <p className={` text-[18px] ${type_of_button == "hollow" ? "text-[#00B0B5]" : "text-[#FFFFFF]"} font-bold `} >{button_content}</p>
            </button>
        </>
    )
}
export default HousingButton;