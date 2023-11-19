import {
    NavigationWrap,
    StyledNavigationLink
  } from './Navigation.styled';

export const Navigation = () => {
    return (
    <NavigationWrap>
    <StyledNavigationLink to="/">Home</StyledNavigationLink>
    <StyledNavigationLink to="/catalog">Catalog</StyledNavigationLink>
    <StyledNavigationLink to="/favorites">Favorites</StyledNavigationLink>
    </NavigationWrap>
    )
}