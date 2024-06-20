/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Typography, Box, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from 'styled-components';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const ref = useRef(null);

  const LeftHandler = () => {
    ref.current.scrollLeft -= 300;
  };

  const RightHandler = () => {
    ref.current.scrollLeft += 300;
  };

  if (!exerciseVideos.length) return <Loader />;

  return (
    <VideosContainer>
      <Typography variant="h2" className="title">
        Watch{' '}
        <span style={{ color: '#1460e5', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <div className="box">
        <StyledButton onClick={LeftHandler}>
          <KeyboardArrowLeftIcon />
        </StyledButton>
        <ScrollMenuDiv ref={ref}>
          {exerciseVideos.map((item, index) => (
            <iframe
              key={index}
              className="video_responsive"
              src={`https://www.youtube.com/embed/${item.video.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Embedded youtube ${index}`}
              loading="lazy"
            />
          ))}
        </ScrollMenuDiv>
        <StyledButton onClick={RightHandler}>
          <KeyboardArrowRightIcon />
        </StyledButton>
      </div>
    </VideosContainer>
  );
};

const VideosContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .box {
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    .title {
      font-size: 1.5rem;
      margin: 0 2rem 2rem 2rem;
    }

    .box {
      width: 95vw;
      gap: 1.2rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    .title {
      font-size: 1.3rem;
      margin: 0 1rem 2rem 1rem;
    }

    .box {
      width: 90vw;
      gap: 1.2rem;
    }
  }
`;

const ScrollMenuDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  gap: 2rem;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  .video_responsive {
    min-width: 400px;
    height: 220px;
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    gap: 1.5rem;

    .video_responsive {
      min-width: 55vw;
      height: 220px;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    gap: 1.5rem;

    .video_responsive {
      min-width: 75vw;
      height: 220px;
    }
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: auto;
  border: none;
  padding: 1rem;
  color: #1460e5;
  border-radius: 50%;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  align-items: center;
  width: max-content;
  height: max-content;

  &:hover {
    box-shadow: rgba(20, 96, 229, 1) 0px 20px 30px -10px;
  }

  cursor: pointer;

  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 0.6rem;
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    padding: 0.3rem;
    display: none;
  }
`;

export default ExerciseVideos;
