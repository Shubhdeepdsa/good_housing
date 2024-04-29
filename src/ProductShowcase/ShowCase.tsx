import React from "react";
import HousingButton from "../Components/Housing_Button";
import { useState } from "react";
import ProductCarousel from './ProductCarousel'
interface Product {
    productImg: string,
    productTitle : string, 
    productLocation : string, 
    bathCount : number,
    bedCount : number,
    carCuont : number
}
const ShowCaseSection = () => {
    const [productData , setProductData] = useState<Product[]>([]);
    return (
        <>
            <div className="show_case_section_container p-28 flex flex-col">
                <div className="title_section flex flex-col flex-start space-y-6">
                    <p className="text-6xl text-[#1C4075] font-bold"> Take a look at our homes</p>
                    <div className="subtitle flex flex-row justify-between items-center">
                        <p className="text-xl text-[#1C4075]">Designed for better living experiences.</p>
                        <HousingButton type_of_button="hollow" button_content="Explore All" />
                    </div>
                </div>
                <div className="product_section mt-14">
                    <ProductCarousel />
                </div>
            </div>
        </>
    )
}

export default ShowCaseSection;