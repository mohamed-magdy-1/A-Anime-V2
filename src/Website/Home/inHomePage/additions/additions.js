// this is the same code in  TopCommon so I didn't Change anything Except for some names


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../TopCommon/TopCommon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../../../Data/Data";
export default  function Additions() {



    const AdditionsD = []
    async function showDataRecentlyCards() {
            for (let i = 0; i <= 10; i++) {
                    AdditionsD.push(
                        <Link to={`/anime/${data[i].page.title.split(' ').join("-")}`}   key={i} className="slider-card">
                        <div  className="slider-img" 
                        style={{backgroundImage: `url('${data[i].page.Cover}')`}} >
                        <div className="flag" style={{backgroundImage:`url('${data[i].page.flag}')`}}></div>
                        <span className="Top-icon"><FontAwesomeIcon icon={faFire} /></span>
                        <div className="state">
                            <span style={{background:`${data[i].page.stateColor}`}}></span>
                        </div>
                        
                        <div className="filter-top"
                        onClick={()=> localStorage.setItem("anime/page",JSON.stringify(data[i].page))}
                        >{data[i].page.title}</div>
                        </div>
                    </Link>
                        
                    );
        }
        
    }
    showDataRecentlyCards()





    // slider top settings
var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3000,
        }
        },
        {
        breakpoint: 480,
        settings: {
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
};
return (
    <>
    <div className="slider-container">
    <div className="slider-list">
    <span className="start"></span>
    <span className="main-title">اخر الاضافات</span>
    <Slider {...settings}>
        {AdditionsD}
    </Slider>
    <span className="end"></span>
    </div>
    </div>
    </>
);
}




