import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const App = () => {
  const videos = useInitialState('http://localhost:3000/initialState');
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos && (
        // eslint-disable-next-line react/jsx-fragments
        <React.Fragment>
          {videos.mylist.length > 0 && (
            <Categories title='Mi Lista'>
              <Carousel>
                {videos.mylist.map((item) => {
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  return <CarouselItem key={item.id} {...item} />;
                })}
              </Carousel>
            </Categories>
          )}

          <Categories title='Tendencias'>
            <Carousel>
              {videos.trends.map((item) => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                return <CarouselItem key={item.id} {...item} />;
              })}
            </Carousel>
          </Categories>

          <Categories title='Originales de Platzi Video'>
            <Carousel>
              {videos.originals.map((item) => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                return <CarouselItem key={item.id} {...item} />;
              })}
            </Carousel>
          </Categories>
        </React.Fragment>
      )}
      <Footer />
    </div>
  );
};

export default App;
