import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
import { faBarsStaggered} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'
import { FaRandom } from "react-icons/fa";
import SideBar from '../SideBar/SideBar'
import Search from '../Search/Search'
import { data } from "../../Data/Data";
import Headroom from 'react-headroom'
import { contextChange } from '../../context/ChangePA'
export default function Header(){

// to Change data when <span onClick={()=> contextTest.setChangePageAnime((prev)=>!prev)}
const contextTest = useContext(contextChange);

    const [onClickBars,setOnClickBars] = useState(false)

    // get random  card Number from data
let randomNumber = Math.floor(Math.random() * data.length)
// card random data
let dataPage = data[randomNumber].page;



let sidRef = useRef();

useEffect(()=>{
    let handler = (e)=>{
        if(!sidRef.current.contains(e.target)){
            setOnClickBars(false)
        }
    }

document.addEventListener("mousedown",handler);

return()=>{
    document.removeEventListener("mousedown",handler)
}

})

    return(
        <Headroom className='Headroom-header'>
        <div className='header'>
            <div className='logo'>
                <Link to={"/"}>
                    <img className='img-logo' src={require('../../imgs/logo.png')} alt="logo" />
                </Link>
                <div className='name'>
                    <h3>ANIME</h3>
                </div>
            </div>
            <div className='links' ref={sidRef}>
                <ul>
                    <Search/>
                    <li><Link to='/'>الرئيسية</Link></li>
                    <li><Link to='/animeList'>قائمة الانمي</Link></li>
                    <li><Link to='/favorite'>المفضلة</Link></li>
                    <li className='Surprised-me'
                    >
                    <Link to={`/anime/${dataPage.title.split(' ').join("-")}`}
                    onClick={()=> {
                        localStorage.setItem("anime/page",JSON.stringify(dataPage))
                    }}
                    >
                    <span onClick={()=> contextTest.setChangePA((prev)=>!prev)}
                    ><FaRandom className='random' />فاجئني</span>
                    
                    </Link></li>
                    <FontAwesomeIcon className='icon' onClick={()=> setOnClickBars((prev)=> !prev)}  icon={faBarsStaggered} />
                </ul>
                <SideBar fixedRight={onClickBars}/>
            </div>
        </div>
        </Headroom>
    )

}

