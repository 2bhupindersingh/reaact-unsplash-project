import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const GallaryForm = () => {
  const [inputValue, setInputvalue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (event) => {
    setInputvalue(event.target.value);
  };

  const apiURL =
    "https://api.unsplash.com/search/photos?client_id=Ta0aWVmgbxyO49Lp73kDJRbnVN-XvXySkwcvObjOWaQ&query=office";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL, {});
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPhotos = data.filter((photo) =>
    photo.alt_description.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    filteredPhotos();
  };

  return (
    <>
      <Form
        className="d-flex justify-content-center mt-3 mb-3"
        onSubmit={handleSubmit}
      >
        <Form.Group className="me-2" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Search image..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <Row>
        {filteredPhotos.map((item) => (
          <Col lg={4} md={4} sm={6} xs={12} key={item.id}>
            <div className="gallary-image-card">
              <img src={item.urls.small} alt={item.alt_description} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GallaryForm;
