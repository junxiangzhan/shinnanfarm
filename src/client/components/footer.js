import React from "react";

export default class Footer extends React.Component {
    render () {
        return <footer>
            <div className="container">
                <div>
                    <img src="/images/brand_white.svg" alt="brand" />
                </div>
            </div>
            <div className="copyright">Copyright &copy; 2021, All rights reserved.</div>
        </footer>
    }
}