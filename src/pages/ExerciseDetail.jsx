/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { exerciseOptions, youtubeOptions, fetchDataWithCache as fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);

        setLoaded(false); // Data loaded successfully
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        setLoaded(true); // Reset loaded state on error
      }
    };

    fetchExerciseData();
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [id]);

  if (loaded) {
    return <Loader />; // Show loader while data is loading
  }

  if (!exerciseDetail) {
    return <Typography>No Exercise Found</Typography>; // Handle case when exerciseDetail is null or undefined
  }

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
