import React from "react";

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-7 col-xs-12">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-7 col-xs-12">
                    <p>Copyright &copy;2018, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
