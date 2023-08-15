import React from "react";
import { Container, Row, Col,Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px", marginBottom: "30px" }}>
        <h1>Who we are</h1>
        <p>
        Welcome to our extraordinary pizza website, where we take the art of pizza-making to new
        heights. Our story is one of passion, creativity, and a deep love for great food. 
        As pizza enthusiasts ourselves, we embarked on a mission to create a platform that 
        celebrates the timeless delight of a perfect pizza.
        Behind every slice is a journey of flavors, carefully orchestrated by our skilled chefs.
        We meticulously source only the finest ingredients, from sun-ripened tomatoes to handpicked herbs, 
        to craft pizzas that are not just meals but experiences. Our commitment to quality resonates in every
        bite, delivering a symphony of tastes that dance on your palate.
        Our menu is a testament to our dedication to diversity. From classic Margheritas that pay homage to 
        tradition, to bold and imaginative combinations that push culinary boundaries, there's a pizza for 
        every craving. Gluten-free, vegetarian, or a carnivore's dream – we cater to all preferences without compromising on taste or quality.
        Ordering through our app is an effortless experience. Just a few taps, and you're on your way to savoring a slice of heaven. Our team ensures each pizza is handcrafted with precision, passion, and a dash of innovation. As your pizza bakes to perfection, you become a part of our story – a story that values authenticity, community, and the shared love for good food.
        Join us on this gastronomic adventure where passion meets flavor. Discover not just pizzas, but a culinary journey that celebrates the artistry and joy of dining. Your next memorable pizza experience is just a click away.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            At GIRI's Pizza, our passion for crafting exceptional pizzas is matched only by our commitment to creating memorable dining experiences. Established with a vision to redefine pizza perfection, we have proudly become a beloved culinary destination.
Our journey began with a simple belief: that a pizza isn't just a dish; it's a canvas where flavors dance in harmony. Every ingredient tells a story, and every slice is a testament to our dedication to excellence. From the moment our dough is kneaded to perfection, to the artful selection of farm-fresh toppings, each step is a labor of love.
What sets us apart is our unyielding pursuit of innovation. Our menu boasts a symphony of classic favorites and daring creations, all masterfully prepared by our skilled chefs. Whether you're savoring a traditional Margherita or indulging in our signature Gourmet Fusion series, expect a culinary journey that transcends expectations.
Yet, GIRI's Pizza is more than just a restaurant; it's a celebration of community and shared joy. From family gatherings to intimate dinners, our cozy ambiance welcomes all. We take pride in being a part of your cherished moments, ensuring that every bite is a taste of happiness.
Join us at GIRI's Pizza and experience a symphony of flavors that tell a story of dedication, creativity, and a love for exceptional food. Come share in the warmth of our kitchen and the delight of our pizzas – a true reflection of who we are.As you step into GIRI's Pizza, you become part of our narrative – a story written by the sizzle
 of our ovens, the aroma of fresh ingredients, and the smiles of satisfied patrons. Join us on a culinary expedition that celebrates tradition, innovation, and the pure pleasure of savoring a slice of heaven. Welcome to GIRI's Pizza, where every pizza tells a tale of passion and flavor.
 As you step into GIRI's Pizza, you become part of our narrative – a story written by the sizzle of our ovens, the aroma of fresh ingredients, and the smiles of satisfied patrons. Join us on a culinary expedition that celebrates tradition, innovation, and the pure pleasure of savoring a slice of heaven. Welcome to GIRI's Pizza, where every pizza tells a tale of passion and flavor.
            </p>
          </Col>
          
          <Col md={6}>
            <Image src="images/pizaaslice.jpg" alt="Ritesh Giri Master chef" style={{ width: "100%", height: "90%" }}></Image>
          </Col>
        </Row>
        <Row>
          <h1>Our Chef</h1>
          <Col md={3}>

          <Image src="images/chef_1.jpg" alt="Ritesh Giri Master chef" style={{ width: "100%", height: "100%" }}></Image>
          
          </Col>
          <Col md={3}>

          <Image src="images/chef2.jpg" alt="Ritesh Giri Master chef" style={{ width: "100%", height: "100%" }}></Image>
          

          </Col>
          <Col md={3}>
            
            <Image src="images/chef3.jpg" alt="Ritesh Giri Master chef" style={{ width: "100%", height: "100%" }}></Image>
         
            
          </Col>
          <Col md={3}>

          <Image src="images/chef4.jpeg" alt="Ritesh Giri Master chef" style={{ width: "100%", height: "100%" }}></Image>
          
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
