
import { Link } from "react-router-dom"
import "./Footer.css"
import { IoMdHeart } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer(){


    return(
        <>
        <div className="end-footer">
        <div className='logo'>
                <Link to={"/"}>
                    <img className='img-logo' src={require('../../imgs/logo.png')} alt="logo" />
                </Link>
                <div className='name'>
                    <h3>ANIME</h3>
                </div>
            </div>
            <div className="footer-center">
                <div className="contact">
                    <span><FaFacebookF/></span>
                    <span><RiDiscordFill/></span>
                    <span><FaTelegramPlane/></span>
                </div>
                <h1 className="made">
        Made With&nbsp; 
        <IoMdHeart className="heart-footer"/>
        
        By&nbsp; 
        <a href="https://mohamed-magdy-1.github.io/my-profile/" rel="noreferrer" target="_blank">Mohamed Magdy</a>
        &nbsp;
        © 2024
                </h1>
            </div>
            <div className="Copy">
                <p >جميع الحقوق محفوظة لموقع  | A ANIME</p>
            </div>
        </div>
        </>
    )

}
