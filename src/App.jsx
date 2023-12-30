import { useSelector } from "react-redux";
import Header from "./components/Header";
import Countries from "./components/countries";

function App() {
  const CountriesArray = useSelector((state) => state.allCountries);

  console.log(CountriesArray.length);
  return (
    <>
      <Header />
      <Countries />
    </>
  );
}

export default App;
