

import { MdOutlineAddToQueue } from "react-icons/md";
import { MdOutlinePausePresentation } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { MdBrowserNotSupported } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import '../pageAnime.css';
import {useEffect, useRef, useState} from "react";





export default function ListEddBox() {
    const eddBoxLength = useRef()
    const [type,setType] = useState(false)
// data card  from localStorage
let AnimeCard = localStorage.getItem("anime/page");
let cardData = JSON.parse(AnimeCard);
// data card  from localStorage
let dataTCard1 = localStorage.getItem("typeCard1");
let TCardData1 = JSON.parse(dataTCard1);
let dataTCard2 = localStorage.getItem("typeCard2");
let TCardData2 = JSON.parse(dataTCard2);
let dataTCard3 = localStorage.getItem("typeCard3");
let TCardData3 = JSON.parse(dataTCard3);
let dataTCard4 = localStorage.getItem("typeCard4");
let TCardData4 = JSON.parse(dataTCard4);
let dataTCard5 = localStorage.getItem("typeCard5");
let TCardData5 = JSON.parse(dataTCard5);

//  





//  check if there is typeCard in localStorage

let stateT1;
if (TCardData1 !== null) {
    for (let i = 0; i < TCardData1.length; i++) {
        if(TCardData1[i].title === cardData.title){
            stateT1 =true;
        }
        }
    }else{
        stateT1 =false;
    }
let stateT2;
if (TCardData2 !== null) {
    for (let i = 0; i < TCardData2.length; i++) {
        if(TCardData2[i].title === cardData.title){
            stateT2 =true;
        }
        }
    }else{
        stateT2 =false;
    }
let stateT3;
if (TCardData3 !== null) {
    for (let i = 0; i < TCardData3.length; i++) {
        if(TCardData3[i].title === cardData.title){
            stateT3 =true;
        }
        }
    }else{
        stateT3 =false;
    }
let stateT4;
if (TCardData4 !== null) {
    for (let i = 0; i < TCardData4.length; i++) {
        if(TCardData4[i].title === cardData.title){
            stateT4 =true;
        }
        }
    }else{
        stateT4 =false;
    }
let stateT5;
if (TCardData5 !== null) {
    for (let i = 0; i < TCardData5.length; i++) {
        if(TCardData5[i].title === cardData.title){
            stateT5 =true;
        }
        }
    }else{
        stateT5 =false;
    }

// End check if there is typeCard in localStorage




// start to Make sure that data is not lost
let listEddBoxArray1;
let listEddBoxArray2;
let listEddBoxArray3;
let listEddBoxArray4;
let listEddBoxArray5;

if (localStorage.typeCard1 != null) {
    listEddBoxArray1 = JSON.parse(localStorage.typeCard1);
}else{
    listEddBoxArray1 = [];
}
if (localStorage.typeCard2 != null) {
    listEddBoxArray2 = JSON.parse(localStorage.typeCard2);
}else{
    listEddBoxArray2 = [];
}

if (localStorage.typeCard3 != null) {
    listEddBoxArray3 = JSON.parse(localStorage.typeCard3);
}else{
    listEddBoxArray3 = [];
}

if (localStorage.typeCard4 != null) {
    listEddBoxArray4 = JSON.parse(localStorage.typeCard4);
}else{
    listEddBoxArray4 = [];
}

if (localStorage.typeCard5 != null) {
    listEddBoxArray5 = JSON.parse(localStorage.typeCard5);
}else{
    listEddBoxArray5 = [];
}

// End to Make sure that data is not lost

// start add card
function addTypeCard1() {
    listEddBoxArray1.push(cardData);
    window.localStorage.setItem('typeCard1',JSON.stringify(listEddBoxArray1))

}
function addTypeCard2() {
    listEddBoxArray2.push(cardData);
    window.localStorage.setItem('typeCard2',JSON.stringify(listEddBoxArray2))
}
function addTypeCard3() {
    listEddBoxArray3.push(cardData);
    window.localStorage.setItem('typeCard3',JSON.stringify(listEddBoxArray3))
}
function addTypeCard4() {
    listEddBoxArray4.push(cardData);
    window.localStorage.setItem('typeCard4',JSON.stringify(listEddBoxArray4))
}
function addTypeCard5() {
    listEddBoxArray5.push(cardData);
    window.localStorage.setItem('typeCard5',JSON.stringify(listEddBoxArray5))
}
// End add card

// start remove card
function deleteDataTypeCard1(){
    listEddBoxArray1.forEach((el,i) => {
        if (el.title === cardData.title) {
            listEddBoxArray1.splice(i,1);
            localStorage.typeCard1 = JSON.stringify(listEddBoxArray1);
        }
    });
};
function deleteDataTypeCard2(){
    listEddBoxArray2.forEach((el,i) => {
        if (el.title === cardData.title) {
            listEddBoxArray2.splice(i,1);
            localStorage.typeCard2 = JSON.stringify(listEddBoxArray2);
        }
    });
};
function deleteDataTypeCard3(){
    listEddBoxArray3.forEach((el,i) => {
        if (el.title === cardData.title) {
            listEddBoxArray3.splice(i,1);
            localStorage.typeCard3 = JSON.stringify(listEddBoxArray3);
        }
    });
};
function deleteDataTypeCard4(){
    listEddBoxArray4.forEach((el,i) => {
        if (el.title === cardData.title) {
            listEddBoxArray4.splice(i,1);
            localStorage.typeCard4 = JSON.stringify(listEddBoxArray4);
        }
    });
};
function deleteDataTypeCard5(){
    listEddBoxArray5.forEach((el,i) => {
        if (el.title === cardData.title) {
            listEddBoxArray5.splice(i,1);
            localStorage.typeCard5 = JSON.stringify(listEddBoxArray5);
        }
    });
};
// End remove card



useEffect(() => {
    function menuEddBoxFun() {
        let element = [];
        let list = eddBoxLength.current.children;
        for (const item of list) {
            element.push(item);
        }
        element.forEach((el) => {
            el.addEventListener("click", (el) => {
                
                // 1
                if (el.target.dataset.type === "type1" && localStorage.typeCard1 === undefined) {
                    addTypeCard1();
                    setType((prev)=> !prev)
                } else if (el.target.dataset.type === "type1") {
                    let yesAdd = false
                    
                    listEddBoxArray1.forEach((el) => {
                        if (el.title === cardData.title) {
                            yesAdd = true;
                        }
                    });
                    if(yesAdd === false){
                        addTypeCard1()
                        setType((prev)=> !prev)
                    }else if(yesAdd === true){
                        deleteDataTypeCard1()
                        setType((prev)=> !prev)
                    }
                }else if(el.target.dataset.type !== "type1"){
                    deleteDataTypeCard1()
                }
                //2
                if (el.target.dataset.type === "type2" && localStorage.typeCard2 === undefined) {
                    addTypeCard2();
                    setType((prev)=> !prev)
                } else if (el.target.dataset.type === "type2") {
                    let yesAdd = false
                    listEddBoxArray2.forEach((el) => {
                        if (el.title === cardData.title) {
                            yesAdd = true;

                        }
                    });
                    if(yesAdd === false){
                        addTypeCard2()
                        setType((prev)=> !prev)
                    }else if(yesAdd === true){
                        deleteDataTypeCard2()
                        setType((prev)=> !prev)
                    }
                }else if(el.target.dataset.type !== "type2"){
                    deleteDataTypeCard2()
                }
                //3
                if (el.target.dataset.type === "type3" && localStorage.typeCard3 === undefined) {
                    addTypeCard3();
                    setType((prev)=> !prev)
                } else if (el.target.dataset.type === "type3") {
                    let yesAdd = false
                    listEddBoxArray3.forEach((el) => {
                        if (el.title === cardData.title) {
                            yesAdd = true;
                        }
                    });
                    if(yesAdd === false){
                        addTypeCard3()
                        setType((prev)=> !prev)
                    }else if(yesAdd === true){
                        deleteDataTypeCard3()
                        setType((prev)=> !prev)
                    }
                }else if(el.target.dataset.type !== "type3"){
                    deleteDataTypeCard3()
                }
                //4
                if (el.target.dataset.type === "type4" && localStorage.typeCard4 === undefined) {
                    addTypeCard4();
                    setType((prev)=> !prev)
                } else if (el.target.dataset.type === "type4") {
                    let yesAdd = false
                    listEddBoxArray4.forEach((el) => {
                        if (el.title === cardData.title) {
                            yesAdd = true;
                        }
                    });
                    if(yesAdd === false){
                        addTypeCard4()
                        setType((prev)=> !prev)
                    }else if(yesAdd === true){
                        deleteDataTypeCard4()
                        setType((prev)=> !prev)
                    }
                }else if(el.target.dataset.type !== "type4"){
                    deleteDataTypeCard4()
                }
                //5
                if (el.target.dataset.type === "type5" && localStorage.typeCard5 === undefined) {
                    addTypeCard5();
                    setType((prev)=> !prev)
                } else if (el.target.dataset.type === "type5") {
                    let yesAdd = false
                    listEddBoxArray5.forEach((el) => {
                        if (el.title === cardData.title) {
                            yesAdd = true;
                        }
                    });
                    if(yesAdd === false){
                        addTypeCard5()
                        setType((prev)=> !prev)
                    }else if(yesAdd === true){
                        deleteDataTypeCard5()
                        setType((prev)=> !prev)
                    }
                }else if(el.target.dataset.type !== "type5"){
                    deleteDataTypeCard5()
                }
            });
        });
    }
    menuEddBoxFun();
}, []);



return(
        <>
        <div className="menu-AddBox" ref={eddBoxLength}>
            {stateT1 === true?
            <span onClick={()=> setType((prev)=> !prev)} data-type="type1" style={{backgroundColor:"#ffff", color:"#000"}} ><span className="check"><IoCheckmarkDoneSharp /></span> ارغب بمشاهدتها <MdOutlineAddToQueue fontSize={30} /></span>
            :
            <span onClick={()=> setType((prev)=> !prev)} data-type="type1"> ارغب بمشاهدتها <MdOutlineAddToQueue fontSize={30} /></span>
        }
            {stateT2 === true?

            <span onClick={()=> setType((prev)=> !prev)} data-type="type2" style={{backgroundColor:"#ffff", color:"#000"}} > <span className="check"><IoCheckmarkDoneSharp /></span>اشاهدها  حاليا<FaRegPlayCircle fontSize={30} /></span>
            :

            <span onClick={()=> setType((prev)=> !prev)} data-type="type2" >اشاهدها حاليا <FaRegPlayCircle fontSize={30} /></span>
        }
            {stateT3 === true?
            <span onClick={()=> setType((prev)=> !prev)} data-type="type3" style={{backgroundColor:"#ffff", color:"#000"}} ><span className="check"><IoCheckmarkDoneSharp /></span> تم مشاهدتها <FaCirclePlay fontSize={30} /> </span>
            :
            <span onClick={()=> setType((prev)=> !prev)} data-type="type3">تم مشاهدتها <FaCirclePlay fontSize={30} /> </span>
        }
            {stateT4 === true?
            <span onClick={()=> setType((prev)=> !prev)} data-type="type4" style={{backgroundColor:"#ffff", color:"#000"}}><span className="check"><IoCheckmarkDoneSharp /></span> اكملها لاحقا <MdOutlinePausePresentation fontSize={30} /></span>
            :
            <span data-type="type4">اكملها لاحقا <MdOutlinePausePresentation fontSize={30} /></span>
        }
            {stateT5 === true?
            <span onClick={()=> setType((prev)=> !prev)} data-type="type5" style={{backgroundColor:"#ffff", color:"#000"}}><span className="check"><IoCheckmarkDoneSharp /></span>لا ارغب بمشاهدتها <MdBrowserNotSupported fontSize={30} /></span>
            :
            <span onClick={()=> setType((prev)=> !prev)} data-type="type5">لا ارغب بمشاهدتها <MdBrowserNotSupported fontSize={30} /></span>
        }


            

            

            

        </div>
        </>
)
}







