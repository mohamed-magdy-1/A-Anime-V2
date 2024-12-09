import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideBar.css'
import {faHouse,faHeart , faCalendarDays, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FaRandom } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useContext, useEffect, useRef} from 'react'
import { data } from "../../Data/Data";
import { contextChange } from '../../context/ChangePA';
export default function SideBar({fixedRight}){


// to Change data when <span onClick={()=> contextTest.setChangePageAnime((prev)=>!prev)}
const contextTest = useContext(contextChange);




    // get random  card Number from data
    let randomNumber = Math.floor(Math.random() * data.length)
// card random data
let dataPage = data[randomNumber].page;




    return(
        <div className='sideBar' style={{right:fixedRight ? "0px" : "-300px"}}>
            <div className='links'>
                <div className='sign'>
                    <div className='sign-img'>
                        <img src={require('../../imgs/logo.png')} alt='sing-logo'/>
                    </div>
                    <div className='sign-button'>
                    <div><Link  to='/notAvailable'>تسجيل دخول </Link></div>
                        <div><Link   to='/notAvailable'>تسجيل</Link></div>
                        
                    </div>
                </div>
                
                <ul className='ul-675px'>
                    <li style={{backgroundColor:"#16151d"}}>
                    <Link to={`/anime/${dataPage.title.split(' ').join("-")}`}
                    onClick={()=> {localStorage.setItem("anime/page",JSON.stringify(dataPage))}}
                    >
                    <span onClick={()=> contextTest.setChangePA((prev)=>!prev)}
                    ><FaRandom className='random' />فاجئني</span>
                    </Link>
                    </li>
                    <li><Link to='/'>
                    <FontAwesomeIcon className='icon-menu' icon={faHouse} />
                        الرئيسية
                        </Link></li>
                    <li><Link to='/animeList'>
                    <FontAwesomeIcon className='icon-menu' icon={faClipboard} />
                        قائمة الانمي
                    </Link></li>
                    <li><Link to='/favorite'>
                    <FontAwesomeIcon className='icon-menu' icon={faHeart} />
                        المفضلة</Link></li>
                </ul>
                <ul>
                    <li><Link to='/episodeTime'>
                    <FontAwesomeIcon className='icon-menu' icon={faCalendarDays} />
                        موعد الحلقات
                    </Link></li>
                    <li><Link to='/myList/typeCard2'>
                    <MdOutlineMenuBook  className='icon-menu'/>
                    قائمتي
                    </Link></li>
                </ul>
            </div>
        </div>
    )

}