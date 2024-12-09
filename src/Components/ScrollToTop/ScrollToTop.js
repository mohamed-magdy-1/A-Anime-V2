import { FaAutoprefixer } from "react-icons/fa";
import './ScrollToTop.css'
import { useEffect,useRef,useState } from "react";
export default function ScrollToTop(){

const [backToTopButton,setBackToTopButton] = useState(false)
const scrollProgress = useRef()

useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            setBackToTopButton(true)
        }else{
            setBackToTopButton(false)
        }
    })
    window.addEventListener("scroll",()=>{
        let pos =document.documentElement.scrollTop;
        let calcHeight = 
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        try{
            scrollProgress.current.style.background = `conic-gradient(#4F00E4 ${scrollValue}%, #16151d ${scrollValue}%)`;
        }catch(err){
            
        }
        
    })
},[])


const scrollUp = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}





    return(
        <>
        <div className="progress" 
        onClick={scrollUp}
        ref={scrollProgress}
        style={{
                opacity: backToTopButton && "1",
            visibility: backToTopButton &&  "visible",
            transform: backToTopButton &&  "translateY(0)",
        }}>
            <span id="progress-value">
            <FaAutoprefixer className="top" />
            </span>
        </div>
        </>

    );

}
