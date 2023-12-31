import Header from "./components/Header";
import Countries from "./components/countries";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/country";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:country" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
