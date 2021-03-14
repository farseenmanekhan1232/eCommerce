import './App.css';
import {Route , Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shoppage/shoppage.component.jsx'
function App() {
  return (
    <Switch>
      <Route exact path='/' component='Homepage' />
      <Route exact path='/shop' component='Shoppage'/>
    </Switch>
    );
}
export default App;
