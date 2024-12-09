
import './RecentlyCards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../../../Data/Data";
import { useState } from 'react';
export default  function RecentlyCards() {

    let [moreCards,setMoreCards] = useState(11)

const RecentlyD = []
// show recently card part
let disabled = false;

async function showDataRecentlyCards() {
        for (let i = 0; i <= moreCards; i++) {
            if(data[i] !== undefined){
                if(data[i].page.addRecently === true && data[i].page.state !== "لم يتم بثه بعد" ){
                RecentlyD.push(
                        <div   key={i + 1} className="recently-card">
                            <Link 
                            to={`/anime/${data[i].page.title.split(' ').join("-")}/episodes/${data[i].page.Episodes}`} 
                            className="recently-img" 
                            onClick={()=> localStorage.setItem("anime/page",JSON.stringify(data[i].page))}
                            style={{backgroundImage: `url('${data[i].page.Cover}')`}} >
                            <div className="flag" style={{backgroundImage:`url('${data[i].page.flag}')`}}></div>
                            {data[i].page.topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
                            </Link>
                            <Link 
                            to={`/anime/${data[i].page.title.split(' ').join("-")}`} className="Episodes-name"
                            onClick={()=> localStorage.setItem("anime/page",JSON.stringify(data[i].page))}
                            >
                            { data[i].page.Episodes !== 0 ? <span className='Episodes-number'>{data[i].page.Episodes}</span> : <span className='Episodes-number'></span>}
                                <span>
                                {data[i].page.title}
                                </span>
                                
                                </Link>
                                
                            
                        </div>
                    
                );
                }
            }else{
                disabled = true;
                
            }
    }
    
}
showDataRecentlyCards()

return (
    <>
    <div className="recently-container">
    <div className="recently-list">
    <span className="start"></span>
    <span className="main-title"> الاحدث</span>
    <div className="recently">
        {RecentlyD}
    </div>
    <button className='more' type='submit' disabled={disabled}  onClick={()=> {
                setMoreCards((prev)=> prev + 11)
            }}
        >
    المزيد
    </button>
    <span className="end"></span>
    </div>
    </div>
    </>
);
}




// {/* <Link to={`/anime/${data[i].page.title.split(' ').join("-")}/episodes/${data[i].page.Episodes}`}  key={i + 1} className="recently-card">
// <div  className="recently-img" 
// onClick={()=> localStorage.setItem("anime/page",JSON.stringify(data[i].page))}
// style={{backgroundImage: `url('${data[i].page.Cover}')`}} >
// <div className="flag" style={{backgroundImage:`url('${data[i].page.flag}')`}}></div>
// {data[i].page.topCommon && <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>}
// <Link to={`/anime/${data[i].page.title.split(' ').join("-")}`} className="Episodes-name">
// { data[i].page.Episodes !== 0 ? <span className='Episodes-number'>{data[i].page.Episodes}</span> : <span className='Episodes-number'></span>}
//     <span>
//     {data[i].page.title}
//     </span>
    
//     </Link>
    
// </div>
// </Link> */}