

import '../AnimeList/AnimeList.css';
import './Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default  function Favorite() {

// Favorite card  from localStorage
let FavoriteCard = localStorage.getItem("Favorite");
let FavoriteData = JSON.parse(FavoriteCard);


useEffect(()=>{
    function toTopPage() {
        window.scrollTo({top:0})
    }
    toTopPage() 
},[])





const FavoriteCardArray = []
function showDataFavoriteCards() {
    if(FavoriteData !== null){
        for (let i = 0; i < FavoriteData.length; i++) {
            FavoriteCardArray.unshift(
                    <Link to={`/anime/${FavoriteData[i].title.split(' ').join("-")}`}  key={i} className="slider-card">
                            <div  className="slider-img" 
                            onClick={()=> localStorage.setItem("anime/page",JSON.stringify(FavoriteData[i]))}
                            style={{backgroundImage: `url('${FavoriteData[i].Cover}')`}} >
                            <div className="flag" style={{backgroundImage:`url('${FavoriteData[i].flag}')`}}></div>
                                {FavoriteData[i].topCommon  && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                            <div className="state">
                            <span style={{background:`${FavoriteData[i].stateColor}`}}></span>
                            </div>
                            <div className="filter-top"
                            >{FavoriteData[i].title}</div>
                            </div>
                    </Link>
            );
    }
    }

}
showDataFavoriteCards()



return (
    <>
    <div className="Favorite-container">
    <div className="recently-list">
    <span className="start"></span>
    <span className="main-title">المفضلة</span>
    <div className="recently">
        {FavoriteCardArray}
        { FavoriteData === null || FavoriteCardArray.length === 0 ? <div style={{
                            fontSize: "50px",
                            width: "100%",
                            height: "280px",
                            color: "white",
                            minHeight: "500px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }} className="none-episodes">لايوجد شئ هناء</div>
                            :
                            ""
                        }

    </div>
    <span className="end"></span>
    </div>
    </div>
    </>
);
}




