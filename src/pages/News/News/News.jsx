import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
  //const [newsDetail, setNewsDetail] = useState({});
  const newsDetail = useLoaderData();
  console.log('hi', newsDetail);
  // const params = useParams();

  // useEffect(() => {
  //   fetch(`https://the-dragon-news-server-smy329-gmailcom.vercel.app/news/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setNewsDetail(data));
  // }, []);
  const {
    _id,
    title,
    details,
    author,
    image_url,
    total_view,
    rating,
    category_id,
  } = newsDetail;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">See All News in This Category</Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorsInsight />
    </div>
  );
};

export default News;
