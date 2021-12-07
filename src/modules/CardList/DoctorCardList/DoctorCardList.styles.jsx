import styled from 'styled-components';
import { breackpoints } from '../../../theme';

export const CardListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-height: 680px;
    list-style-type: none;
    overflow-y: auto;
    @media(max-width: ${breackpoints.laptop}) {
        display: flex; 
        justify-content: center;
    }
`;
