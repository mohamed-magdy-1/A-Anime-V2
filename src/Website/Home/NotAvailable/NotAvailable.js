
import './NotAvailable.css'
import { Link} from 'react-router-dom'
export default function NotAvailable() {
    
    return(
    <>
    <div className="available-container">
        <div className="not-available-img">
            <img width={"200px"} src={`${require('../../../imgs/imgs-data/not available/not available.png')}`} alt="not-available"/>
        </div>
        <div className="not-available">
        عذرا هذه الصفحه غير متاحه الان 
        <Link to={'/'}> الرجوع الي الصفحه الرئيسيه</Link>
        </div>
        
    </div>
    </>
    )

}