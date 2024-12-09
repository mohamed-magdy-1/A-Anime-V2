
import '../AnimeList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../../../Data/Data";

export default  function CategoryName() {

// The decodeURIComponent() method decodes a URI component.
let name = decodeURIComponent(window.location.pathname.split('/').slice(-1)[0].split('-').join(" "));

let  listCards = []
//  filter data and show the cards
data.filter((el,id) => {
    if(el.page.category.includes(name)){
        listCards.push(
            <Link to={`/anime/${el.page.title.split(' ').join("-")}`}  key={id} className="slider-card">
                <div  className="slider-img" 
                style={{backgroundImage: `url('${el.page.Cover}')`}} >
                <div className="flag" style={{backgroundImage:`url('${el.page.flag}')`}}></div>
                {el.page.topCommon  && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                <div className="state">
                    <span style={{background:`${el.page.stateColor}`}}></span>
                </div>
                <div className="filter-top"
                onClick={()=> localStorage.setItem("anime/page",JSON.stringify(el.page))}
                >{el.page.title}</div>
                </div>
            </Link>
        )
    }

            
    })





return (
    <>
    <div className="List-container">
    <div className="anime-list">
    <span className="main-title">{name}</span>
    <div className="cards-list" style={{marginTop: "120px"}}>
        {listCards}
    </div>
    </div>
    </div>
    </>
);
}




