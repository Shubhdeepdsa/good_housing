import React from "react";

interface Props {
    type_of_button: string;
    button_content: string;
}

const HousingButton: React.FC<Props> = ({ type_of_button, button_content }) => {
        return (
            <>
                <button className={`border-2 ${type_of_button == "hollow" && "border-[#00B0B5]"}  rounded-lg`}>

                <p className="text-black text-[18px]">{button_content}</p>
                </button>
            </>
        )
}
export default HousingButton;