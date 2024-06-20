/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
        );
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Error fetching body parts:', error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises'
        );

        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h2" className="title">
        Awesome Exercises You Should Know
      </Typography>
      <Box className="input">
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise..."
          variant="outlined"
          sx={{ width: '70%', backgroundColor: '#191f2a', color: '#fff' }}
          InputProps={{
            style: {
              borderRadius: '7px',
              padding: '0.5rem 7rem 0.5rem 1rem',
            },
            placeholder: {
              color: '#fff',
              opacity: 0.5,
            },
          }}
        />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Box>
      <HorizontalScrollbar
        data={bodyParts}
        bodyParts
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Container>
  );
};

const Container = styled.section`
  margin-top: 7rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  .title {
    font-size: 3.5rem;
    text-align: center;
    text-transform: capitalize;
  }

  .input {
    display: flex;
    width: 70vw;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      background-color: #191f2a;
      color: #fff;
      font-size: 1.7rem;
      padding: 0.5rem 7rem 0.5rem 1rem;
      border-radius: 7px;

      &::placeholder {
        color: #fff;
        opacity: 0.5;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-top: 3.5rem;
    height: 100vh;
    .title {
      font-size: 2rem;
    }
    .input {
      width: 75vw;

      input {
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-top: 2rem;

    .title {
      font-size: 1.5rem;
    }

    .input {
      width: 75vw;

      input {
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    outline: none;
    padding: 0.5rem 1.2rem;
    background-color: #1460e5;
    border-radius: 7px;
    color: #fff;
    text-decoration: none;
    width: max-content;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.3rem;

    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #1460e5;
    }

    @media screen and (min-width: 280px) and (max-width: 768px) {
      padding: 0.5rem 1rem;
      align-self: center;
      border: none;
      &:hover {
        border: 1px solid #000;
      }
    }
  }
`;

export default SearchExercises;
