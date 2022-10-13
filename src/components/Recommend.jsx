import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/araku3.jpg";
import Destination2 from "../assets/manali.jpg";
import Destination3 from "../assets/goa.jpg";
import Destination4 from "../assets/ladakh.jpg";
import Destination5 from "../assets/kerala.jpg";
import Destination6 from "../assets/nepal.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";


export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Araku",
      subTitle: "Araku Valley is a hill station in Alluri Sitharama Raju",
      cost: "9,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Manali",
      subTitle: "Manali is a town in the Indian state of Himachal ",
      cost: "15,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Goa",
      subTitle: "Goa is a state on the southwestern coast of India",
      cost: "10,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Ladakh",
      subTitle: "Ladakh is a region administered by India",
      cost: "7,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Kerala",
      subTitle: "Kerala is a state on the Malabar Coast of India",
      cost: "18,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Nepal",
      subTitle: "Nepal formerly the Federal Democratic Republic",
      cost: "20,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
