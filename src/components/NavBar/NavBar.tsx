import { TrelloLogo } from 'components/Icons';
import * as Styled from './NavBar.styled';

export const NavBar = () => {
  return (
    <Styled.NavBar>
      <Styled.NavigationLink to="/boards">Boards</Styled.NavigationLink>
      <Styled.SearchInput></Styled.SearchInput>
      <Styled.LogoNavLink to={'/'}>
        <TrelloLogo />
      </Styled.LogoNavLink>
    </Styled.NavBar>
  );
};
