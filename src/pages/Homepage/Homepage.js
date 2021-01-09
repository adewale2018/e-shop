import './Homepage.scss';
import Directory from '../../components/directory/Directory';

function Homepage() {
  return (
    <div className="homepage d-flex flex-column align-items-center pt-4 pb-8">
      <div className="directory-menu d-flex flex-wrap justify-content-between">
        <Directory />
      </div>
    </div>
  );
}

export default Homepage;
