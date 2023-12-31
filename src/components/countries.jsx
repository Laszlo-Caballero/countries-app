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
    <main className="min-h-[94.1vh] lg:px-12 dark:bg-veryDark min-w-screen flex flex-col mobile:px-5">
      <header className="mt-4 flex lg:items-center lg:flex-wrap lg:justify-between mobile:flex-col lg:flex-row">
        <div className="flex gap-3 dark:text-white dark:bg-darkBlue lg:w-1/3 px-3 py-2 h-auto dark:shadow-none shadow-borderShadow mobile:w-full">
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
          className="h-full lg:w-[150px] mobile:w-1/2 text-left px-2 py-2 rounded-md dark:text-white dark:bg-darkBlue dark:shadow-none shadow-borderShadow mobile:mt-8 lg:mt-0"
        >
          <option value="None">None</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </header>
      <section className="mt-8 lg:grid lg:grid-cols-4-auto lg:justify-between mobile:flex mobile:flex-col mobile:items-center">
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
