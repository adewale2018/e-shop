import { Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div className='px-5 py-10'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
