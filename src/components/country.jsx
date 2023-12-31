import { Link, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useSelector } from "react-redux";

function CountryPage() {
  let { country } = useParams();
  const countryRender = useSelector((state) => state.allCountries).find(
    (element) => element.name == country
  );
  const countriesNames = useSelector((state) => state.allCountries).filter(
    (item) => {
      return (
        countryRender.borders && countryRender.borders.includes(item.alpha3Code)
      );
    }
  );

  return (
    <main className="dark:bg-veryDark dark:text-white min-h-[94.1vh] px-12 py-16 flex flex-col">
      <div className="dark:bg-darkBlue w-32 flex items-center justify-center py-2 dark:shadow-none shadow-borderShadow">
        <Link to="/" className="flex gap-2">
          <KeyboardBackspaceIcon /> Back
        </Link>
      </div>
      <section className="w-full mt-14 flex h-[28em]">
        <img src={countryRender.flag} className="w-1/2" />
        <article className="w-1/2 flex pl-28 flex-col mt-10">
          <p className="font-NunitoSansBlod text-3xl w-full">
            {countryRender.name}
          </p>
          <div className="w-full flex mt-10">
            <div className="w-1/2">
              <p className="mb-2">
                Native Name:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.nativeName}
                </span>
              </p>
              <p className="mb-2">
                Population:{" "}
                <span className="font-NunitoSansExtraLight">
                  {countryRender.population}
                </span>
              </p>
              <p className="mb-2">
                Region:{" "}
                <span className="font-NunitoSansExtraLight">
                  {countryRender.region}
                </span>
              </p>
              <p className="mb-2">
                Sub Region:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.subregion}
                </span>
              </p>
              <p>
                Capital:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.capital}
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <p className="mb-2">
                Top Level Domain:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.topLevelDomain}
                </span>
              </p>
              <p className="mb-2">
                Currencies:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.currencies[0].name}
                </span>
              </p>
              <p>
                Languages:
                <span className="font-NunitoSansExtraLight">
                  {countryRender.languages
                    .map((item) => {
                      return item.name;
                    })
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          {countryRender.borders && (
            <footer className="mt-16">
              <p>Border Countries:</p>
              <div className="flex flex-wrap gap-5 mt-2">
                {countriesNames.map((item, index) => (
                  <Link
                    to={`/country/${item.name}`}
                    key={index}
                    className="dark:bg-darkBlue px-5 py-1 font-NunitoSansExtraLight text-sm dark:shadow-none shadow-borderShadow"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </footer>
          )}
        </article>
      </section>
    </main>
  );
}

export default CountryPage;
