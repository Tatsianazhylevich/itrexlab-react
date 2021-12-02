import { colors } from '../../theme';

export const selectStyled = {
  option: (provided, state) => ({
    ...provided,
    height: '40px',
    background: state.isSelected ? colors.greylight : colors.white,
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '130%',
    color: state.isSelected ? colors.blue : colors.black,
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
    border: `1px solid ${colors.solidgrey}`,
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
    background: colors.white,
    border: `1px solid ${colors.solidgrey}`,
    boxSizing: 'border-box',
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
