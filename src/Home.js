import React from 'react';
import './Home.css';
import Product from "./Product"

function Home() {
    return (
        <div className ='home'>
            <div className='home__container'>

                <img
                 className="home__image" 
                 src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=" " 
                />

                <div className="home__row">
                    <Product title='The Lean Startup: How Constant Innovation Creates Radically Successful' 
                     price={29.99} 
                     image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg "
                     rating={5}
                    />

                    <Product title='Stand Mixer Kitchen Mixer , 7-Speed 5.5QT Tilt-Head Food Electric Mixer with Dough Hook&Wire Whip&Beater&Stainless Steel Bowl for Most Home Cooks(Black)' 
                     price={89.99} 
                     image="https://images-na.ssl-images-amazon.com/images/I/41plbNGXCxL._AC_.jpg "
                     rating={4}
                    />       
                    
                    <Product title='Utopia Bedding Comforter Duvet Insert - Quilted Comforter with Corner Tabs - Box Stitched Down Alternative Comforter (King, White)' 
                     price={279.99} 
                     image="https://images-na.ssl-images-amazon.com/images/I/712c0JZxCWL._AC_SL1500_.jpg "
                     rating={5}
                    /> 
                </div>

                <div className="home__row">
                   <Product title='LaView Security Cameras for Home + 2X 32GB SD Cards,PT Home Security Camera System with Motion Detection,Two-Way Audio,Night Vision,Indoor WiFi Camera for Baby/pet,Alexa,USA Cloud Service'
                     price={39.89} 
                     image="https://images-na.ssl-images-amazon.com/images/I/710qtVAjaQL._AC_SL1500_.jpg "
                     rating={3}/>

                   <Product title='Rawlings OLB3BAG12 Official League Recreational Use Baseballs, Bag of 12'
                     price={25.99}
                     image="https://images-na.ssl-images-amazon.com/images/I/71Rt7dMxzJL._AC_SL1391_.jpg"
                     rating={5}         
                    />
                </div>

                <div className="home__row">
                   <Product tittle='RUNMUS K8 Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED Light, Compatible with PS5, PS4, Xbox One, Sega Dreamcast, PC, PS2, Laptop'
                      price={18.57}
                      image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
                      rating={4}/>

                   <Product title='Orzly Carry Case Compatible with Nintendo Switch - Black Protective Hard Portable Travel Carry Case Shell Pouch for Nintendo Switch Console & Accessories'
                      price={12.96}
                      image="https://images-na.ssl-images-amazon.com/images/I/71k3hkb9JzL._SL1500_.jpg"
                      rating={3}
                    />

                   <Product title='Garmin Forerunner 235, GPS Running Watch, Black/Gray'
                      price={165.00}
                      image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg"
                      rating={5}
                    />          

                    <Product title='Mkeke Compatible with iPhone Xr Case,Clear Anti-Scratch Shock Absorption Cases for 6.1 Inch'
                      price={8.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
                      rating={4}
                    />   
                
                </div>
                <div className="home__row">
                    <Product title='Acer Aspire 5 A515-55-56VK, 15.6" Full HD IPS Display, 10th Gen Intel Core i5-1035G1, 8GB DDR4, 256GB NVMe SSD, Intel Wireless WiFi 6 AX201, Fingerprint Reader, Backlit Keyboard, Windows 10 Home'
                      price={549.99}
                      image="https://images-na.ssl-images-amazon.com/images/I/71S-XwHaGzL._AC_SL1500_.jpg"
                      rating={5}
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;
