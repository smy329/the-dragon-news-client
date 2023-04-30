import moment from 'moment';
import React, { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const NewsCard = ({ cn }) => {
  const { _id, title, details, author, image_url, total_view, rating } = cn;
  //   const [readMore, setReadMore] = useState(true);

  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format('YYYY-MM-D, h:mm:ss a')}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {/* {readMore ? <> {details.slice(0, 250)}... </> : details} &nbsp;
            <span
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <Link>{readMore ? 'read more' : 'hide'}</Link>
            </span> */}
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{' '}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 d-flex align-items-center">
            <Rating style={{ maxWidth: 130 }} value={rating?.number} readOnly />

            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
