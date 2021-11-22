import React from 'react'
import './hero.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,

        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
              }
            },
          ]
      };
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-container">
                    <div className="hero-slider">
                        <Slider {...settings} className="hero-slider-left">
                                <img src="https://cf.shopee.sg/file/cc96df15e9e0ecf15e4e6af098a34e86_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/cc96df15e9e0ecf15e4e6af098a34e86_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/311205e065170ff5411c99dc076616ae_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/21204006070a1853c94de3bc7aac7ef9_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/75e4697902a688cacf4ee548cabb0225_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/e17765d5850cde0fe138260642cc9f69_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/6707e24b58e466d8b7002a49c766acd2_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/1d88866da151daacd71ab49a0e6fe18a_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/3010a8258d6580aafa621c3ebf670aa5_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/d9b86cc2884ff7774617d02a56fecab6_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/97ce2af302ce2765f351f51817344206_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/492b0738137f715c89ddf4692ab0c9f0_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/17291af69a2e1289d4c5f6c6832a6860_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/dccc97148066cf95f98f0f135fad5f99_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/8e6f1eaee9064f31e972063334617382_xxhdpi" alt="" />
                                <img src="https://cf.shopee.sg/file/8e6f1eaee9064f31e972063334617382_xxhdpi" alt="" />
                        </Slider>
                        <div className="hero-side">
                            <img src="https://cf.shopee.sg/file/b4f12530676efc17419261902609ad6c_xhdpi" alt="" />
                            <img src="https://cf.shopee.sg/file/c710d0098dccb9d5ac3ba7e1263b0b5e_xhdpi" alt="" />
                        </div>
                    </div>
                    <div className="hero-service">
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi" alt="" />
                            <span>Tech Zone - Siêu Thị Điện Tử</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi" alt="" />
                            <span>Gì Cũng Rẻ - Từ 1K</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi" alt="" />
                            <span>Hoàn Xu 20% - Đơn Từ 0Đ</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi" alt="" />
                            <span>Nạp Thẻ, Hóa Đơn & E-voucher</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/698f220a98642d9eebf8177db6a08700_xhdpi" alt="" />
                            <span>Freeship Xtra Đến 70K Mỗi Ngày</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/7971053d6c5db79f83079c7a3d7e6408_xhdpi" alt="" />
                            <span>Hàng Hiệu -50% - Voucher -50%</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="	https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi" alt="" />
                            <span>Hàng Quốc Tế - Deal Đồng Giá</span>
                        </div>
                        <div className="hero-service-item">
                            <img src="https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi" alt="" />
                            <span>Shopee Premium</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Hero;
