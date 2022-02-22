import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    render () {
        return <footer>
            <div className="container">
                <img src="/images/brand_white.svg" alt="brand" />
                <div>
                    <div style={{ padding: "1rem"}}>
                        <h4>網站導覽</h4>
                        <ul>
                            <li><Link to="/">首頁 - Home</Link></li>
                            <li><Link to="/news">最新消息 - News</Link></li>
                            <li><Link to="/market">線上商店 - Market</Link></li>
                        </ul>
                    </div>
                    <div style={{ padding: "1rem"}}>
                        <h4>專題介紹</h4>
                        <ul>
                            <li><a href="/AIweb" target="_blank">專題介紹網站</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={{ padding: "1rem"}}>
                        <h4>相關資訊</h4>
                        <ul>
                            <li>地址: 263宜蘭縣壯圍鄉新南路二段15號</li>
                            <li>電話: <a href="tel:+88639254086">03 925 4086</a></li>
                            <li>電子郵件: <a href="mailto:kotyosis588696@gmail.com">kotyosis588696@gmail.com</a></li>
                        </ul>
                    </div>
                    <div style={{ padding: "1rem"}}>
                        <h4>相關連結</h4>
                        <ul>
                            <li><a href="https://www.tanosecure.com.tw/">天龍安全科技官分網站</a></li>
                            <li><a href="https://www.facebook.com/ProfessorPlanted/">博士種的 Facebook 粉絲專頁</a></li>
                            <li><a href="https://www.facebook.com/新南農園-1234272356657626/">新南農園 Facebook 粉絲專頁</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">Copyright &copy; 2021, All rights reserved.</div>
        </footer>
    }
}