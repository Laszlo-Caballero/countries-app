import { useState, useEffect } from "react";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
function Header() {
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className="flex dark:bg-darkBlue h-14 min-w-screen items-center px-12 dark:text-white text-darkBlue justify-between">
      <p className="font-NunitoSansBlod">Where in te world?</p>
      <button
        className="text-sm flex gap-3 font-NunitoSansLight"
        onClick={() => {
          setDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? <DarkModeRoundedIcon /> : <DarkModeOutlinedIcon />}Dark
        Mode
      </button>
    </header>
  );
}

export default Header;
