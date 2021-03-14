import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shoppage from './pages/shoppage/shoppage.component.jsx';
function App() {
  return (
    <div> 
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={Shoppage}/>
    </div>
    );
}
export default App;

