import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { WindowSize } from "../../context/WindowContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa6";
import './Search.css'
import { Link } from "react-router-dom";
import {data} from '../../Data/Data'

export default function Search(){
    const noneSearch= useRef();
    const [searchTerm,setSearchTerm] = useState();
    const [onClickSearch,setOnClickSearch] = useState(true);
    const windowSizeWidth = useContext(WindowSize);
    const SizeWidth = windowSizeWidth.windowSize;



    // let showDataTopCard = [];
    // showDataTopCard.push(data.map((el,id) => {
    //     return (
    //         <Link key={id} className="card-output">
    //         <div className="img-Search">
    //             <img src={el.page.Cover} alt=""/>
    //         </div>
    //         <div className="content-Search">
    //             <h2 className="title">{el.page.title}</h2>
    //             <div className="more-content">
    //                 <span>الحلقات {el.page.Episodes}</span>
    //                 <span className="star">{el.page.rating} <FaStar color='gold' /></span>
    //             </div>
    //         </div>
    //     </Link>);}))
    
// useEffect(()=>{
//         function SearchFun() {
//                 let searchBar =  inputValue.current.value.toUpperCase();
//                 let title =  titleValue.current.textContent.length;
//                 for (let i = 0; i < title; i++) {
//                     console.log(titleValue[i]);
//                 }
//         }
//         SearchFun()
// },[inputValueChange])






    return(
        <>
        <div className='parent-Search'  style={{width: onClickSearch && SizeWidth <= "999" ? "33px" : '150px'}}>
        <FontAwesomeIcon onClick={()=>{SizeWidth <= "999" && setOnClickSearch((prev)=> !prev)}}  className='icon-Search' icon={faMagnifyingGlass}/>
            <input onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())} className='input-Search' type='text' placeholder='ابحث هناء'/>
        </div>
        <div className="Search-anime-cards" ref={noneSearch}>
            {
            data.filter((el)=>{
                if (searchTerm === "") {
                    noneSearch.current.style.display = "none";
                    return '';
                }else if(el.page.title.toLowerCase().includes(searchTerm)){
                    noneSearch.current.style.display = "block";
                    return el;
                }
            })
            .map((el,id)=>{
                return(
                <Link key={id} className="card-output"
                onClick={()=> {
                    window.location.pathname=`${`/anime/${el.page.title.split(' ').join("-")}`}`
                    localStorage.setItem("anime/page",JSON.stringify(el.page))
                }}
                >
                    
            <div className="img-Search">
                <img src={el.page.Cover} alt=""/>
            </div>
            <div className="content-Search">
                <h2 className="title">{el.page.title}</h2>
                <div className="more-content">
                    <span>الحلقات {el.page.Episodes}</span>
                    <span className="star">{el.page.rating} <FaStar color='gold' /></span>
                </div>
            </div>
                </Link>
                )

                
            })
            }
            <span className="none-cards">غير موجود</span>
        </div>
        </>
    );

}