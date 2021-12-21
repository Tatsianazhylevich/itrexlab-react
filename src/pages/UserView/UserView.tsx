import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared';
import { MainPage } from 'pages';
import { userProfile, getUserProfile } from '../Authorization/redux';
import { MainStyled } from './UserView.styles';
import { InnerUserRoute, InnerDoctorRoute } from 'routes';



export function UserView() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <MainPage>
      <MainStyled>
        {user?.role_name === 'Patient' ? <InnerUserRoute /> : <InnerDoctorRoute />}
      </MainStyled> 
    </MainPage>
  );
}
