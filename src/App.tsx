import SiteHeader, { HeaderWrapper, PlanetsWrapper, SiteTitle } from "./components/SiteHeader";
import data from "../data.json";

console.log(data[0].name);


const App = () => {
  return (
    <HeaderWrapper>
      <SiteTitle>THE PLANETS</SiteTitle>
      <PlanetsWrapper>
        {data.map((planet, index) => (
          <SiteHeader key={index} name={planet.name} />
        ))}
      </PlanetsWrapper>
    </HeaderWrapper>
  );
};

export default App;
