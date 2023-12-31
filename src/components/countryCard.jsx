import { Link } from "react-router-dom";
function countryCard({ name, population, region, capital, img }) {
  return (
    <article className="w-64 h-80 dark:bg-darkBlue mb-16 overflow-hidden dark:shadow-none shadow-borderShadow">
      <img src={img} className="w-full h-[50%]" />
      <div className="p-5">
        <Link
          to={`/country/${name}`}
          className="dark:text-white font-NunitoSansMedium"
        >
          {" "}
          {name}
        </Link>
        <div className="mt-2">
          <div className="flex gap-1 dark:text-white font-NunitoSansMedium text-sm">
            Population:{" "}
            <span className="font-NunitoSansExtraLight">{population}</span>
          </div>
          <div className="flex gap-1 dark:text-white font-NunitoSansMedium text-sm">
            Region: <span className="font-NunitoSansExtraLight">{region}</span>
          </div>
          <div className="flex gap-1 dark:text-white font-NunitoSansMedium text-sm">
            Capital:{" "}
            <span className="font-NunitoSansExtraLight">{capital}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default countryCard;
