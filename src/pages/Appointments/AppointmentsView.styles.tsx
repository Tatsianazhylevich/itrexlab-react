import styled from 'styled-components';
import { breakpoints, colors } from '../../theme';

export const WrapperStyled = styled.div`
  position: relative;
    max-width: 1920px;
    padding: 0 64px 48px;
    background: ${colors.wrapperblue};
    @media (max-width: ${breakpoints.mobileL}) {
      padding: 0;
    }
`;

export const MainStyled = styled.div`
  padding: 40px 48px;
  max-width: 1792px;
  background-color: ${colors.greylight};
  box-shadow: 0px 4px 32px ${colors.darkgrey};
  border-radius: 16px;
  @media (max-width: ${breakpoints.mobileL}) {
      padding: 40px 24px;
    }
`;
