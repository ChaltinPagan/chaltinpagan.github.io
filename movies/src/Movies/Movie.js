import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, year, genre, director, actors, link, img }) => (
  <div>
    <div className="content">
      <img alt={title} src={img} />
      <h2> Title: {title} </h2>
      <h2> Year: {year} </h2>
      <h2> Genre: {genre.join(", ")} </h2>
      <h2> Director: {director.join(", ")} </h2>
      <h2> Actors: {actors.join(", ")} </h2>
      <h3>
        <a href={link} target="_blank"> IMDB profile
        <img className="external-link" 
          alt="to IMDB"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGGSURBVGhD7ZnNSQNRFEZjBfZgF7pRsQVBsADBKhQbcONW1IUbS9CFoJA+7MAO9PuQB5fhJjP3x8wj3AMHQsJ7b07eJGQmi6Ioiq3jBD7AN6Ov8ABqnEJtzJi30MUN/An4DffhkB14B7Ux6/yEZrgT2mRWM2NcIU9Qm8xjVowr5B3KSZ7hRcAzyAMfYolxhXCQnOQS/heMeYRyPc3uQ/bgF5TraXYdMjWCdhtiiaBdhqyL4PPaZ6a7kLEIvq59m3UVMiWiMYzpJsQS0ZAxXYR4IhotZvaQSESDMed/D21khWREhMgIiUZwF8JEQzJ2gqeS9qvZRCQkI4JwzVWXAJPxhmRFEK7JcYxZddk8iickM4K0EOqO8YS8QDmm6YkgMoR+QDOekF24hHKcN4IMQ3hMZryfERkTiSCzhhDG8DSLRJDZQ7KoEEmFJFIhkgpJpEIk2TexPXJNeQw8JjNTbipv2nto5hhqk83pEXRxDbUJ5/AKhuC7wC3V/pzchFz7EBZFUWwNi8UvTW9qAwYJTpsAAAAASUVORK5CYII=" />
        </a>
      </h3>
      <Link to="/movies">
        <img className="external-link"
        alt="back" 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJZSURBVGhD7dnJahRRGMXx1qhvIIlLXTlH30GfxeEJXItKVg4EX8FFoqCi4LBT0UdQULcOEdwpqBD9H+gLTXG6q+5U6cY68IOm6fru/ZKqrlu3R0OGDBnyX2c3TuMCbmEDz8f0+ibOYxX67NxFE1vHN/zt6Ct0zEnseE7gMbbhJtuFjn2EY+g9e7GGP3CTS6FaV6DavWQFb+AmU8JrLKNqDuEj3ARKeo+DqBL9JzSAG7gGjbUfRbMPNU+naV6h6DVzDW6gNj/wofFerKsoEn3Fpnw7qYkz0Cn5dvxeit84iuzoPuEGmCU0EXIAOc08RFZ0x4692TWbCFEz7+COaaM56MxIjpYQrvA005pQlnAX7rgutHZLihZ1W3BFnbYm7sAd19UX7EJ0TsEVdGo3ESQtMC/CFWvqqwk5h+jonHTFJqmJs3DRaXAb3xP8hBvvBqJzD65YMKuJ3FyCG3MT0XkKV0xqNqFMa+QJoqODXDFZqEbavvMX5tTSRoErNqnvi/06oqPdDlesSc3M9dev1lmumNNXM0nrLS1RtGXjCjq1m/mEpCWKMk+LRl2zydHaZl6W8ceRFW2eueKzNJvJfbC6j+zoL6HHTTfALKGZEo+6h1Ek2gBwg7RRM7mbD5dRLNqS0daMG6iml9iDotFm2cJv0IVoG7OPZjRGtS3TEG0w19x1fIHqm9ghOm/1E8AvuMmkUC3VLH5NdIl2AB8g9qY5ScfqPnEEOx6tALSE+Aw3WUef1TN49h27RrSoU1N6BNCzg34AfTam13pPS3FNPnkBOGTIkCGLntHoH0OkkCqEjNAmAAAAAElFTkSuQmCC" />
        To All Movies</Link>
    </div>
  </div>
);

export default Movie;
