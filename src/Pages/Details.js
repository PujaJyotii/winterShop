import { Button, Carousel, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../Redux/CartSlice";

const christmasProducts = [
  {
    name: "Scented Christmas Candle",
    image:
      "https://cbx-prod.b-cdn.net/COLOURBOX23044787.jpg?width=800&height=800&quality=70", // Replace with actual image path
    additionalImages: [
      "https://cbx-prod.b-cdn.net/COLOURBOX23044787.jpg?width=800&height=800&quality=70",
      "https://cbx-prod.b-cdn.net/COLOURBOX23044787.jpg?width=800&height=800&quality=70",
    ],
    price: 300,
    description:
      "A beautifully scented candle perfect for adding a warm and festive glow to your home.",
    colors: ["Red", "Green", "Gold"],
    reviews: [
      { rating: 5, comment: "Smells amazing and lasts a long time!" },
      { rating: 4, comment: "Beautiful design, great for gifts." },
    ],
  },
  {
    name: "Twinkling Christmas Lights",
    image:
      "https://i5.walmartimages.com/seo/yellow-111111111111111111111_c3b055e2-c1d2-4ec5-9090-76750a57faf7.f19018b87cfc407815cb543df3fefb16.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF",
    additionalImages: [
      "https://i5.walmartimages.com/seo/yellow-111111111111111111111_c3b055e2-c1d2-4ec5-9090-76750a57faf7.f19018b87cfc407815cb543df3fefb16.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF",
      "https://i5.walmartimages.com/seo/yellow-111111111111111111111_c3b055e2-c1d2-4ec5-9090-76750a57faf7.f19018b87cfc407815cb543df3fefb16.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF",
    ],
    price: 500,
    description:
      "Bright and colorful LED Christmas lights for indoor and outdoor decorations.",
    colors: ["Multi-color", "Warm White"],
    reviews: [
      { rating: 5, comment: "Great brightness and easy to set up!" },
      { rating: 4, comment: "Durable and festive." },
    ],
  },
  {
    name: "Christmas Cupcake Set",
    image:
      "https://sugaholic.com/image/cache/catalog/product/Cupcakes-800x800.jpeg",
    additionalImages: [
      "https://sugaholic.com/image/cache/catalog/product/Cupcakes-800x800.jpeg",
      "https://sugaholic.com/image/cache/catalog/product/Cupcakes-800x800.jpeg",
    ],
    price: 900,
    description:
      "A set of festive cupcake liners and toppers to make your Christmas treats extra special.",
    colors: ["Red & White", "Green & Gold"],
    reviews: [
      { rating: 5, comment: "Perfect for holiday baking!" },
      { rating: 4, comment: "Good quality and very cute designs." },
    ],
  },
  {
    name: "Winter Gloves",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMMYpDU_4294Vr8hb7sOw7ebsS_Vx5rSWPA&s",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMMYpDU_4294Vr8hb7sOw7ebsS_Vx5rSWPA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMMYpDU_4294Vr8hb7sOw7ebsS_Vx5rSWPA&s",
    ],
    price: 600,
    description:
      "Cozy gloves with a soft fleece lining to keep your hands warm during winter.",
    colors: ["Black", "Gray", "Blue"],
    reviews: [
      { rating: 5, comment: "Very comfortable and warm!" },
      { rating: 4, comment: "Good fit and stylish." },
    ],
  },
  {
    name: "Knitted Scarf",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloIKSxy_5j4INiJFR0FlznTq-mUpajQsZjQ&s",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloIKSxy_5j4INiJFR0FlznTq-mUpajQsZjQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloIKSxy_5j4INiJFR0FlznTq-mUpajQsZjQ&s",
    ],
    price: 800,
    description: "A soft and stylish knitted scarf perfect for winter outfits.",
    colors: ["Red", "White", "Navy"],
    reviews: [
      { rating: 5, comment: "Beautiful and warm!" },
      { rating: 4, comment: "Matches my Christmas outfit perfectly." },
    ],
  },
  {
    name: "Winter Cap",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOyaCbKkMRwQSSGn4GJvK2OUPAUU8jba2RQ&s",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOyaCbKkMRwQSSGn4GJvK2OUPAUU8jba2RQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOyaCbKkMRwQSSGn4GJvK2OUPAUU8jba2RQ&s",
    ],
    price: 400,
    description:
      "A cute winter cap with a pom-pom to keep your head cozy during the chilly season.",
    colors: ["Green", "Red", "Gray"],
    reviews: [
      { rating: 5, comment: "Super cute and fits well!" },
      { rating: 4, comment: "Nice material and warm." },
    ],
  },
  {
    name: "Festive Socks",
    image:
      "https://c8.alamy.com/comp/PK846M/festive-socks-and-mug-with-hot-drink-on-old-wooden-chair-on-background-of-golden-beautiful-christmas-tree-with-lights-in-festive-room-cozy-winter-hol-PK846M.jpg",
    additionalImages: [
      "https://c8.alamy.com/comp/PK846M/festive-socks-and-mug-with-hot-drink-on-old-wooden-chair-on-background-of-golden-beautiful-christmas-tree-with-lights-in-festive-room-cozy-winter-hol-PK846M.jpg",
      "https://c8.alamy.com/comp/PK846M/festive-socks-and-mug-with-hot-drink-on-old-wooden-chair-on-background-of-golden-beautiful-christmas-tree-with-lights-in-festive-room-cozy-winter-hol-PK846M.jpg",
    ],
    price: 200,
    description: "Soft and colorful socks with Christmas-themed patterns.",
    colors: ["Multi-color"],
    reviews: [
      { rating: 5, comment: "Perfect stocking stuffer!" },
      { rating: 4, comment: "Good quality for the price." },
    ],
  },
  {
    name: "Christmas Hair Band",
    image:
      "https://image.made-in-china.com/2f0j00aEckvMBtgWuO/Christmas-Hair-Accessories-Super-Fairy-Cute-Cartoon-Fabric-Elk-Santa-Claus-Hair-Band.webp",
    additionalImages: [
      "https://image.made-in-china.com/2f0j00aEckvMBtgWuO/Christmas-Hair-Accessories-Super-Fairy-Cute-Cartoon-Fabric-Elk-Santa-Claus-Hair-Band.webp",
      "https://image.made-in-china.com/2f0j00aEckvMBtgWuO/Christmas-Hair-Accessories-Super-Fairy-Cute-Cartoon-Fabric-Elk-Santa-Claus-Hair-Band.webp",
    ],
    price: 400,
    description:
      "Festive hair band featuring Christmas designs, perfect for kids and adults.",
    colors: ["Red", "Green", "Gold"],
    reviews: [
      { rating: 5, comment: "Adorable and great for holiday photos!" },
      { rating: 4, comment: "Good quality and comfortable to wear." },
    ],
  },
  {
    name: "Christmas Sweater",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHiHayMXrkuoeZrm3oPqCtKUPo-BmlA0Zkw&s",
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHiHayMXrkuoeZrm3oPqCtKUPo-BmlA0Zkw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHiHayMXrkuoeZrm3oPqCtKUPo-BmlA0Zkw&s",
    ],
    price: 1200,
    description: "A cozy Christmas sweater with fun and festive patterns.",
    colors: ["Red", "Green", "Blue"],
    reviews: [
      { rating: 5, comment: "Great fit and super festive!" },
      { rating: 4, comment: "Nice design and comfortable material." },
    ],
  },
];
function Details() {
  const { name } = useParams();
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);

  const products = christmasProducts.find((item) => item.name === name);
  let addHandler = async (el) => {
    let index = cart.findIndex((item) => item.name === el.name);
    if (index === -1) {
      let obj = { ...el, quantity: 1 };
      try {
        let resp = await fetch(
          "https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart.json",
          {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let data = await resp.json();
        dispatch(cartAction.add({ ...el, quantity: 1, id: data.name }));
      } catch (err) {
        console.log(err);
      }
    } else {
      let obj = { ...cart[index], quantity: cart[index].quantity + 1 };
      try {
        let resp = await fetch(
          `https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart/${cart[index].id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!resp.ok) {
          throw new Error(resp.status);
        }
        let data = await resp.json();
        console.log(data);
        dispatch(cartAction.add(el));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Row className={classes.box}>
        <Col className={classes.box1}>
          <Carousel>
            {products.additionalImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: "400px", objectFit: "cover" }} // Optional styling
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col className={classes.box2}>
          <div>{products.name}</div>
          <div>Price:Rs{products.price}</div>
          <div>{products.description}</div>
          <div>
            {products.colors[0]} . {products.colors[1]} . {products.colors[2]}
          </div>
          <div>
            <ul>
              {products.reviews.map((el, index) => (
                <li key={index}>
                  Rating: {el.rating} . {el.comment}
                </li>
              ))}
            </ul>
          </div>
          <Button variant="light" onClick={() => addHandler(products)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Details;
