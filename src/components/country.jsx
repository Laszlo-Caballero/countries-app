function Country({ name, population, region, capital, img }) {
  return (
    <article className="w-64 h-80 dark:bg-darkBlue mb-16 overflow-hidden">
      <img src={img} className="h-auto w-auto" />
      <div className="p-5">
        <p className="dark:text-white font-NunitoSansMedium">{name}</p>
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

export default Country;
