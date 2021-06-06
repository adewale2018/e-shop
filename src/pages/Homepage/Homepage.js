import Directory from '../../components/directory/Directory';
import { HomePageContainer } from './HomePage.style';

const Homepage = () => {
  return (
    <HomePageContainer>
      <div className="directory-menu d-flex flex-wrap justify-content-between">
        <Directory />
      </div>
    </HomePageContainer>
  );
}

export default Homepage;
