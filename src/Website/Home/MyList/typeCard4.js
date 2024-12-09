

import './myList'
import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import '../Favorite/Favorite.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default  function TypeCard4() {

// Favorite card  from localStorage
let dataTCard4 = localStorage.getItem("typeCard4");
let TCardData4 = JSON.parse(dataTCard4);





const TCardData4Array = []
function showDataCards4() {
    if(TCardData4 !== null){
        for (let i = 0; i < TCardData4.length; i++) {
            TCardData4Array.unshift(
                    <Link to={`/anime/${TCardData4[i].title.split(' ').join("-")}`}  key={i + 1} className="recently-card">
                        <div  className="recently-img" 
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData4[i]))}
                        style={{backgroundImage: `url('${TCardData4[i].Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${TCardData4[i].flag}')`}}></div>
                        {TCardData4[i].topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                        <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(TCardData4[i]))}
                >{TCardData4[i].title}</div>
                </div>
                    </Link>
            );
    }
    }

}
showDataCards4()





return (
    <>
    <div className="my-list">
        {TCardData4Array}
        { TCardData4 === null || TCardData4Array.length === 0 ? <div style={{
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




