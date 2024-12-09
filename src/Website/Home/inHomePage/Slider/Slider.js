import { useEffect, useRef, useState } from "react";
import { data } from "../../../../Data/Data";
import "./Slider.css";
import { Link} from "react-router-dom";

export default function Slider() {


const ActiveMainCardRef = useRef()
const ActiveChooseRef = useRef()
// if Choose card part ==  main card  remove active
useEffect(()=>{
for (let i = 0; i <ActiveChooseRef.current.children.length; i++) {
    if(ActiveChooseRef.current.children[i].dataset.name 
        === ActiveMainCardRef.current.innerText){
        ActiveChooseRef.current.children[i].children[0].children[1].style.opacity="0"
    }else{
        ActiveChooseRef.current.children[i].children[0].children[1].style.opacity="1"
    }
    
}
})





  //for ching photo
const [mainCard, setMainCard] = useState([]);

  // show Choose card part
const showDataSmileCard = data.map((el,id) => {
return (
    el.page.top === true && (
        <div
        key={id}
        className="card-slider"
        data-name={`${el.page.title}`}
        onClick={() => setMainCard([el.page])}
        >
        <div
            className="img"
            style={{ backgroundImage: `url('${el.page.Cover}')` }}
        >
            <span className="filter"></span>
            <span className="filter-more">{el.page.title}</span>
        </div>
        </div>
    )
);
});



  // add photo to main card and ching the photo
function showDataMainCard() {
    if (mainCard.length === 0) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].page.top === true && data[i].page.topMainCard === true ) {
            function category() {
                return  data[i].page.category.map((el,i)=>  <span key={i}>{el}</span>)
            }
            
        return (
        <Link to={`/anime/${data[i].page.title.split(' ').join("-")}`} >
            <div 
            key={i + 1}
            className="big-card"
            style={{
                backgroundImage: `url('${data[i].page.backgroundCover}')`,
            }}
            >
            <span className="filter"></span>
            </div>
            <div className="content" onClick={()=> localStorage.setItem("anime/page",JSON.stringify(data[i].page))}>
        <div className="name" ref={ActiveMainCardRef}>
            {data[i].page.title}
            <span></span>
        </div>
        <div className="information">
            {data[i].page.description}
        </div>
        <div className="rate">
            <span>التقيم</span>
            <span className="p_"></span>
            <span>{data[i].page.rating}</span>
        </div>
        <div className="state">
            {data[i].page.state}
            <span style={{background:`${data[i].page.stateColor}`}}></span>
        </div>
        <div className="category">{category()}</div>
        </div>
            </Link>
        );
        }
    }
    } else {
        function category() {
            return  mainCard[0].category.map((el,i)=>  <span key={i}>{el}</span>)
        }
    return (
        <Link to={`/anime/${mainCard[0].title.split(' ').join("-")}`}  >
        <div
        className="big-card"
        
        style={{ backgroundImage: `url('${mainCard[0].backgroundCover}')` }}
        >
        <span className="filter"></span>
        </div>
        <div className="content" onClick={()=> localStorage.setItem("anime/page",JSON.stringify(mainCard[0]))}>
            
        <div className="name" ref={ActiveMainCardRef}
        >
            {mainCard[0].title}
            <span></span>
        </div>
        <div className="information">
            {mainCard[0].description}
        </div>
        <div className="rate">
            <span>التقيم</span>
            <span className="p_"></span>
            <span>{mainCard[0].rating}</span>
        </div>
        <div className="state">
            {mainCard[0].state}
            <span style={{background:`${mainCard[0].stateColor}`}}></span>
        </div>
        <div className="category">
            {category()}
        </div>
        </div>
        </Link>
    );
    }
}



return (
    
    <div className="container">
        <span className="start"></span>
    <div className="Choose" >
        <div className="all-card" ref={ActiveChooseRef}>
            {showDataSmileCard}
        </div>
    </div>
    <div className="main-card">
        {showDataMainCard()}
    </div>
    <span className="end"></span>
    </div>
    
);
}






