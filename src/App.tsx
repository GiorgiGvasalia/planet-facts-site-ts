import React, { useState } from "react";
import SiteHeader, {
  HeaderWrapper,
  PlanetsWrapper,
  SiteTitle,
} from "./components/SiteHeader";
import PlanetsMainContent from "./components/PlanetsMainContent";
import data from "../data.json";
import { InfoOptions } from "./components/InfoOptions";

const App = () => {
  const [selectedInfoType, setSelectedInfoType] = useState<InfoOptions | null>(
    null
  );

  const handleInfoTypeChange = (newInfoType: InfoOptions) => {
    setSelectedInfoType(newInfoType);
  };

  return (
    <>
      <HeaderWrapper>
        <SiteTitle>THE PLANETS</SiteTitle>
        <PlanetsWrapper>
          {data.map((planet, index) => (
            <SiteHeader key={index} name={planet.name} />
          ))}
        </PlanetsWrapper>
      </HeaderWrapper>
      <PlanetsMainContent
        img={data[0].images.planet}
        planetName={data[0].name}
        overView={data[0].overview.content}
        infoType={selectedInfoType}
        onInfoTypeChange={handleInfoTypeChange}
      />
    </>
  );
};

export default App;
