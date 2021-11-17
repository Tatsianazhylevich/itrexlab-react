import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Input, Title } from '../../../../components/UI';
import { SIGN_IN_PATH } from '../../../../components';
import arrowLeftIcon from '../../../../assets/icons/angle-left-b.png';
import emailIcon from '../../../../assets/icons/Vector.png';

export function RestorePasswordForm() {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

        <StyledForm>
          <StyledTitle>
            <ArrowLink to={SIGN_IN_PATH} />
            <StyledTitleText>Restore Password</StyledTitleText>
          </StyledTitle>
          <RestorePasswordText>
            <p>Please use your email address, and we’ll send you the link to reset your password</p>
          </RestorePasswordText>
          <InputEmail
            label="Email"
            name="email"
            type="email"
            placeholder="bart@gmail.com"
          />
          <Button type="submit">Send Reset Link</Button>
        </StyledForm>
      </Formik>
    </>
  );
}

const StyledForm = styled(Form)`
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      width: 560px;
      min-height: 100vh;
      padding: 178px 95px 0;
      background-color: #F9FAFF;
`;

const InputEmail = styled(Input)`
      background: url(${emailIcon}) no-repeat center left 20px;
      padding-left: 63px;
      background-color: #FFFFFF;
`;

const ArrowLink = styled(Link)`
    width: 25px;
    background: url(${arrowLeftIcon}) no-repeat;
`;

const StyledTitle = styled(Title)`
     display: flex;
`;
const StyledTitleText = styled.p`
      margin-left: 16px;
`;
const RestorePasswordText = styled.div`
    width: 368px;
    height: 38px;
    margin: 32px 0 0;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%; 
    color: #A1ABC9;
`;