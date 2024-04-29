import nwp1 from './News Images/pic1.svg'
import nwp2 from './News Images/pic2.svg'
import nwp3 from './News Images/pic3.svg'
import NewsCard from './NewsCard'
const data = [
    {
        category: "SDA NEWS",
        date: "23, Oct 2020",
        title: "Understanding the steps for SDA approval",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper proin metus tristique facilisi nec eget morbi nulla. Sit justo massa quisque malesuada. Parturient arcu blandit egestas risus faucibus dolor lectus.",
        img: nwp1
    },
    {
        category: "PROPERTY NEWS",
        date: "23, Oct 2020",
        title: "Understanding the steps for SDA approval",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper proin metus tristique facilisi nec eget morbi nulla. Sit justo massa quisque malesuada. Parturient arcu blandit egestas risus faucibus dolor lectus.",
        img: nwp2
    },
    {
        category: "COMMUNITY NEWS",
        date: "23, Oct 2020",
        title: "Understanding the steps for SDA approval",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper proin metus tristique facilisi nec eget morbi nulla. Sit justo massa quisque malesuada. Parturient arcu blandit egestas risus faucibus dolor lectus.",
        img: nwp3
    }
]
const NewsSection = () => {
    return (
        <>
        <div className="news_container flex flex-col space-y-12">

            {data.map((ele , index) => {
                return (
                    <>
                    <NewsCard category={ele.category} date={ele.date} title={ele.title} content={ele.content} img={ele.img} />
        <div className="border-t-2 w-full mt-12 border-[#1c40752c]"></div>

                    </>
                )
            })}
        </div>

        </>
    )
}
export default NewsSection;