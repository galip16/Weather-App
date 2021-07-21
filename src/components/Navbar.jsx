import React from "react";
import {
  Segment,
  Input,
  Button,
  Icon,
  Form,
  Modal,
  Label,
  Grid,
  Header,
  Search,
  Divider,
} from "semantic-ui-react";

function Navbar() {
  return (
    <>
      <Segment placeholder>
        <Grid columns={1} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Which City?
              </Header>

              <Search placeholder="Search..." />
              <br />
              <Button fluid circular>
                Search
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Navbar;
