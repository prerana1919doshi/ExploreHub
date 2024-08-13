import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/shivam.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Our trip was seamless and unforgettable—everything from the booking process to 
          the guided tours was perfectly organized. We felt truly cared for every step of the way!”
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Shivam Thombare</h4>
              <span> Employee of Bajaj finance</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          “The personalized itinerary made our vacation magical! Every detail was thoughtfully 
          planned, and the local guides were fantastic—our family had a blast!”
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Mandar Parekh</h4>
              <span>Project manager of merskline</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          “I couldn’t have asked for a better travel experience. The customer service was top-notch, 
          and the recommendations for local attractions and dining were spot on. We had an amazing time!”
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Prashant Doshi</h4>
              <span>Manager of volkswagen</span>
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