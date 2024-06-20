/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import styled from 'styled-components';

const ExerciseCard = ({ exercise }) => {
  let str;
  const length = exercise.name.length;
  if (length > 29) {
    str = exercise.name.slice(0, 29);
    str = str.concat('...');
  } else {
    str = exercise.name;
  }

  return (
    <StyledLink to={`/exercise/${exercise.id}`}>
      <ExerciseCardDiv>
        <div className="image">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        </div>
        <div className="content">
          <Button className="btn">{exercise.bodyPart}</Button>
          <Button className="btn btn2">{exercise.target}</Button>
        </div>
        <Typography className="title">{str}</Typography>
      </ExerciseCardDiv>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ExerciseCardDiv = styled.div`
  padding: 2rem 1rem;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 9px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px, rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
  }
  .image {
    width: 80%;
    margin: auto;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    font-size: 1rem;
    .btn {
      padding: 1rem 2rem;
      border: none;
      background-color: #1460e5;
      text-transform: capitalize;
      border-radius: 15px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      color: #fff;
      font-size: 100%;
      font-weight: 500;
      &:hover {
        color: #1460e5;
        background-color: #fafafa;
      }
    }
    .btn2 {
      color: #1460e5;
      background-color: #fafafa;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      &:hover {
        background-color: #1460e5;
        color: #fff;
      }
    }
  }
  .title {
    font-size: 1.3rem;
    text-align: center;
    color: #000;
    font-weight: 600;
    text-transform: capitalize;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 2rem;
    width: 40vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 9px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    box-sizing: border-box;
    &:hover {
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 20px 1px, rgba(14, 30, 37, 0.2) 0px 2px 16px 1px;
    }
    .image {
      width: 90%;
      margin: auto;
      img {
        width: 100%;
      }
    }
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.7rem 1rem;
        border-radius: 9px;
      }
    }
    .title {
      word-break: break-word;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 520px) {
    width: 100%;
    height: max-content;
    align-self: center;
    .content {
      font-size: 0.9rem;
      .btn {
        font-size: 95%;
        padding: 0.5rem 1rem;
        border-radius: 9px;
      }
    }
  }
`;

export default ExerciseCard;
