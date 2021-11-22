import React from 'react'
import './trendsearch.scss'

function Trendsearch() {
    return (
        <div className="trend">
            <div className="container">
                <div className="trend-container">
                    <div className="trend-head">
                        <h3 className="trend-heading">Xu hướng tìm kiếm</h3>
                        <a href='.#' className="trend-load">
                            <svg viewBox="0 0 12 15" className="shopee-svg-icon icon-refresh"><path d="M12 7.51268255c0-1.71021918-.7226562-3.30538371-1.9648437-4.43447938-.20507817-.18525749-.52148442-.16965686-.7070313.03315134-.18554687.20475828-.16992188.52067106.03320313.70592856C10.3984375 4.75722109 11 6.08717488 11 7.51268255c0 2.59360495-1.98242187 4.72699125-4.515625 4.96880095l.68164063-.7878318c.1796875-.2086585.15625-.5245713-.05273438-.7039785-.20898438-.1794073-.52539062-.1560063-.70507813.0526521l-1.49609375 1.7336201c-.18164062.2106086-.15625.5284714.05664063.7078787l1.65429688 1.3982065c.21093749.1774572.52539062.1521062.70507812-.0585023.17773438-.2106085.15234375-.5245712-.05859375-.7039785l-.75195313-.6357257C9.58789062 13.2205634 12 10.6484094 12 7.51268255zM2.80273438 11.3523879C1.66796875 10.4085497 1 9.0161934 1 7.51463263c0-2.75741154 2.23828125-4.99220194 5-4.99220194h.01367188l-.7734375.75078037c-.19726563.19305781-.203125.50897059-.00976563.70592855.19335938.19695797.50976563.20280821.70703125.0097504l1.64257813-1.59516453c.19921875-.19305781.20117187-.51287074.00585937-.70982871L6.06054688.14723461c-.1953125-.19500789-.51171875-.19695797-.70703125-.00195008C5.15820313.34029242 5.15625.6562052 5.3515625.85121309l.66992188.67472729H6c-3.31445312 0-6 2.68135846-6 5.99064232 0 1.8018729.80273438 3.4750406 2.16210938 4.6060863.21289062.1755071.52734375.148206.70507812-.0643526.17773438-.2164587.1484375-.5304214-.06445312-.7059285z" fillRule="nonzero"></path></svg>
                            Xem thêm
                        </a>
                    </div>
                    <div className="trend-list">
                        <div className="trend-item">
                            <a href=".#" className="trend-link">
                                <h4>Tai-nghe Bluetooth</h4>
                                <p>6k+ sản phẩm</p>
                            </a>
                            <div className="trend-img">
                                <img src="https://cf.shopee.vn/file/f8187cd9f8bd7b3114b44c92d3cc47c3" alt="" />
                            </div>
                        </div>
                        <div className="trend-item">
                            <a href=".#" className="trend-link">
                                <h4>Váy Trắng</h4>
                                <p>6k+ sản phẩm</p>
                            </a>
                            <div className="trend-img">
                                <img src="https://cf.shopee.vn/file/bb7aa5c80938b962fdd6ecf79b59b60a" alt="" />
                            </div>
                        </div>
                        <div className="trend-item">
                            <a href=".#" className="trend-link">
                                <h4>Khẩu-trang 3d</h4>
                                <p>6k+ sản phẩm</p>
                            </a>
                            <div className="trend-img">
                                <img src="https://cf.shopee.vn/file/65054bae32fa4ff400b891b59799f1fa" alt="" />
                            </div>
                        </div>
                        <div className="trend-item">
                            <a href=".#" className="trend-link">
                                <h4>Son Nội-địa-trung</h4>
                                <p>6k+ sản phẩm</p>
                            </a>
                            <div className="trend-img">
                                <img src="	https://cf.shopee.vn/file/8f272e8c94d246a8823e321afc5aff55" alt="" />
                            </div>
                        </div>
                        <div className="trend-item hidden-tablet">
                            <a href=".#" className="trend-link">
                                <h4>Kệ Gỗ</h4>
                                <p>6k+ sản phẩm</p>
                            </a>
                            <div className="trend-img">
                                <img src="https://cf.shopee.vn/file/5f547399426b99013a166c7b09578eca" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trendsearch
