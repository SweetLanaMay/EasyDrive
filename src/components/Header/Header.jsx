import { HeaderContainer } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <Navigation />
    </HeaderContainer>
  );
};
