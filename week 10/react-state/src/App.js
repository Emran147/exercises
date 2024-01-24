import {  useState } from 'react';
import './App.css';
import Home from './Components/Home';
// import Hudini from './Components/Hudini';
import Landing from './Components/Landing';
// import LikeCounter from './Components/LikeCounter';
// import SpotCheck1 from './Components/SpotCheck1';
// import WeatherSwitch from './Components/WeatherSwitch';

function App() {

  const findHotest = function(){
    const hottestItem = data.store.find(item => item.hottest);
    return hottestItem ? hottestItem : "No hottest item found";
  }
  let [currentPage,setCurrentPage] = useState('Home')
  const changePage = function(){
    setCurrentPage(currentPage==='Home' ? 'Landing' : 'Home')
  }
  const data =   {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: true,
    currentPage: "Landing"
  }

  return (
    <div className="App">
      {/* <SpotCheck1/> */}
      {/* <WeatherSwitch />  */}
      {/* <LikeCounter />  */}
      {/* <Hudini/> */}
      <button onClick={changePage}> Switch </button>
      {currentPage==='Home' ?       <Home shouldDiscount={data.shouldDiscount} store = {data.store}/> :   <Landing userName={data.user} hottestItem={findHotest()}/>
}
    </div>
  );
}

export default App;
