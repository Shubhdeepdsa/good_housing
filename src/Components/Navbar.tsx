import logo from "./Logo.svg"
import HousingButton from "./Housing_Button";
function Navbar() {
    return (
        <div className=" w-full  h-[88px] flex flex-row justify-between">
            <div className="nav_bar_left flex flex-row justify-around items-center space-x-12" >
                <div className="logo_container   w-[140px] mt-3 ml-10 ">
                    <img src={logo} className="h-[64px] w-[130.46px] " />
                </div>
                <div className="nav_links flex flex-row space-x-8 mt-8 ">

                    {/* Our Home */}
                    <div className="our_homes">
                        <a href="#">
                            <p className="font-gilroy-medium text-[#1C4075] text-[18px]"> Our Homes</p>
                        </a>
                    </div>
                    {/* About */}
                    <div className="about_us flex flex-row items-center">
                        <a href="#">
                            <p className="font-gilroy-medium text-[#1C4075] text-[18px]"> About</p>

                        </a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6 12.15C10.4829 12.2672 10.324 12.3332 10.1583 12.3333H9.84162C9.67628 12.3314 9.51806 12.2657 9.39996 12.15L5.12496 7.86664C5.04608 7.78841 5.00171 7.68191 5.00171 7.57081C5.00171 7.45971 5.04608 7.35321 5.12496 7.27497L5.71662 6.68331C5.79343 6.60492 5.89855 6.56075 6.00829 6.56075C6.11803 6.56075 6.22316 6.60492 6.29996 6.68331L9.99996 10.3916L13.7 6.68331C13.7782 6.60443 13.8847 6.56006 13.9958 6.56006C14.1069 6.56006 14.2134 6.60443 14.2916 6.68331L14.875 7.27497C14.9538 7.35321 14.9982 7.45971 14.9982 7.57081C14.9982 7.68191 14.9538 7.78841 14.875 7.86664L10.6 12.15Z" fill="#1C4075" />
                        </svg>
                    </div>
                    {/* Good News */}
                    <div className="good_news">
                        <a href="#">
                            <p className="font-gilroy-medium text-[#1C4075] text-[18px]"> Good News</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="nav_bar_right flex flex-row items-center space-x-4 mr-10">
                <div className="collaborate">
                    <HousingButton type_of_button="hollow" button_content="Collaborate With Us" />
                </div>
                <div className="enquire">
                    <HousingButton type_of_button="solid " button_content="Enquire Now" />

                </div>
            </div>
        </div>
    )
}

export default Navbar;