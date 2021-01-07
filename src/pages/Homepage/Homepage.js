
import './Homepage.scss';

function Homepage() {
  return (
    <div className="homepage d-flex flex-column align-items-center px-10 py-20">
      <div className="directory-menu d-flex flex-wrap justify-content-between">
        <div className="menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-autotext-muted" style={{height: '240px', border: '1px solid black'}}>
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h3 className="title font-weight-bold font-size-h3 text-muted">HATS</h3>
            <span className="subtitle font-weight-lighter">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-autotext-muted" style={{height: '240px', border: '1px solid black'}}>
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h3 className="title font-weight-bold font-size-h3 text-muted">JACKETS</h3>
            <span className="subtitle font-weight-lighter">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-autotext-muted" style={{height: '240px', border: '1px solid black'}}>
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h3 className="title font-weight-bold font-size-h3 text-muted">SNICKERS</h3>
            <span className="subtitle font-weight-lighter">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-autotext-muted" style={{height: '240px', border: '1px solid black'}}>
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h3 className="title font-weight-bold font-size-h3 text-muted">MEN</h3>
            <span className="subtitle font-weight-lighter">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-autotext-muted" style={{height: '240px', border: '1px solid black'}}>
          <div className="content d-flex flex-column align-items-center justify-content-center">
            <h3 className="title font-weight-bold font-size-h3 text-muted">WOMEN</h3>
            <span className="subtitle font-weight-lighter">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
