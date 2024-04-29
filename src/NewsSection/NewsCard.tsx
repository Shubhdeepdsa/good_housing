import React from "react";

interface NewsProps {
    category: string,
    date: string,
    title: string,
    content: string,
    img: string
}

const NewsCard: React.FC<NewsProps> = ({ category, date, title, content, img }) => {
    return (
        <div className="news_card_container flex justify-between items-center">
            <div className="news_text_section flex flex-col w-3/4 space-y-4">
                <div className="category_date flex flex-row space-x-3 justify-start items-center">
                    <p className={`font-gilroy-bold font-bold  px-2 ${category === "SDA NEWS" ? "bg-[#CC6373] text-white" : category === "PROPERTY NEWS" ? "bg-[#00B0B5] text-white" : category === "COMMUNITY NEWS" ? "bg-[#F5CF8C] text-[#1C4075]" : ""}`}>{category}</p>
                    <p className={`text-[#1C4075]`}>• {date}</p>
                </div>
                <div className="news_title">
                    <p className="text-[32px] text-[#1C4075] font-gilroy-bold font-bold">{title}</p>
                </div>
                <div className="news_content pt-[8px]">
                    <p className="text-xl text-[#1C4075]">
                        {content}
                    </p>
                </div>
                <div className="readmore pt-[24px]">
                    <a className="font-gilroy-bold font-bold text-[#00B0B5]" href="#">Read More</a>
                </div>
            </div>
            <div className="news_img_section">
                <img src={img} alt={title} />
            </div>
        </div>
    );
}

export default NewsCard;
