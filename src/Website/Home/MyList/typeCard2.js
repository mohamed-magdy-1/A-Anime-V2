

import './myList'
import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import '../Favorite/Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default  function TypeCard2() {

// Favorite card  from localStorage
let dataTCard2 = localStorage.getItem("typeCard2");
let TCardData2 = JSON.parse(dataTCard2);





const TCardData2Array = []
function showDataCards2() {
    if(TCardData2 !== null){
        for (let i = 0; i < TCardData2.length; i++) {
            TCardData2Array.unshift(
                    <Link to={`/anime/${TCardData2[i].title.split(' ').join("-")}`}  key={i + 1} className="recently-card">
                        <div  className="recently-img" 
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData2[i]))}
                        style={{backgroundImage: `url('${TCardData2[i].Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${TCardData2[i].flag}')`}}></div>
                        {TCardData2[i].topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                        <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData2[i]))}
                >{TCardData2[i].title}</div>
                </div>
                    </Link>
            );
    }
    }

}
showDataCards2()





return (
    <>
    <div className="my-list">
        {TCardData2Array}
        { TCardData2 === null || TCardData2Array.length === 0 ? <div style={{
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
    </>
);
}




