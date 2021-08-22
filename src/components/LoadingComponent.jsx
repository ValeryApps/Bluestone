import _ from "lodash";
import { Card, Container, Placeholder } from "semantic-ui-react";

const cards = [
  {
    avatar: "/images/avatar/large/helen.jpg",
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact",
  },
  {
    avatar: "/images/avatar/large/matthew.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact",
  },
  {
    avatar: "/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact",
  },
];

const LoadingComponent = () => {
  return (
    <>
      <Container>
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </>
  );
};

export default LoadingComponent;
