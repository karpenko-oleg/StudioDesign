import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense} from "react";

// style
import './style.scss';
import './fonts/fonts.scss'
// components
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Preloader from "./components/preloader/Preloader.jsx";
import Spiner from "./components/preloader/Spiner.jsx";

const Home = lazy(()=> import('./pages/home/Home.jsx'));
const Picture = lazy(()=> import('./pages/picture/Picture.jsx'));

function App() {
   // Состояние для отображения прелоудера
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     // Имитация задержки загрузки данных
     const fakeDataFetch = () => {
       setTimeout(() => {
        setIsLoading(false); // Установка прелоудера в false после истечения задержки
       }, 5500);
     };
     fakeDataFetch();
   }, []);

   return (
    <div className="App">
    {isLoading ? <Preloader /> :
      <>
        <Header />
        <main>
        <Routes>
              <Route path="/" exact index element={<Suspense fallback={<Spiner/>}><Home /></Suspense>} />
              <Route path="/picture" element={<Suspense fallback={<Spiner/>}><Picture /></Suspense>} />
        </Routes>
        </main>
        <Footer />
      </>
    }
  </div>
);
}

export default App;
