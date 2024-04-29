import p1 from "./ProductImgs/p_1.svg"
import p2 from "./ProductImgs/p_2.svg"
import p3 from "./ProductImgs/p_3.svg"
import ProductCard from "./ProductCard"
const data = [
        {
           "productImg": p1,
           "productTitle" : "Oak Tree", 
           "productLocation" : "Mount Collah", 
           "bathCount" : 2,
           "bedCount" : 2,
           "carCuont" : 1
       },
       {
           "productImg": p2,
           "productTitle" : "Oak Tree", 
           "productLocation" : "Mount Collah", 
           "bathCount" : 2,
           "bedCount" : 2,
           "carCuont" : 1
       },
       {
           "productImg": p3,
           "productTitle" : "Oak Tree", 
           "productLocation" : "Mount Collah", 
           "bathCount" : 2,
           "bedCount" : 2,
           "carCuont" : 1
       }
]
const ProductCarousel = () => {
return (
    <>
        <div className="carousel_container flex flex-row space-x-6 justify-center">
            {
                data.map((ele, index) => {
                    return (
                        <>
                            <ProductCard img={ele.productImg} title={ele.productTitle} location={ele.productLocation} bathCount={ele.bathCount} carCount={ele.carCuont} bedCount={ele.bedCount} />
                        </>
                    )
                })
            }
        </div>
    </>
)
}

export default ProductCarousel
