import React, { useState, useEffect } from 'react';
import { Banner } from '../../components';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "food/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "food/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "food/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [image, useImage] = useState(imageData['img1'].childImageSharp.fluid);

  const handleImage = () => {
    const numberImage = Math.floor(Math.random() * (4 - 1)) + 1;
    useImage(imageData[`img${numberImage}`].childImageSharp.fluid);
    // console.log(numberImage);
  };

  useEffect(() => {
    const interval = setInterval(handleImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return <Banner imageFluid={image} onClick={handleImage} />;
};
