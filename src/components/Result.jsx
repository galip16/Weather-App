import React from "react";
import { Card, Image } from "semantic-ui-react";

function Result({ weatherData, img }) {
  return (
    <div>
      {!weatherData.name ? (
        <Card centered>
          <Card.Header>"City not found "</Card.Header>
        </Card>
      ) : (
        <Card centered>
          <Image src={img} wrapped ui={false} />
          <Card.Content textAlign="center">
            <Card.Header>{weatherData.name}</Card.Header>
            <Card.Meta>
              <span className="date">{weatherData.sys.country}</span>
            </Card.Meta>
            <Card.Description>
              {Math.round(weatherData.main.temp - 272)}
              <sup>&deg;</sup>
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            />
            {weatherData.weather[0].description}
          </Card.Content>
        </Card>
      )}
    </div>
  );
}

export default Result;
