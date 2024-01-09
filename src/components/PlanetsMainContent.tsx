import React from "react";
import styled from "styled-components";
import { InfoOptions } from "./InfoOptions";
import InfoContainer from "./InfoContainer";
import PlanetImg from "./PlanetImg";

interface PlanetsInfoProps {
  planetName: string;
  overView: string;
  infoType: InfoOptions | null;
  onInfoTypeChange: (infoType: InfoOptions) => void;
  img: string;
}

const PlanetName = styled.h2`
  color: #fff;
  font-size: 65px;
  font-weight: 400;
  text-transform: uppercase;
`;

const OverView = styled.span`
  color: #fff;
  font-family: 'Spartan';
  font-size: 14px;
  font-weight: 400;
  width: 300px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PlanetsMainContent: React.FC<PlanetsInfoProps> = ({
  planetName,
  overView,
  infoType,
  onInfoTypeChange,
  img,
}) => {
  return (
    <ContentWrapper>
      <PlanetImg img={img} />
      <InfoWrapper>
        <PlanetName>{planetName}</PlanetName>
        <OverView>{overView}</OverView>
        <InfoContainer
          infoType={infoType}
          onInfoTypeChange={onInfoTypeChange}
        />
      </InfoWrapper>
    </ContentWrapper>
  );
};

export default PlanetsMainContent;
