function Destination(props) {
  const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;
  return (
    <div className="destination">
      <div className="grid">
        <img src={imageUrl} className="grid-img" />

        <div className="grid-desc">
          <p className="location">
            <img src="src\assets\pin.png" />
            {location}
            <span>
              <a href={googleMapsUrl} target="_blank">
                View on Google Maps
              </a>
            </span>
          </p>
          <h1>{title}</h1>
          <p className="date">{startDate} - {endDate}</p>
          <p className="desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
