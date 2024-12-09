

import './myList'
import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import '../Favorite/Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default  function TypeCard1() {

// Favorite card  from localStorage
let dataTCard1 = localStorage.getItem("typeCard1");
let TCardData1 = JSON.parse(dataTCard1);





const TCardData1Array = []
function showDataCards1() {
    if(TCardData1 !== null){
        for (let i = 0; i < TCardData1.length; i++) {
            TCardData1Array.unshift(
                    <Link to={`/anime/${TCardData1[i].title.split(' ').join("-")}`}  key={i + 1} className="recently-card">
                        <div  className="recently-img" 
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData1[i]))}
                        style={{backgroundImage: `url('${TCardData1[i].Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${TCardData1[i].flag}')`}}></div>
                        {TCardData1[i].topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                        <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData1[i]))}
                >{TCardData1[i].title}</div>
                </div>
                    </Link>
            );
    }
    }

}
showDataCards1()





return (
    <>
    <div className="my-list">
        {TCardData1Array}
        { TCardData1 === null || TCardData1Array.length === 0 ? <div style={{
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




