
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { MdHeartBroken } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineAddToQueue } from "react-icons/md";
import { MdOutlinePausePresentation } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { MdBrowserNotSupported } from "react-icons/md";
import '../../Home/inHomePage/TopCommon/TopCommon.css';
import './PageAnime';
import { Link } from "react-router-dom";
import {useContext, useEffect, useRef, useState } from "react";
import ListEddBox from "./listEddBox/listEddBox";
import { contextChange } from "../../../context/ChangePA";





export default function PageAnime() {

useEffect(()=>{
    function toTopPage() {
        window.scrollTo({top:0})
    }
    toTopPage() 
},[])


    
    const [noneEpisodes,setNoneEpisodes] = useState(false)
    const [deleteAlert,setDeleteAlert] = useState(false)
    const [heart,setHeart] = useState(false)
    const episodesCardLength = useRef() 
    const [searchTerm,setSearchTerm] = useState('')
    const [menuAddBox,setMenuAddBox] = useState(false)

// data card  from localStorage
let AnimeCard = localStorage.getItem("anime/page");
let cardData = JSON.parse(AnimeCard);
// Favorite card  from localStorage
let FavoriteCard = localStorage.getItem("Favorite");
let FavoriteData = JSON.parse(FavoriteCard);
// Don't show me this again age-18
let DoNotShow= localStorage.getItem("age-18");
let DoNotShowData = JSON.parse(DoNotShow);

// start listEddBox 
// check if there is data card  in localStorage
let dataTCard1 = localStorage.getItem("typeCard1");
let TCardData1 = JSON.parse(dataTCard1);
let dataTCard2 = localStorage.getItem("typeCard2");
let TCardData2 = JSON.parse(dataTCard2);
let dataTCard3 = localStorage.getItem("typeCard3");
let TCardData3 = JSON.parse(dataTCard3);
let dataTCard4 = localStorage.getItem("typeCard4");
let TCardData4 = JSON.parse(dataTCard4);
let dataTCard5 = localStorage.getItem("typeCard5");
let TCardData5 = JSON.parse(dataTCard5);

//  check if there is typeCard in localStorage to add icon


let stateT1;
if (TCardData1 !== null) {
    for (let i = 0; i < TCardData1.length; i++) {
        if(TCardData1[i].title === cardData.title){
            stateT1 =true;
        }
        }
    }else{
        stateT1 =false;
    }
let stateT2;
if (TCardData2 !== null) {
    for (let i = 0; i < TCardData2.length; i++) {
        if(TCardData2[i].title === cardData.title){
            stateT2 =true;
        }
        }
    }else{
        stateT2 =false;
    }
let stateT3;
if (TCardData3 !== null) {
    for (let i = 0; i < TCardData3.length; i++) {
        if(TCardData3[i].title === cardData.title){
            stateT3 =true;
        }
        }
    }else{
        stateT3 =false;
    }
let stateT4;
if (TCardData4 !== null) {
    for (let i = 0; i < TCardData4.length; i++) {
        if(TCardData4[i].title === cardData.title){
            stateT4 =true;
        }
        }
    }else{
        stateT4 =false;
    }
let stateT5;
if (TCardData5 !== null) {
    for (let i = 0; i < TCardData5.length; i++) {
        if(TCardData5[i].title === cardData.title){
            stateT5 =true;
        }
        }
    }else{
        stateT5 =false;
    }

// End check if there is typeCard in localStorage

// end listEddBox 





// start Favorite
// start add red color if the card in FavoriteData

useEffect(()=>{
    if (localStorage.Favorite != null) {
        for (let i = 0; i < FavoriteData.length; i++) {
            if(FavoriteData[i].title === cardData.title){
                setHeart(true)
            }
            }
    }
    
},[])
// end add red color if the card in FavoriteData


// start to not remove the old date
    let FavoriteArray;
    if (localStorage.Favorite != null) {
        FavoriteArray = JSON.parse(localStorage.Favorite);
    }else{
        FavoriteArray = [];
    }
// and to not remove the old date


function addFavoriteCard() {
    FavoriteArray.push(cardData);
    localStorage.setItem("Favorite",JSON.stringify(FavoriteArray))

}

// get number of delateDataFavorite to remove the same card
let deleteNumber = 0
if (localStorage.Favorite != null) {
    for (let i = 0; i < FavoriteData.length; i++) {
        if(FavoriteData[i].title === cardData.title){
            deleteNumber=i;
        }
    }
}
function delateDataFavorite(el){
    FavoriteArray.splice(el,1);
    localStorage.Favorite = JSON.stringify(FavoriteArray);

};

// end Favorite











// start category spelt
function category() {
    return  cardData.category.map((el,i)=> <Link to={`/categoryName/${el.split(' ').join("-")}`} key={i}>{el}</Link>)
}
// end category spelt

let numFor = 0;
// start add episodes
const episodesNum = []
async function episodesCard() {
    for  (let i = 1; i <= cardData.Episodes; i++) {
        numFor=i
        episodesNum.unshift( 
            <Link  to={`episodes/${i}`} key={i}>
            <span className="title">
            {cardData.state === "مكتمل" &&  cardData.Episodes  === i ?` الحلقة ${i} الاخيرة `: `${i} الحلقة`}
            </span>
            <span className="date">2024,2,ابريل</span>
            </Link>
            
        )
    
}

}
episodesCard()
// end add episodes



//start show text if is no episodesCard
useEffect(()=>{
    
if(episodesCardLength.current.textContent.length === 0){
    setNoneEpisodes(true)
}else{
    setNoneEpisodes(false)
}

},[searchTerm])
//end show text if is no episodesCard



function fun18() {
    window.localStorage.removeItem("age-18")
    setDeleteAlert((prev)=> !prev)
}




// to Change data 
const contextChangePage = useContext(contextChange);



let menuRef = useRef();

useEffect(()=>{
    let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
            setMenuAddBox(false)
        }
    }

document.addEventListener("mousedown",handler);

return()=>{
    document.removeEventListener("mousedown",handler)
}

})





    return(
        <>
        <div className="container-PageAnime" style={{backgroundImage: `url('${cardData.backgroundCover}')`,}}>
        
        {cardData.age === true && 
                <div className="age-18" style={{
                    display: deleteAlert || DoNotShowData ? "none" : "flex"
                }}>
                <div className="card-age-18">
                    <div className="icon-18">
                        18+
                    </div>
                    <div className="title">
                    تحذير
                    </div>
                    <div className="text">
        تحذير: يرجى العلم أن هذا الأنمي قد يحتوي على مشاهد عنف او دموية أو لقطات فاحشة غير مناسبة لفئة عمرية معينة.و نحن نخلي مسؤوليتنا الكاملة عن ذلك، وأنت تتحمل المسؤولية كاملة إذا شاهدت هذا !
                    </div>
                    <div className="button">
                        <button onClick={()=>setDeleteAlert(true)}>اتحمل المسؤولية</button>
                        <Link to="/">لا اريد تحمل المسؤولي</Link>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="don't">لا تريني هذا مرة أخرى</label>
                        <input 
                        onClick={()=> window.localStorage.setItem("age-18",true)}
                        name="don't" id="don't"  type="checkbox"/>
                    </div>
                </div>
            </div>
        }

        <div className="content-anime">
        {cardData.age === true &&
        <div className="con-maine-icon-18">
        <div className="maine-icon-18"
        onClick={()=>  fun18()}>
                18+
        </div>
        <div className="title">
    قد يحتوي على مشاهد عنف او دموية أو لقطات فاحشة غير مناسبة لفئة عمرية معينة
        </div>
        </div>

        }
            <div className="col-1">
            <div  className="PageAnime-img" style={{backgroundImage:`url('${cardData.Cover}')`}}>
        <div className="box-b-anime">
        <span onClick={()=>{
            setHeart((prev)=> !prev);
            
        }}>{ heart ? <IoMdHeart onClick={()=> delateDataFavorite(deleteNumber)} fontSize={25}  className="heart f-heart icon-box"/> : <MdHeartBroken onClick={()=> addFavoriteCard()} fontSize={25} className="heart  icon-box"/>}</span>
        
        {stateT1 === false && stateT2 === false && stateT3 === false && stateT4 === false &&stateT5 === false 
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)}><MdAddBox fontSize={25} className="AddBox icon-box" /></span>
        :
        stateT1 === true
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)} > ارغب بمشاهدتها <MdOutlineAddToQueue fontSize={25} /></span>
        :
        stateT2 === true
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)} >اشاهدها حاليا <FaRegPlayCircle fontSize={25} /></span>
        :
        stateT3 === true
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}}  className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)} >تم مشاهدتها <FaCirclePlay fontSize={25} /> </span>
        :
        stateT4 === true
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)} >اكملها لاحقا <MdOutlinePausePresentation fontSize={25} /></span>
        :
        stateT5 === true
        ?
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)} >لا ارغب بمشاهدتها <MdBrowserNotSupported fontSize={25} /></span>
        :
        <span style={{animation: menuAddBox ? " stateColor 0.5s ease-in-out infinite alternate" :" none"}} className="state-box" onClick={()=> setMenuAddBox((prev)=> !prev)}><MdAddBox className="AddBox icon-box" fontSize={25}  /></span>
        }
        
































        </div>
        <div className="menu-AddBox" ref={menuRef}
        style={{display: menuAddBox ? "flex" : "none" }}
        >
            <ListEddBox/>
        </div>
        </div>
            </div>
            <div className="col-2">
        <div className="PageAnime-flag" style={{backgroundImage:`url('${cardData.flag}')`}}></div>
        { cardData.top === true && <span className="PageAnime-Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
            <div className="row-1">
            
            <div className="name">
            {cardData.title}
            <span></span>
            </div>
            
            </div>
            <div className="row-2">
            <div className="category">{category()}</div>
            {cardData.age === true &&
        <div className="row-2-con-maine-icon-18">
        <div className="maine-icon-18" onClick={()=> fun18()}>
                18+
        </div>
        <div className="title">
    قد يحتوي على مشاهد عنف او دموية أو لقطات فاحشة غير مناسبة لفئة عمرية معينة
        </div>
        </div>

        }
            </div>
            <div className="row-3">
                <div className="description">
                {cardData.description}
                </div>
                
            </div>
            <div className="row-4">
                <div className="cont-1">
                    <span> {cardData.Source} :النوع</span>
                    <span>بداية العرض: {cardData.Release}</span>
                    <span>عدد الحلقات: {cardData.Episodes}</span>
                </div>
                <div className="cont-2">
                    <span>مدة الحلقة: {cardData.EpisodesTime} دقيقة</span>
                    <span className="flex-state">
                    <span className="state">
                    <span style={{background:`${cardData.stateColor}`}}></span>
                    </span> 
                        حالة الأنمي: {cardData.state}
                    </span>
                    <span>لمصدر: {cardData.Type}</span>
                </div>
            </div>
            <div className="row-5">

        <a target="b_link" href={`${cardData.teller}`}>
            <FaRegCirclePlay color="#ffff"/> 
            العرض التشويقي
            </a>
            </div>
            <div className="rate">
            <span>التقيم</span>
            <span className="p_"></span>
            <span>{cardData.rating}</span>
        </div>
            </div>
        </div>
        </div>

        <div className="episodes">
            <div className="episodes-name">
                {cardData.title} :حلقات 
            </div>
            <div className="episodes-btn"
            style={{display:cardData.state === "لم يتم بثه بعد" ? "none" : "flex"}}
            >
                <Link  to={`/anime/${cardData.title.split(' ').join("-")}/episodes/${cardData.Episodes}`}>
                {cardData.state === "مكتمل" ? "الحلقة الاخيرة" : "الحلقه الجديده"}
                <span>{cardData.Episodes}</span>
                </Link>
                <Link  to={`/anime/${cardData.title.split(' ').join("-")}/episodes/${1}`}>
                الحلقه لاولة
                <span>{cardData.state === "لم يتم بثه بعد" ? "0" : "1"}</span>
                </Link>
            </div>
            <div className="episodes-search" 
            style={{display:cardData.state === "لم يتم بثه بعد" ? "none" : "flex"}}>
                <input onChange={(event)=>  setSearchTerm(event.target.value)} type="text"  placeholder={"البحث عن الحلقه مثل: 99"}/>
            </div>
            <div className="episodes-card" 
            ref={episodesCardLength}>
                
                {
                episodesNum.filter((el)=>{
                    if(searchTerm === ''){
                        return el;
                    }else if(el.key === searchTerm){
                        return el;
                    }
                })
                }
                {}
                { noneEpisodes && <div style={{
                            fontSize: "30px",
                            width: "100%",
                            color: "white",
                            position: "relative",
                            
                }} className="none-episodes">لايوجد حلقات</div>}
            </div>
        </div>
        <div className="episodes-comments">
        <div className="title">
        التعليقات
            </div>
            <div className="content-comments">
                التعليقات مغلقه في الوقت الحالي
            </div>
        </div>
        </>
        
    )

}







