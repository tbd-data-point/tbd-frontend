import React from "react";
import styled from "styled-components";

type SolutionsProps = {
    header?: string, 
    desc?: string,
    imgSrc?: any,
    classes?: string,
    tileKey?: string
};

const Tile = styled.div`
  width: 20%;
  margin: 0 2%;
  height: 90%;
  position: relative;
  top: 1%;
  left: 12%;

  @media (max-width: 1010px){
    width: 30%;
    left: 4%;
    font-size: 0.9em;
    margin: 0;
  }
`;

const TileHeader = styled.header`
  width: 100%;
  text-align: center;
  font-size: 1.7em;
  letter-spacing: 0.05em;
  margin-bottom: 12vh;
`;

const TileDesc = styled.div`
  width: 70%;
  font-size: 1.3em;
  margin-left: 10%;
  margin-bottom: 9vh;
  @media (max-width: 714px){
    font-size: 1.1em;
    width: 80%;
    margin-left: 5%;
  }

  @media (max-width: 534px){
    width: 90%;
    text-align: center;
  }
`;

const TileImg = styled.img`
    width: 80%;
    height: auto;
    margin-left: 10%;
`;

const SolutionsTile = ({header,desc,imgSrc, classes, tileKey} : SolutionsProps) => {
    return <Tile className = {classes} key = {tileKey}>
        <TileHeader>{header}</TileHeader>
        <TileDesc>{desc}</TileDesc>
        <TileImg src={imgSrc}/>
    </Tile>;
};

export default SolutionsTile;