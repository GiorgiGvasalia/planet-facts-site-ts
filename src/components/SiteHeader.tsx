import React from "react";
import styled from "styled-components";

interface Planet {
  name: string;
}

const PlanetName = styled.p`
  color: #fff;
  font-family: "Spartan";
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const PlanetsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FFFFFF;
`;

export const SiteTitle = styled.h1`
  color: #fff;
  font-family: Antonio;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
`;

const SiteHeader: React.FC<Planet> = ({ name }) => {
  return <PlanetName>{name}</PlanetName>;
};

export default SiteHeader;
