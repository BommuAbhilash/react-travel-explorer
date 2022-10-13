import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import original from "../assets/original.webp"
import girly from "../assets/girly.webp"

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          These guys are indeed committed to best service provision to the clients.
           Strongly recommend LB to all the explorers
          </p>
          <div className="info">
            <img src={girly} alt="" />
            <div className="details">
              <h4>Aminah khan</h4>
              <span>CEO - marketing solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Highly recommended for the people who love to explore, cheap cost. 
          Everything was managed and arranged so nicely that leaves me and friends with complete satisfaction.
           
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Very nice stay. Though its little far around half hour from nepal .
           Lovely food as per your demand
          </p>
          <div className="info">
            <img src={original} alt="" />
            <div className="details">
              <h4>shree adithya</h4>
              <span>CEO - ABC solutions</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
