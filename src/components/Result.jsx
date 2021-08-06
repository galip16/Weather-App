import React from "react";
import { Card, Image } from "semantic-ui-react";

function Result({ weatherData }) {
  return (
    <div>
      <Card centered>
        <Image
          src="https://lovingnewyork.de/wp-content/uploads/2020/02/Empire-State-Building-180125161749001-1-1600x960.jpg"
          wrapped
          ui={false}
        />
        <Card.Content textAlign="center">
          <Card.Header>
            {" "}
            {weatherData.name ? weatherData.name : "city not found"}{" "}
          </Card.Header>
          <Card.Meta>
            <span className="date">{weatherData.sys.country}</span>
          </Card.Meta>
          <Card.Description>
            {" "}
            {Math.round(weatherData.main.temp - 272)}
            <sup>&deg;</sup>
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign="center" extra>
          {" "}
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          />
          {weatherData.weather[0].description}
        </Card.Content>
      </Card>
    </div>
  );
}

export default Result;
