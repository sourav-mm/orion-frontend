import React, { useEffect, useState } from 'react';
import AXIOS from 'axios';
import { Link } from 'react-router-dom';
import Menu1 from '../../../common/Menu/Menu1';
import { Button, Card } from "react-bootstrap";  // Import Card from react-bootstrap
import './FavoritePage.css';  // Import your custom CSS for styling
import Footer from '../../../common/Footer/Footer';

function FavoritePage() {
  const [users, setUsers] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleDelete = (idno) => {
    const url = `http://orion-frontend-api.vercel.app/deletefav/${idno}`;
    AXIOS.delete(url)
      .then((res) => {
        alert(res.data);
        // After deletion, fetch the updated list of favorites
        fetchData();
      })
      .catch((err) => {
        console.error('Error deleting item:', err);
      });
  };

  const fetchData = () => {
    // Fetch data from the 'favoritePage' endpoint
    AXIOS.get('http://orion-frontend-api.vercel.app/favoritePage')
      .then((res) => {
        // Update the state with the fetched data
        setUsers(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  useEffect(() => {
    // Fetch data on component mount
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    document.body.classList.add('favorite-page-body');
    return () => {
      document.body.classList.remove('favorite-page-body');
    };
  }, []);

  return (
    <>
      <Menu1 header_style_2={true} />
      <br />
      
<div className='centered-container'>
  <h2>Your favorite list</h2>
</div>


      <div className="favorite-container">
        {users.map((user) => (
          <Card
          style={{
            width: "16rem",
            border: "none",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            
            position: "relative",
            margin: "0 10px 20px", // Adjust the margin value
          }}
            key={user._id}
            className="favorite-card"
            onMouseEnter={() => setHoveredItem(user._id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Card.Img variant="top" src={`http://orion-frontend-api.vercel.app/${user.image}`} />
            <Card.Body>
              <Card.Title>{user.productname}</Card.Title>
              <Card.Text>{user.description}</Card.Text>
              <Button
                className="btn btn-danger"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default FavoritePage;
