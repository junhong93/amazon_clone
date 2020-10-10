import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy-Con"
                    price={415.00}
                    rating={5}
                    image="https://i5.walmartimages.ca/images/Enlarge/308/070/6000200308070.jpg"
                />
                <Product
                    id="11254177"
                    title="PlayStation 5 Console - PlayStation 5 Edition"
                    price={629.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._AC_SX522_.jpg"
                />  
            </div>

            <div className="home__row">
                <Product
                    id="12411245"
                    title="iRobot Roomba 690 Robot Vacuum-Wi-Fi Connectivity, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"
                    price={643.25}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41TRoGy5I7L._AC_SY450_.jpg"
                />
                <Product
                    id="12411341"
                    title="Samsung Galaxy Book Ion 13 (i5/256GB) - Aura Silver"
                    price={1699.98}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61Z-rOEsOGL._AC_UL320_.jpg"
                />  
                <Product
                    id="12948788"
                    title='LG Ultra PC High Performance Laptop - 17" IPS WQXGA (2560 x 1600) Display'
                    price={2,117.71}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/8182Y3AdSfL._AC_UL320_.jpg"
                />  
            </div>
            <div className="home__row">
                 <Product
                    id="11454778"
                    title='LG 65" 4K UHD Smart OLED TV (OLED65CXPUA)'
                    price={2,897.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/A1Ik70D2wfL._AC_SL1500_.jpg"
                /> 
            </div>
            {/* product */}
        </div>
    );
}

export default Home;
