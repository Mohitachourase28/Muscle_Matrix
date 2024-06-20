/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
