

import { useEffect } from 'react';
import './myList.css'
import { NavLink, Outlet } from 'react-router-dom';
export default  function MyList() {

    useEffect(()=>{
        function toTopPage() {
            window.scrollTo({top:0})
        }
        toTopPage() 
    },[])
    
return (
    <>
    <div className="myList-container">
        <div className='list-button'>
            <NavLink to="typeCard1">ارغب بمشاهدتها</NavLink>
            <NavLink to="typeCard2">اشاهدها حاليا</NavLink>
            <NavLink to="typeCard3">تم مشاهدتها</NavLink>
            <NavLink to="typeCard4">اكملها لاحقا</NavLink>
            <NavLink to="typeCard5">لا ارغب بمشاهدتها</NavLink>
        </div>
        <Outlet/>
    </div>
    </>
);
}




