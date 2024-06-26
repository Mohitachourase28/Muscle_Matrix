/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import styled from "styled-components";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, img = Icon, setBodyPart, bodyPart }) => {
  return (
    <StyledCard
      type="button"
      sx={{
        borderTop: bodyPart === item ? "5px solid #1460e5" : "none",
        borderBottom: bodyPart === item ? "5px solid #1460e5" : "none",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Box className="image">
        <img src={img} alt="arms.png" loading="lazy" />
      </Box>
      <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
        {item}
      </Typography>
    </StyledCard>
  );
};

const StyledCard = styled(Stack)`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: "#fafafa";
  width: 250px;
  height: 300px;
  justify-content: center;
  border-radius: 9px;
  padding: 1rem 2rem;
  align-items: center;
  text-align: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  .image {
    width: 80%;

    img {
      width: 100%;
      opacity: 0.9;
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    width: 200px;
    height: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    width: 170px;
    height: 250px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &:hover {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
`;

export default BodyPart;
