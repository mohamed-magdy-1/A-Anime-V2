
import ForYouCards from '../ForYouCards/ForYouCards';
import Slider from '../Slider/Slider';
import TopCommon from '../TopCommon/TopCommon';
import Additions from '../additions/additions';
import RecentlyCards from '../recentCards/RecentlyCards';
import './HomePage.css'


export default function HomePage(){

    return(
        <div className='main-container'>
        <div className='Slider-card'>
            <Slider/>
        </div>
        <div className='top-common'>
            <TopCommon/>
        </div>
        <div className='recently-cards'>
            <RecentlyCards/>
        </div>
        <div className='top-common' style={{marginBottom:"25px"}}>
            <ForYouCards/>
        </div>
        <div className='top-common' style={{marginBottom:"25px"}}>
            <Additions/>
        </div>
        </div>
    
    );

}