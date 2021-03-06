import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import {
  InputStyled, InputInnerStyled, PasswordControl, InputLabelStyled,
} from './Input.styles';
import { WarningTextStyled } from '../Text/WarningText';
import eye from '../../assets/icons/eye.png';
import eyeSlash from '../../assets/icons/eye-slash.png';

export type InputProps = {
  label: string,
  type?: string;
  placeholder?: string,
  isEyeVisible?: boolean,
  fontSize?: number | string,
  name: string
}
export interface InputLabelProps {
  fontSize?: number | string,
}

export const Input = ({
  label, isEyeVisible, fontSize, ...props
}: InputProps) => {
  const[field] = useField(props.name);
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <InputStyled>
      <InputLabelStyled fontSize={fontSize} htmlFor={field.name}>{label}</InputLabelStyled>
      {isEyeVisible
        ? <InputInnerStyled {...field} {...props} autoComplete="off" type={visible ? 'text' : 'password'} />
        : <InputInnerStyled {...field} {...props} autoComplete="off" />}
      { isEyeVisible
        ? (<PasswordControl onClick={changeVisibility} src={visible ? eye : eyeSlash} />)
        : null}
      <ErrorMessage component={WarningTextStyled} name={field.name} />
    </InputStyled>
  );
};
