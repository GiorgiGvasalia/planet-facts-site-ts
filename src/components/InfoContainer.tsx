import React from 'react';
import styled from 'styled-components';
import { InfoOptions } from './InfoOptions'; // Adjust the path

const Container = styled.div`
  width: 260px;
`;

const Type = styled.div<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? '#419EBB' : '')};
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
  margin-bottom: 10px;
  border: 1px solid white;

  &:hover {
    background-color: #419EBB;
  }
`;

interface InfoContainerProps {
  infoType: InfoOptions | null;
  onInfoTypeChange: (infoType: InfoOptions) => void;
}

const InfoContainer: React.FC<InfoContainerProps> = ({ infoType, onInfoTypeChange }) => {
  return (
    <Container>
      <Type
        selected={infoType === InfoOptions.OVERVIEW}
        onClick={() => onInfoTypeChange(InfoOptions.OVERVIEW)}
      >
        Overview
      </Type>
      <Type
        selected={infoType === InfoOptions.STRUCTURE}
        onClick={() => onInfoTypeChange(InfoOptions.STRUCTURE)}
      >
        Structure
      </Type>
      <Type
        selected={infoType === InfoOptions.GEOLOGY}
        onClick={() => onInfoTypeChange(InfoOptions.GEOLOGY)}
      >
        Geology
      </Type>
    </Container>
  );
};

export default InfoContainer;
