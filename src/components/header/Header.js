import "./Header.scss";

import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

const Header = () => {
  const newCartVisibility = useSelector(state => state.cart.hidden)
  const newCurrentUser = useSelector(state => state.user.currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option mr-1" to="/shop">
          SHOP
        </Link>
        {newCurrentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {newCartVisibility ? null : <CartDropdown />}
    </div>
  );
};

/*
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartVisibility: selectCartHidden(state),
}); 


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  cartVisibility: selectCartHidden,
});
*/

// export default connect(mapStateToProps)(Header);

export default Header;