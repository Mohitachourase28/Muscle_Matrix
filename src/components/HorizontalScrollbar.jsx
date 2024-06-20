/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import styled from "styled-components";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AllIcon from "../assets/icons/All.png";
import ArmsIcon from "../assets/icons/arms.png";
import BackIcon from "../assets/icons/back.png";
import ChestIcon from "../assets/icons/chest.png";
import LowerLegsIcon from "../assets/icons/LowerLegs.png";
import UpperLegsIcon from "../assets/icons/upperLegs.png";
import NeckIcon from "../assets/icons/neck.png";
import ShoulderIcon from "../assets/icons/shoulder.png";
import WaistIcon from "../assets/icons/waist.png";
import CardioIcon from "../assets/icons/cardio.png";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const BodyPartImage = [
    {
      text: "1",
      img: AllIcon,
    },
    {
      text: "2",
      img: BackIcon,
    },
    {
      text: "3",
      img: CardioIcon,
    },
    {
      text: "4",
      img: ChestIcon,
    },
    {
      text: "5",
      img: ArmsIcon,
    },
    {
      text: "6",
      img: LowerLegsIcon,
    },
    {
      text: "7",
      img: NeckIcon,
    },
    {
      text: "8",
      img: ShoulderIcon,
    },
    {
      text: "9",
      img: ArmsIcon,
    },
    {
      text: "10",
      img: UpperLegsIcon,
    },
    {
      text: "11",
      img: WaistIcon,
    },
  ];

  for (let i = 0; i < 11; i++) {
    BodyPartImage[i].text = data[i];
  }
  const ref = useRef(null);

  const scrollLeft = () => {
    ref.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    ref.current.scrollLeft += 200;
  };

  return (
    <ScrollContainer>
      <ArrowButton onClick={scrollLeft}>
        <KeyboardArrowLeftIcon />
      </ArrowButton>
      <ScrollMenu ref={ref}>
        {data.map((item) => (
          <ScrollItem key={item.id || item}>
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <img src={item.img} alt={item.text} />
            )}
          </ScrollItem>
        ))}
      </ScrollMenu>
      <ArrowButton onClick={scrollRight}>
        <KeyboardArrowRightIcon />
      </ArrowButton>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 280px) and (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ScrollMenu = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 0 0 auto;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #1460e5;
  border-radius: 50%;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    box-shadow: rgba(20, 96, 229, 1) 0px 20px 30px -10px;
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 0.4rem;
  }
`;

export default HorizontalScrollbar;
