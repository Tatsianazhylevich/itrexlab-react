import { COLORS } from '../../theme';

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    height: '40px',
    background: state.isSelected ? COLORS.greylight : COLORS.white,
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
    color: state.isSelected ? COLORS.blue : COLORS.black,
  }),
  menuList: (provided) => ({
    ...provided,
    height: '128px',
    overflowY: 'scroll',
  }),
  control: (provided) => ({
    ...provided,
    height: '100%',
    marginBottom: '40px',
    border: `1px solid ${COLORS.solidgrey}`,
  }),
  input: (provided) => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
  }),
  container: (provided) => ({
    ...provided,
    height: '56px',
    background: COLORS.white,
    border: `1px solid ${COLORS.solidgrey}`,
    boxSizing: 'border-box',
    boxShadow: `0px 4px 32px ${COLORS.darkgrey}`,
    borderRadius: '8px',
    marginBottom: '40px',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '130%',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
  }),
};
