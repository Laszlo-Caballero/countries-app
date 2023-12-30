import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Countries() {
  const [selectOption, setOption] = useState("None");
  return (
    <main className="min-h-screen px-12 dark:bg-veryDark min-w-screen flex flex-col">
      <header className="mt-4 flex items-center flex-wrap justify-between">
        <div className="flex gap-3 dark:text-white dark:bg-darkBlue w-1/3 px-3 py-2 h-auto">
          <SearchIcon />
          <input type="text" className="bg-transparent text-xs outline-none" />
        </div>
        <select
          value={selectOption}
          onChange={(e) => {
            setOption(e.target.value);
          }}
          className="h-full w-[150px] text-left px-2 py-2 rounded-md dark:text-white dark:bg-darkBlue"
        >
          <option value="None">None</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </header>
      <section>asdasd</section>
    </main>
  );
}

export default Countries;
