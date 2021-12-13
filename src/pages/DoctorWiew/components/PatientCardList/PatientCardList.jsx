import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PatientCard } from '../../../../modules/Card';
import { CardListStyled } from './PatientCardList.styles';
import anneteBlack from '../../../../assets/patients/annete_black.png';
import { getPatients, doctorsAppointments } from '../../redux';
import { getDateFormat } from '../../../../shared';

export function PatientCardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const { appointments } = useSelector(doctorsAppointments);

  return (
    <CardListStyled>
      {appointments ? appointments.map((patient) => (
        <PatientCard
          avatar={anneteBlack}
          firstName={patient.patient.first_name}
          lastName={patient.patient.last_name}
          status={patient.status}
          description={patient.reason}
          time={getDateFormat(patient.visit_date)}
          key={patient.id}
          dataTestId="patientCard"
        />
      )) : <h3>no doctors</h3>}

    </CardListStyled>
  );
}