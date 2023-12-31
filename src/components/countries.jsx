import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import CountryCard from "./countryCard";
import { useSelector } from "react-redux";

function Countries() {
  const [selectOption, setOption] = useState("None");
  const allCountries = useSelector((state) => state.allCountries);
  const [filteredCountries, setFilteredCountries] = useState(allCountries);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (selectOption === "None") {
      setFilteredCountries(allCountries);
    } else {
      setFilteredCountries(
        allCountries.filter((item) => item.region === selectOption)
      );
    }
  }, [selectOption, allCountries]);
  useEffect(() => {
    if (searchValue == "") {
      setFilteredCountries(allCountries);
    } else {
      setFilteredCountries(
        allCountries.filter((item) => item.name.startsWith(searchValue))
      );
    }
  }, [searchValue, allCountries]);
  return (
    <main className="min-h-[94.1vh] px-12 dark:bg-veryDark min-w-screen flex flex-col">
      <header className="mt-4 flex items-center flex-wrap justify-between">
        <div className="flex gap-3 dark:text-white dark:bg-darkBlue w-1/3 px-3 py-2 h-auto dark:shadow-none shadow-borderShadow">
          <SearchIcon />
          <input
            type="text"
            className="bg-transparent text-xs outline-none"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
        </div>
        <select
          value={selectOption}
          onChange={(e) => {
            setOption(e.target.value);
          }}
          className="h-full w-[150px] text-left px-2 py-2 rounded-md dark:text-white dark:bg-darkBlue dark:shadow-none shadow-borderShadow"
        >
          <option value="None">None</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </header>
      <section className="mt-8 grid grid-cols-4-auto justify-between">
        {filteredCountries.map((item, index) => (
          <CountryCard
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            img={item.flag}
          />
        ))}
      </section>
    </main>
  );
}

export default Countries;
