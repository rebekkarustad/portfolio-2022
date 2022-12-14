import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import data from "../../data/data.json";

export default function Portfolio() {
  return (
    <div className="content__container">
      <div className="portfolio__container">
        <h1>Portfolio 2022</h1>
        {data.map((data) => {
          return (
            <Card key={data.id}>
              <Card.Body>
                <Card.Img variant="top" src={data.img} />
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <Button href={data.repo} size="sm" target="_blank">
                  GitHub Repo
                </Button>
                {data.live === "" ? (
                  <Button href="/" size="sm" disabled>
                    Live Site
                  </Button>
                ) : (
                  <Button href={data.live} size="sm" target="_blank">
                    Live Site
                  </Button>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
