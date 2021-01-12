import "./MenuItem.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <>
      <div
        className={`menu-item  d-flex align-items-center flex-grow-1 flex-shrink-1  justify-content-center flex-basis-auto text-muted ${size}`}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content d-flex flex-column align-items-center justify-content-center">
          <h4 className="title font-weight-bold font-size-h4 text-uppercase text-black-50">
            {title}
          </h4>
          <span className="subtitle font-weight-lighter">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
