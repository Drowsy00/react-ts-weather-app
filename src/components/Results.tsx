type ResultPropsType = {
  results: {
    country: string;
    cityName: string;
    temperture: string;
    conditionText: string;
    icon: string;
  };
};

const Result = ({ results }: ResultPropsType) => {
  const { country, cityName, temperture, conditionText, icon } = results;
  return (
    <>
      {country && <div className="results-country">{country}</div>}
      {cityName && <div className="results-city">{cityName}</div>}
      {cityName && <div>{cityName}</div>}
      {temperture && (
        <div className="results-temp">
          {temperture}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  );
};

export default Result;
