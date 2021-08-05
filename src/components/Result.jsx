import React, { useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

function Result({ weatherData }) {
  return (
    <div>
      <Card centered>
        <Image
          src="https://lovingnewyork.de/wp-content/uploads/2020/02/Empire-State-Building-180125161749001-1-1600x960.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>
            {" "}
            {weatherData.name ? weatherData.name : "city not found"}{" "}
          </Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Result;
