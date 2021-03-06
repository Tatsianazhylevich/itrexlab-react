import { MenuStyled, MenuContainerStyled, MenuLinkStyled } from './NavMenu.styles';
import { colors } from 'theme';

export type ButtonType = {
  title: string,
  id: string,
  path: string,
  exact?: boolean,
  activeClassName?: string,
}
export type NavMenuProps = {
  buttons: ButtonType[],
}

export function NavMenu({ buttons }: NavMenuProps ) {

  return (
    <MenuStyled>
      <MenuContainerStyled>
        {
        buttons.map(({title, id, path, exact, activeClassName}: ButtonType) => (
          <MenuLinkStyled exact={exact} to={path} key={id} activeStyle={{
            background: colors.blue,
            color: colors.white
          }} activeClassName={'active'}>
            {title}
          </MenuLinkStyled>
        ))
        }
      </MenuContainerStyled>
    </MenuStyled>
  );
}
