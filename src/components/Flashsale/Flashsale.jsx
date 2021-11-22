import React from 'react'
import './flashsale.scss'
import Slider from "react-slick"
import Coutdown from './coutdown'


function Flashsale() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                  arrows: false,
                  slidesToShow: 5,
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 567,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: true,
                    leftPadding: '40px',
                }
            },
          ]
      };

    return (
        <div className="flashsale">
            <div className="container">
                <div className="flashsale-container">
                    <div className="flashsale-content">
                        <div className="flashsale-content-heading">
                            <div className="flashsale-content-left">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png" alt="" />
                                <div className="flashsale-content-coutdown">
                                    <Coutdown/>
                                </div>
                            </div>
                            <a className="flashsale-content-right" href=".#">
                                <span>Xem tất cả</span>
                                <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                            </a>
                        </div>
                        <div className="flashsale-content-list">
                            <Slider {...settings}>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/77c1538381be3f75b271ad620a4e8c42_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>95%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/9010caff3c946ef06c2b88e17471e62f_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>95%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/2eb59063cfb6dee6f143d4d413478c33_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>95%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/de84cc03a96e836588e6202fcb9e7271_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>93%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/dcef18cbb2a5aabe1a9c270d534d7390_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 20</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>99%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/83302fb36a6b892f29717160b4d5d42f_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>90%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flashsale-content-item">
                                    <div className="flashsale-content-item-img">
                                        <img src="https://cf.shopee.vn/file/de5913553f87a3a435adab0f0f6872a4_tn" alt="" />
                                        <img className="overlay" src="https://cf.shopee.vn/file/be739c887481dafbea9b95119385a7a7_tn" alt="" />
                                    </div>
                                    <div className="flashsale-content-item-price">
                                        <span>đ</span> <span>11.350.000</span>
                                    </div>
                                    <div className="flashsale-content-item-progress">
                                        <div className="flashsale-content-item-cout">Đã bán 2</div>
                                        <div className="flashsale-content-item-wrapper">
                                            <div className="flashsale-content-item-sale">
                                                <div className="flashsale-content-item-bg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* sale */}
                                    <div className="flashsale-mask-sale">
                                        <div className="flashsale-mask-sale-content">
                                            <span>92%</span>
                                            <span>giảm</span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="flashsale-voucher">
                 <img src="https://cf.shopee.vn/file/73603dcfa0cf9b4de44bddc53dbefd0a" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Flashsale

