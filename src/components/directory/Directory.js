import "./Directory.scss";

import MenuItem from "../menu-item/MenuItem";
import { useSelector } from 'react-redux';
import { getDirectorySections } from '../../redux/selectors/directory.selector'

const Directory = () => {
  const sections = useSelector(getDirectorySections)
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
