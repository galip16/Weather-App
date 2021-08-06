import React from "react";
import {
  Segment,
  Button,
  Icon,
  Grid,
  Header,
  Form,
  Input,
} from "semantic-ui-react";

function Navbar({ query, setQuery, searchFunc }) {
  return (
    <>
      <Segment placeholder>
        <Grid columns={1} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="cloud" />
                Weather App
              </Header>
              <Form onSubmit={searchFunc}>
                <Input
                  
                  placeholder="Weather in your city..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
                <br />
                <Button type="submit" fluid circular>
                  Search
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Navbar;
