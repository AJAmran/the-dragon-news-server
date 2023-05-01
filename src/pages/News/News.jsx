import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import EditorsInsight from './EditorInsights/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details, image_url, category_id} = news
    return (
       <div>
         <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger">All News in this Category<FaAngleRight></FaAngleRight></Button></Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
       </div>
    );
};

export default News;