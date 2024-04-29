import HousingButton from "../Components/Housing_Button";
import NewsSection from "./NewsSection";
const News = () => {
    return (
        <>
        <div className="news_container p-28 flex flex-col space-y-14">
        <div className="title_container  flex items-center justify-between">
            <p className="text-6xl  font-gilroy-bold font-bold text-[#1C4075]">Good News</p>
            <HousingButton type_of_button="hollow" button_content="See All News" />
        </div>
        <div className="border-t-2 w-full border-[#1c40752c]"></div>
        <NewsSection />
        </div>
        </>
    )
}

export default News;