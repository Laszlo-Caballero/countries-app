import { useParams } from "react-router-dom";

function CountryPage() {
  let { country } = useParams();
  return (
    <div>
      <h1>{country}</h1>
    </div>
  );
}

export default CountryPage;
