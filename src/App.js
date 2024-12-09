
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Website/Home/inHomePage/HomePage/HomePage';
import PageAnime from './Website/Home/PageAnime/PageAnime';
import Anime from './Website/Home/PageAnime/Anime';
import Favorite from './Website/Home/Favorite/Favorite';
import NotAvailable from './Website/Home/NotAvailable/NotAvailable';
import PageEpisodes from './Website/Home/PageEpisodes/pageEpisodes';
import EpisodeTime from './Website/Home/EpisodeTime/EpisodeTime';
import AnimeList from './Website/Home/AnimeList/AnimeList';
import MyList from './Website/Home/MyList/myList';
import TypeCard1 from './Website/Home/MyList/typeCard1';
import TypeCard2 from './Website/Home/MyList/typeCard2';
import TypeCard3 from './Website/Home/MyList/typeCard3';
import TypeCard4 from './Website/Home/MyList/typeCard4';
import TypeCard5 from './Website/Home/MyList/typeCard5';
import CategoryName from './Website/Home/AnimeList/CategoryName/CategoryName';
import Category from './Website/Home/AnimeList/CategoryName/category';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Footer from './Components/footer/Footer';
import Header from './Components/header/header';
import ContextTest from './context/ChangePA';

export default function App() {




  return(
  <>
    <div className='App'>
    <Header/>
      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/animeList' element={<AnimeList/>}></Route>
      <Route path='/categoryName' element={<Category/>}>
      <Route path=':name' element={<CategoryName/>}/>
      </Route>
      <Route path='/favorite' element={<Favorite/>}></Route>
      <Route path='/myList' element={<MyList/>}>
      <Route path='typeCard1' element={<TypeCard1/>}></Route>
      <Route path='typeCard2' element={<TypeCard2/>}></Route>
      <Route path='typeCard3' element={<TypeCard3/>}></Route>
      <Route path='typeCard4' element={<TypeCard4/>}></Route>
      <Route path='typeCard5' element={<TypeCard5/>}></Route>
      </Route>
      <Route path='/episodeTime' element={<EpisodeTime/>}></Route>
      <Route path='/notAvailable' element={<NotAvailable/>}></Route>

      <Route path='/anime' element={<Anime/>}>
        <Route path=':name' element={<PageAnime/>}/>
        <Route path='/anime:name/episodes'>
        <Route path=':number' element={<PageEpisodes/>}/>
        </Route>
      </Route>
      </Routes>
      <ScrollToTop/>

    </div>
        <div className='footer'>
            <Footer/>
        </div>
        </>
  )
}

