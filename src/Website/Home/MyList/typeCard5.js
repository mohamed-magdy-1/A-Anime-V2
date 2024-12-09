

import './myList'
import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import '../Favorite/Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default  function TypeCard5() {

// Favorite card  from localStorage
let dataTCard5 = localStorage.getItem("typeCard5");
let TCardData5 = JSON.parse(dataTCard5);





const TCardData5Array = []
function showDataCards5() {
    if(TCardData5 !== null){
        for (let i = 0; i < TCardData5.length; i++) {
            TCardData5Array.unshift(
                    <Link to={`/anime/${TCardData5[i].title.split(' ').join("-")}`}  key={i + 1} className="recently-card">
                        <div  className="recently-img" 
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData5[i]))}
                        style={{backgroundImage: `url('${TCardData5[i].Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${TCardData5[i].flag}')`}}></div>
                        {TCardData5[i].topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                        <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData5[i]))}
                >{TCardData5[i].title}</div>
                </div>
                    </Link>
            );
    }
    }

}
showDataCards5()





return (
    <>
    <div className="my-list">
        {TCardData5Array}
        { TCardData5 === null || TCardData5Array.length === 0 ? <div style={{
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




