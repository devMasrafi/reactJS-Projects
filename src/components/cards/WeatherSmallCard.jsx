const WeatherSmallCard = ({ title, details }) => {
  return (
    <div className="capitalize text-center p-5 border rounded-2xl w-40 h-full text-nowrap">
      <h2 className="text-3xl  underline underline-offset-8 pb-2">
        {title ? title : "loading..."}
      </h2>
      <p className="capitalize">{details ? details : "loading..."}</p>
    </div>
  );
};

export default WeatherSmallCard;
