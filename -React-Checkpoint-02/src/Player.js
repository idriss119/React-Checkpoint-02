
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const imageStyle = {
        height: '150px',
        objectFit: 'cover',
      };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
