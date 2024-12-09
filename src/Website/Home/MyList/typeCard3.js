

import './myList'
import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import '../Favorite/Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default  function TypeCard3() {

// Favorite card  from localStorage
let dataTCard3 = localStorage.getItem("typeCard3");
let TCardData3 = JSON.parse(dataTCard3);





const TCardData3Array = []
function showDataCards3() {
    if(TCardData3 !== null){
        for (let i = 0; i < TCardData3.length; i++) {
            TCardData3Array.unshift(
                    <Link to={`/anime/${TCardData3[i].title.split(' ').join("-")}`}  key={i + 1} className="recently-card">
                        <div  className="recently-img" 
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData3[i]))}
                        style={{backgroundImage: `url('${TCardData3[i].Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${TCardData3[i].flag}')`}}></div>
                        {TCardData3[i].topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                        <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData3[i]))}
                >{TCardData3[i].title}</div>
                </div>
                    </Link>
            );
    }
    }

}
showDataCards3()





return (
    <>
    <div className="my-list">
        {TCardData3Array}
        { TCardData3 === null || TCardData3Array.length === 0 ? <div style={{
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




