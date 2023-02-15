import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Search from './components/Search-university/Search';
import Guide from './components/Guide/Guide';
import Speacialities from './components/Specialities/Speacialities';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import Contact from './components/Contact/Contact';
import Universities from './routes/universities/Universities';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Hero />
          <Search />
          <Guide />
          <Speacialities />
          <About />
          <Comments />
          <Contact />
        </Route>

        <Route path='/universities'>
          <Search />
          <Universities />
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;