import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 0.01fr 0.1fr 0.8fr;
  grid-gap: 0.3rem;

  height: 1.5rem;
  padding: 0.4rem;

  background-color: ${({ theme }) => theme.backgroundColor.secondary};
`;
NavBar.displayName = 'Styled.NavBar';

export const NavigationLink = styled(NavLink)`
  padding: 0.2rem;
  border-radius: 0.2rem;

  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  color: ${({ theme }) => theme.textColor.primary};

  text-decoration: none;
`;
NavigationLink.displayName = 'Styled.NavigationLink';

export const SearchInput = styled.input`
  border: none;

  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  color: ${({ theme }) => theme.textColor.primary};
`;

export const LogoNavLink = styled(NavLink)`
  justify-self: center;
  color: ${({ theme }) => theme.textColor.primary};
`;
LogoNavLink.displayName = `Styled.LogoNavLink`;
