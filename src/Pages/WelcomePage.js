import { Card } from "react-bootstrap";
import classes from "./Welcome.module.css";

function Welcome() {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Card.Title>
          Wishing You a Merry Christmas and a Cozy Winter Ahead!
        </Card.Title>

        <Card.Text>
          The holiday season is here, and with it comes the joy, warmth, and
          togetherness that Christmas brings. We wish you and your loved ones a
          Merry Christmas filled with happiness, laughter, and cherished
          moments. As the snowflakes fall and the air turns crisp, it's the
          perfect time to embrace the magic of this festive season and prepare
          for the colder days ahead. Christmas is not just a season; it's a
          feeling—a time to express gratitude, exchange gifts, and make memories
          that last a lifetime. The glow of twinkling lights, the aroma of
          freshly baked treats, and the sound of carols fill our hearts with
          warmth. As you celebrate, we encourage you to indulge in the spirit of
          giving, whether it's through thoughtful presents for your family or a
          little something special for yourself. With winter in full swing,
          staying warm and comfortable is essential. From cozy blankets and
          sweaters to stylish boots and winter accessories, there's no better
          time to treat yourself to items that will keep you snug during the
          chilly months. Whether you're planning a snowy adventure or a quiet
          evening by the fireplace, having the right essentials makes all the
          difference. Our store is brimming with options to make your winter
          wonderful. Looking for a unique gift for someone special? We’ve got
          you covered with a curated selection of items perfect for spreading
          holiday cheer. And don't forget to check out our winter
          must-haves—because staying warm never goes out of style! As you
          prepare for the festivities, remember that the best gifts often come
          from the heart. A handwritten note, a warm hug, or a thoughtful
          gesture can mean just as much as a beautifully wrapped package. So,
          while you shop for your loved ones, take a moment to reflect on the
          simple joys that make this season so special. From all of us, Merry
          Christmas and a Happy New Year! May your holiday season be filled with
          love, laughter, and all the warmth you need to welcome a bright and
          beautiful winter. Stay safe, stay cozy, and let the festive spirit
          fill your heart and home.
        </Card.Text>
      </Card.Body>
      <Card.Footer variant="light">Warm wishes,Puja</Card.Footer>
    </Card>
  );
}

export default Welcome;
