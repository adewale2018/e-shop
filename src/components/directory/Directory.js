import "./Directory.scss";

import MenuItem from "../menu-item/MenuItem";
import { useSelector } from 'react-redux';

const Directory = () => {
  const sections = useSelector(state => state.directory.sections)
  return (
    <>
      <div className="directory-menu d-flex flex-wrap justify-content-between">
        {" "}
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}{" "}
      </div>{" "}
    </>
  );
};

export default Directory;
