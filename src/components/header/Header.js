import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./Header.styles";

import CartDropdown from "../cart-dropdown/CartDropdown";
import CartIcon from "../cart-icon/CartIcon";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import { getCartHidden } from '../../redux/selectors/cart.selector';
import { getCurrentUser } from '../../redux/selectors/user.selectors'

const Header = () => {
  const newCartVisibility = useSelector(getCartHidden)
  const newCurrentUser = useSelector(getCurrentUser);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink className="option mr-1" to="/shop">
          SHOP
        </OptionLink>
        {newCurrentUser ? (
          <OptionLink as='div'  onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            LOGIN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {newCartVisibility ? null : <CartDropdown />}
    </HeaderContainer>
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