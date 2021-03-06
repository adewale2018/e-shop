import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../category/CollectionPage';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
export default ShopPage;
