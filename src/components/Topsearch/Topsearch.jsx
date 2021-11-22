import React from 'react'
import './topsearch.scss'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Topsearch() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,

        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 567,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
          ]
      };
    return (
        <div className="top">
            <div className="container">
                <div className="top-container">
                    <div className="top-head">
                        <h3 className="top-heading">Tìm kiếm hàng đầu</h3>
                        <a href=".#" className="top-load"><span>Xem tất cả</span> <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" className="shopee-svg-icon icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg></a>
                    </div>
                    <div className="top-list">
                        <Slider {...settings}>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 165k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Ốp Lưng Iphone</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/9ec433bca2d7e0f8f6fc2ce1c5097882_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                        Bán 86k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Quần Ống Rộng Nữ</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/362669996dc2f2f98c47cdc37f6da6d3_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 112k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Bông Tẩy Trang 3 Lớp Cotton Pads</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/b8d1510d2b41cb4dd92d564d2cedbcfe_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 44k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Tất Nữ Cổ Ngắn</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/7452230b36bbe8c16d4780d2e2ef123c_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 71k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Tai Nghe Nhét Tai</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/8fc5ceae001ec4a6b25731c87413706b_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 59k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Mắt Kính Gọng Tròn</div>
                                </a>
                            </div>
                            <div className="padding">
                                <a href=".#" className="top-item">
                                    <div className="top-item-img">
                                        <img src="https://cf.shopee.vn/file/9a67b555ee38eeacc8f483cad33d535c_tn" alt="" />
                                        <img className="top-item-label" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/06720e49514cbd94b7552496b4de454a.png" alt="" />
                                        <div className="top-item-cout">
                                            Bán 50k+ / tháng
                                        </div>
                                    </div>
                                    <div className="top-item-name">Kẹp Tóc Càng Cua Đơn Giản Cho Nữ</div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topsearch
