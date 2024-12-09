
import '../../Home/inHomePage/TopCommon/TopCommon.css';
import '../PageAnime/pageAnime.css';
import './PageEpisodes.css';
import { Link } from "react-router-dom";
import {useEffect, useRef, useState } from "react";




export default function PageEpisodes() {
    // data card  from localStorage
let AnimeCard = localStorage.getItem("anime/page");
let cardData = JSON.parse(AnimeCard);


useEffect(()=>{
    function toTopPage() {
        window.scrollTo({top:0})
    }
    toTopPage() 
},[])


    const [noneEpisodes,setNoneEpisodes] = useState(false)
    const episodesCardLength = useRef() 
    const episodesServers = useRef() 
    const [searchTerm,setSearchTerm] = useState('')
    const [videoDate,setVideoDate] = useState(cardData.EpisodeData.video[0] !== undefined  && cardData.EpisodeData.video[0].Server)







let numFor = 0;
// start add episodes
const episodesNum = []
async function episodesCard() {
    for  (let i = 1; i <= cardData.Episodes; i++) {
        numFor=i
        episodesNum.unshift( 
            <Link 
            onClick={()=> window.location.pathname=`${`/anime/${cardData.title.split(' ').join("-")}/episodes/${i}`}`}
            key={i}>
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


let episodesNumber  = window.location.pathname.split('/').slice(-1)[0];




//start show text if is no episodesCard
useEffect(()=>{
    
if(episodesCardLength.current.textContent.length === 0){
    setNoneEpisodes(true)
}else{
    setNoneEpisodes(false)
}

},[searchTerm])
//end show text if is no episodesCard




// start add Server data video into div Server
const EpisodeData = []
async function episodesData() {
    try{
        for  (let i = 0; i < cardData.EpisodeData.video.length; i++) {
            EpisodeData.unshift(
                <Link 
                onClick={()=> setVideoDate(cardData.EpisodeData.video[i].Server)}
                key={i}>
                        { cardData.EpisodeData.video[i].imgServer === "" ? cardData.EpisodeData.video[i].name :<img src={`${cardData.EpisodeData.video[i].imgServer}`} alt=""/>}
                </Link>
            )
        
    }
    }catch(err){
        console.log(err);
    }

}
episodesData()
// end add Server data video into div Server

// start add Download data srs into div Download
const EpisodeDataDownload = []
async function episodesDataDownload() {
    try{
        for  (let i = 0; i < cardData.EpisodeData.download.length; i++) {
            EpisodeDataDownload.unshift(
                cardData.EpisodeData.download[i].imgServerDownload === "" ?
                    <a download key={i} href={`${cardData.EpisodeData.download[i].ServerDownload}`}>
                    {cardData.EpisodeData.download[i].name }
                    </a>
                :
                <a target="b-link" key={i} href={`${cardData.EpisodeData.download[i].ServerDownload}`}>
                {<img src={`${cardData.EpisodeData.download[i].imgServerDownload}`} alt=""/>}
                </a>
                
    
            )
        
    }
    }catch(err){
        console.log(err);
    }

}
episodesDataDownload()
// end add Download data srs into div Download








    return(
        <>
        <div className="container-video">
        <div className="title-episodes">
            <div className="title-name">
                <h1 className="text">
                    {cardData.state === "مكتمل" &&  cardData.Episodes  == episodesNumber ? ` ${cardData.title} الحلقة ${episodesNumber} الاخيرة `: `${cardData.title} ${episodesNumber} الحلقة`}
                    
                </h1>
            </div>
        </div>
        <div className="Servers">
            <div className="Servers-name">
            السيرفرات
            </div>
            <div className="Servers-card">
                    <div className="Links-Servers" ref={episodesServers}>
                        {EpisodeData}
                    </div>
            </div>
        </div>
        <div className="content-video">
            <div className="video mega">
            <iframe title="video" width="640" height="360" frameBorder="0" src={videoDate} allowFullScreen ></iframe>
            </div>
        <div className="episodes">
            <div className="episodes-name">
                {cardData.title} :حلقات 
            </div>
            <div className="episodes-search">
                <input onChange={(event)=>  setSearchTerm(event.target.value)} type="text"  placeholder={"البحث عن الحلقه مثل: 99"}/>
            </div>
            <div className="episodes-card" ref={episodesCardLength}>
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
                            top:" 0",
                }} className="none-episodes">لايوجد حلقات</div>}
            </div>
        </div>
        </div>
        <div className="Download">
            <div className="Download-name">
            تحميل
            </div>
            <div className="Download-card">
                <div className="SD">
                    <h3>SD</h3>
                    <div className="Links-Download">
                    {EpisodeDataDownload}
                    </div>
                </div>
                <div className="HD">
                    <h3>HD</h3>
                    <div className="Links-Download">
                    {EpisodeDataDownload}
                    </div>
                </div>
                <div className="FHD">
                    <h3>FHD</h3>
                    <div className="Links-Download">
                    {EpisodeDataDownload}
                    </div>
                </div>
                <div className="Link-4K">
                    <h3>4k</h3>
                    <div className="Links-Download">
                    {EpisodeDataDownload}
                    </div>
                </div>
            </div>
        </div>
        <div className="video-comments">
        <div className="title">
        التعليقات
            </div>
            <div className="content-comments">
                التعليقات مغلقه في الوقت الحالي
            </div>
        </div>
        </div>
        </>
        
    )

}







