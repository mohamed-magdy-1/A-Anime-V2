
import './AnimeList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { data } from "../../../Data/Data";
import { useEffect, useRef, useState } from 'react';
export default  function AnimeList() {

    const EFilter = useRef()

    const [dataListCards,setDataListCards] = useState(data)


    useEffect(()=>{
        function toTopPage() {
            window.scrollTo({top:0})
        }
        toTopPage() 
    },[])
    


let  listCards = []
// map data and show the cards
function showCard(item){   
listCards = item.map((el,id) => {
        return(
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
            
    })

}
showCard(dataListCards)



// when you  submit the form and doing filter for data
useEffect(() => {
    let filter = EFilter.current;

    const handleSubmit = (event) => {
        event.preventDefault();
        let valueFilter = event.target.elements;
        const DataCards = data.filter(item => {
            // التحقق من الفئة
            if (valueFilter.Category.value !== '') {
                if (!item.page.category.includes(valueFilter.Category.value)) {
                    return false;
                }
            }

            // التحقق من الحالة
            if (valueFilter.status.value !== '') {
                if (item.page.state !== valueFilter.status.value) {
                    return false;
                }
            }

            // التحقق من المصدر
            if (valueFilter.source.value !== '') {
                if (item.page.Source !== valueFilter.source.value) {
                    return false;
                }
            }

            // التحقق من السنة
            if (valueFilter.year.value !== '') {
                if (item.page.Release !== valueFilter.year.value) {
                    return false;
                }
            }

            return true;
        });

        setDataListCards(DataCards);
    };

    filter.addEventListener("submit", handleSubmit);

    // دالة تنظيف لإزالة مستمع الحدث عند إلغاء المكون
    return () => {
        filter.removeEventListener("submit", handleSubmit);
    };
}, [EFilter, data]);










return (
    <>
    <div className="List-container">
    <div className="anime-list">
    <form className='list-filter' ref={EFilter}>
        <div className='item'>
            <select name='Category'>
            <option value=''>تصنيف</option>
            <option value='سحر'>سحر</option>
            <option value='أكشن'>أكشن</option>
            <option value='إثارة'>إثارة</option>
            <option value='مغامرات'>مغامرات</option>
            <option value='رياضي'>رياضي</option>
            <option value='شياطين'>شياطين</option>
            <option value='مصاصي دماء'>مصاصي دماء</option>
            <option value='قوة خارقة'>قوة خارقة</option>
            <option value='خيال علمي'> خيال علمي</option>
            <option value='خارق للطبيعة'>خارق للطبيعة</option>
            <option value='خيال'>خيال</option>
            <option value='أطفال'>أطفال</option>
            <option value='دراما'>دراما</option>
            <option value='لعبة'>لعبة</option>
                <option value='مدرسي'>مدرسي</option>
            <option value='ساخر'>ساخر</option>
            <option value='رعب'>رعب</option>
            <option value='نفسي'>نفسي</option>
            <option value='بوليسي'>بوليسي</option>
            <option value='عسكري'>عسكري</option>
            <option value='غموض'>غموض</option>
            <option value='فنون قتالية'>فنون قتالية</option>
            <option value='تاريخي'>تاريخي</option>
            <option value='ساموراي'>ساموراي</option>
            <option value='تشويق'>تشويق </option>
            <option value='موسيقى'>موسيقى</option>
            <option value='ميكا'>ميكا</option>
            <option value='حريم'>حريم </option>
            <option value='ايتشي'>ايتشي </option>
            <option value='جوسي'>جوسي </option>
            <option value='رومانسي'>رومانسي</option>
            <option value='سينين'>سينين</option>
            <option value='شريحة من الحياة'>شريحة من الحياة</option>
            <option value='شوجو'>شوجو</option>
            <option value='شوجو آي'>شوجو آي</option>
            </select>
        </div>
        <div className='item'>
            <select name='status'>
            <option value=''>الحالة</option>
            <option value='يعرض الان'>يعرض لان</option>
            <option value='لم يتم بثه بعد'>لم يتم بثه بعد</option>
            <option value='متوقف'>متوقف</option>
            <option value='مكتمل'>مكتمل</option>


            </select>
        </div>
        <div className='item'>
            <select name='source'>
            <option value=''>النوع</option>
            <option value='Movie'>Movie</option>
            <option value='ONA'>ONA</option>
            <option value='OVA'>OVA</option>
            <option value='Special'>Special</option>
            <option value='TV'>TV</option>


            </select>
        </div>
        <div className='item'>
            <select name='year'>
            <option value=''>السنه</option>
            <option value='1986'>1986</option>
            <option value='1989'>1989</option>
            <option value='1992'>1992</option>
            <option value='1993'>1993</option>
            <option value='1999'>1999</option>
            <option value='2000'>2000</option>
            <option value='2001'>2001</option>
            <option value='2002'>2002</option>
            <option value='2003'>2003</option>
            <option value='2004'>2004</option>
            <option value='2005'>2005</option>
            <option value='2006'>2006</option>
            <option value='2007'>2007</option>
            <option value='2008'>2008</option>
            <option value='2009'>2009</option>
            <option value='2010'>2010</option>
            <option value='2011'>2011</option>
            <option value='2012'>2012</option>
            <option value='2013'>2013</option>
            <option value='2014'>2014</option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            <option value='2024'>2024</option>
            <option value='2025'>2025</option>


            </select>
        </div>
        <div className='item submit'>
        <button>بحث</button>
        </div>

    </form>
    <div className="cards-list">
        {listCards}
        { dataListCards.length === 0&& <div style={{
                            fontSize: "50px",
                            width: "100%",
                            height: "280px",
                            color: "white",
                            minHeight: "500px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }} className="none-episodes">غير متوفر</div>}
    </div>
    </div>
    </div>
    </>
);
}




