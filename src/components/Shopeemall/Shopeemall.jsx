import React from 'react'
import './shopeemall.scss'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Shopeemall() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <div className="mall">
            <div className="container">
                <div className="mall-container">
                    <div className="mall-head">
                        <div className="mall-left">
                            <h3 className="mall-heading">SHOPEE MALL</h3>
                            <ul className="mall-list">
                                <li className="mall-item">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png" alt="" />
                                    <span>7 Ngày Miễn Phí Trả Hàng</span>
                                </li>
                                <li className="mall-item">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png" alt="" />
                                    <span>Hàng Chính Hãng 100%</span>
                                </li>
                                <li className="mall-item">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="" />
                                    <span>Miễn Phí Vận Chuyển</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mall-right">
                            <a href=".#">
                                <span>Xem tất cả</span>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="mall-main">
                        <div className="mall-banner">
                            <img className="mall-banner-mobile" src="https://cf.shopee.sg/file/6bfb682c1cc354c0b0151e06050280f6" alt="" />
                            <Slider {...settings} className="slider">
                            <img src="https://cf.shopee.sg/file/3a154597ecb4aaccb4b19905e5baa736" alt="" />
                            <img src="https://cf.shopee.sg/file/60aa85d10869759abd569d4171f63894" alt="" />
                            <img src="https://cf.shopee.sg/file/070e42f700cec234c31b56bb605f08b9" alt="" />
                            <img src="https://cf.shopee.sg/file/703a3c69811b1357863a07e4d92092a0" alt="" />
                            <img src="https://cf.shopee.sg/file/b338c1bc570db4f1c17869984bd972ec" alt="" />
                            </Slider>
                        </div>
                        <ul className="mall-listp">
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/8fb0d875330665ec0dbca02f4bd66682_xhdpi")` }}>
                                <span>Chốt mục tiêu săn ngay deal</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/90c90357ba84dc77122e02e7a2cc3bdb_xhdpi")` }}>
                                <span>Săn deal siêu hot</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F7d5ddd21cc10e484de60e12d6c58734e_xhdpi")` }}>
                                <span>Giảm đến 50%</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/3af8a8072e21f02c9f13605eeacc42d7_xhdpi")`}}>
                                <span>Da khỏe sạch mụn</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/ae84a92ed8e4d399ae927c78a1410fe8_xhdpi")`}}>
                                <span>Mua 1 tặng 1</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/90b38589a9c10c286313ef54d6c6de02_xhdpi")`}}>
                                <span>Da sáng rạng ngời</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/cd87b35a9bc32ddf59024a8339aef4a6_xhdpi")`}}>
                                <span>Giảm đến 50%</span>
                            </li>
                            <li className="mall-product" style={{backgroundImage: `url("https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fea507ee06252bb4c0d90eed99c1db288_xhdpi")`}}>
                                <span>Deli giảm tới 50%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopeemall
