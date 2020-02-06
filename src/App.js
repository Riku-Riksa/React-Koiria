import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'


import { useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const dogs = gql`
{
  dogs {
    imageUrl
    breed
    color
    name
    description
  }
}
`;

function App() {
  const {data, loading, error} = useQuery(dogs);

  if (loading) return <img src="https://i.pinimg.com/originals/9e/0a/85/9e0a8567f01987492a3f23b43b69663d.gif" className="load"></img>
  if (error) return <p>Error {error.message}</p>
  return (
    <>
    {data && data.dogs.map((dog, i) => (
      <div key = {i}>
        <CardGroup style={{}}>
        <Card bg="secondary" border="dark">
          <Card.Img variant="top" src={dog.imageUrl}></Card.Img>
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
            <Card.Text>{dog.description}</Card.Text>
          </Card.Body>
          <Card.Footer>Breed: {dog.breed}</Card.Footer>
          <Badge pill variant ="success">Good boy!</Badge>
        </Card>
        </CardGroup>
      </div>
    ))}
    </>
    
  );
}

export default App;
