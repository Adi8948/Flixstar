import './App.css';
import Carousel from './component/Carousel';
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import Cards2 from './component/Cards2';
import Cards3 from './component/Cards3';
import NewsItems from './component/NewsItems';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Action from './component/Action';
import Scifi from './component/Scifi';
import Romance from './component/Romance';
import Subscription from './component/Subscription';



function App() {
  return (
    <><Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Carousel />
          <Cards />
          <Cards2 />
          <Cards3 />
        </Route>
        <Route exact path='/movienews'><Navbar /><NewsItems key='general' pageSize={15} Country="in" Category="entertainment" />
        </Route>
        <Route exact path='/Action'>
          <Navbar />
          <Action />
          <Cards/>
        </Route>
        <Route exact path='/Scifi'>
          <Navbar />
          <Scifi />
          <Cards2/>
        </Route>
        <Route exact path='/Romance'>
          <Navbar />
          <Romance />
          <Cards3/>
        </Route>
        <Route exact path='/Subscribe'>
          <Navbar />
          <Subscription/>
        </Route>
      </Switch>
    </Router>

    </>
  );
}

export default App;
