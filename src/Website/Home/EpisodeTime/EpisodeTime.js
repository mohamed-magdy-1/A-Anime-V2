

import '../../Home/inHomePage/recentCards/RecentlyCards.css';
import './EpisodeTime.css'
import '../inHomePage/TopCommon/TopCommon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../../Data/Data";
import { useEffect } from 'react';
export default  function EpisodeTime() {

    useEffect(()=>{
        function toTopPage() {
            window.scrollTo({top:0})
        }
        toTopPage() 
    },[])
    
    

return (
    <>
    <div className="EpisodeTime-container">
        <div className='episodeTime-title'><h1>مواعيد الحلقات</h1></div>
        <div className='week-days'>
            <div className='Saturday name-days'>
                <h4 className='day'>السبت</h4>
                <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "السبت" && el.page.state === "يعرض الان"  && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>
            </div>
            <div className='Sunday name-days'>
            <h4 className='day'>الأحد</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الأحد" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>
            </div>
            <div className='Monday name-days'>
            <h4 className='day'>الإثنين</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الإثنين" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>

            </div>
            <div className='Tuesday name-days'>
            <h4 className='day'>الثلاثاء</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الثلاثاء" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>
            </div>
            <div className='Wednesday name-days'>
            <h4 className='day'>الأربعاء</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الأربعاء" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>
            </div>
            <div className='Thursday name-days'>
            <h4 className='day'>الخميس</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الخميس" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>

            </div>
            <div className='Friday name-days'>
            <h4 className='day'>الجمعة</h4>
            <div className='day-cards'>
                {
                    data.map((el,id) => {
                        return (
                            ( el.page.EpisodeTime === "الجمعة" && el.page.state === "يعرض الان"    && 
                                <Link to={`/anime/${el.page.title.split(' ').join("-")}`}   key={id} className="slider-card">
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
                        );
                        })
            }
                </div>
            </div>
        </div>
    </div>
    </>
);
}




