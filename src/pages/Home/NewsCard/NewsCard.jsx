import moment from "moment";
import React from "react";
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{height:'45px'}} src={author?.img} roundedCircle />
      <div className="ps-2 flex-grow-1">
        <p className="mb-0">{author?.name}</p>
        <p><small>{moment(author?.published_date).format('MMMM Do YYYY')}</small></p>
      </div>
      <div>
        <FaRegBookmark></FaRegBookmark>
        <FaShareAlt></FaShareAlt>
      </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url} alt="Card image" />
        <Card.Text>
         {details.length < 250 ? <>{details}</> :
         <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1"> 
            <Rating
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            readonly
            fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
