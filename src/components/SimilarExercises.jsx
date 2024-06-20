/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import styled from 'styled-components';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => (
  <Container>
    <Title>
      Similar <span>Target Muscle</span> exercises
    </Title>
    <ScrollContainer>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </ScrollContainer>

    <Title>
      Similar <span>Equipment</span> exercises
    </Title>
    <ScrollContainer>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </ScrollContainer>
  </Container>
);

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-top: 3rem;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-top: 3rem;
  }
`;

const Title = styled(Typography)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: capitalize;

  span {
    color: #ee3650;
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 2rem;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    font-size: 1.3rem;
    margin: 0 2rem;
  }
`;

const ScrollContainer = styled(Stack)`
  width: 90vw;
  margin-bottom: 4rem;

  @media screen and (min-width: 520px) and (max-width: 768px) {
    width: 95vw;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    align-self: center;
    width: 100vw;
  }
`;

export default SimilarExercises;
