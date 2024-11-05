import React , { useState }from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage from './assest/Profile.png'; // Adjust the path as necessary
import { ReactComponent  as Down} from './assest/Down.svg'; 

import { ReactComponent  as Bottom} from './assest/Button.svg'; 


const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center content horizontally */
  width: 80%; /* Set the width of the carousel wrapper */
  margin: auto; /* Center the wrapper */
  position: relative; /* Relative positioning to position dots */

  .carousel .slide {
    background: none;
    display: flex; /* Make the slide a flex container */
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
  }

  .carousel .slider-wrapper {
    overflow: hidden;
    width: 100%; /* Use full width of the carousel */
    transition: all 0.3s ease; /* Smooth transition */
    display: flex; /* Ensure it behaves as a flex container */
    justify-content: center; /* Center the slider items */
  }

  .control-dots {
    display: flex; /* Use flex for dot alignment */
    justify-content: center; /* Center the dots */
    align-items: center; /* Align dots vertically in the center */
    margin-top: 10px; /* Space above dots */
    width: 100%; /* Make it full width for proper centering */
  }

  .dot {
    background: transparent;
    border: 1px solid #5235E8; /* Dot border color */
    width: 12px;
    height: 12px;
    border-radius: 50%; /* Make dots round */
    cursor: pointer; /* Pointer on hover */
    transition: background 0.3s ease; /* Smooth background change */
    margin: 0 5px; /* Space between dots */
  }

  .dot.selected {
    background: #5235E8; /* Selected dot color */
  }

  @media (max-width: 768px) {
    .dot {
      width: 10px; /* Slightly smaller dots on tablets */
      height: 10px;
    }
  }

  @media (max-width: 480px) {
    .dot {
      width: 8px; /* Even smaller dots on mobile devices */
      height: 8px;
    }
  }
`;


const Card = styled.div`
  background-color: #04071d;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  color: #fff;
  text-align: left;
  width: 100%; /* Make width 100% to fill the container */
  max-width: 374px; /* Set a maximum width */
  height: auto; /* Height based on content */
  margin: 0; /* No margin */
  opacity: 1; /* Adjust opacity as needed */
  padding: 0; /* Remove default padding or margin */

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    width: 100%; /* Allow for a percentage width on mobile */
    max-width: 374px; /* Set max width to fill the screen */
  }

  @media (max-width: 480px) {
    width: 95%; /* Adjust width for very small screens */
  }
`;


const InfoCard = styled.div`
  padding: 0; /* No padding */
  margin: 0; /* No margin */
`;

const Name = styled.h1`
  font-size: 23px; /* Default font size */
  font-weight: 600;
  font-family: 'Clash Display', sans-serif;

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    font-size: 18px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 8px; /* Smaller font size on mobile devices */
  }
`;

const Title = styled.p`
  font-size: 10.73px;
  color: #a6aab2;
  font-family: 'Poppins', sans-serif;
  /* Media query for smaller screens */
  @media (max-width: 768px) {
    font-size: 8px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 5px; /* Smaller font size on mobile devices */
  }
`;

const Description = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  /* Media query for smaller screens */
  @media (max-width: 768px) {
    font-size: 10px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 5px; /* Smaller font size on mobile devices */
  }
`;

const TeamContainer = styled.div`
  text-align: center;
  margin: 20px;

  h2 {
    font-family: 'Clash Display', sans-serif;
    font-size: 45px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
`;

const Texts = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 95%;
  }
`;

const CardImage = styled.img`
  width: 100%; /* Full width of the parent container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px 10px 0 0; /* Rounded top corners */

  @media (max-width: 768px) {
    width: 90%; /* Use 90% width on smaller screens */
    max-width: 300px; /* Set a max width for better scaling on mobile */
  }

  @media (max-width: 480px) {
    width: 80%; /* Use 80% width on extra small screens */
    max-width: 250px; /* Further reduce the max width on smaller devices */
  }
`;

// const ResponsiveContainer = styled.div`
//   width: 100%;
//   max-width: 374px; /* Ensure this matches the Card width */
//   text-align: start;
//   height: auto;
//   display: flex; /* Use flex for proper alignment */
//   flex-direction: column; /* Stack image and info vertically */
//   margin: 0; /* No margin */
// `;
const ResponsiveContainer = styled.div`
    width: 100%;
    max-width: 374px; /* Use a smaller max-width for mobile */
    margin: 0 auto; /* Center the container */
    height: auto;
  text-align: start;

    @media (max-width: 768px) {
        max-width: 90%; /* Adjust for small screens */
    }
`;

export const Team = () => (
  <TeamContainer>
    <h2>Meet Our Team</h2>
    <Texts>
      Don't miss out on early access to Coinchance tokens! Our limited-time
      pre-sale offers exclusive pricing and a seamless, secure purchase
      process. Act now to secure your share before it's gone.
    </Texts>
    <br />
    <CarouselComponent />
  </TeamContainer>
);
const CarouselComponent = () => {
  const slides = [...Array(3)]; // Use actual slide data if available
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current slide

  const handleSlideChange = (index) => {
    setCurrentIndex(index); // Update the current slide index
  };
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <CarouselWrapper>
      <Carousel
        showThumbs={false}
        showIndicators={false} // Disable default indicators
        showArrows={false}
        centerMode={true}
        showStatus={false}
        centerSlidePercentage={33.3}
        autoPlay
        infiniteLoop={true}
        emulateTouch
        swipeable
        onChange={handleSlideChange} // Callback to update currentIndex on slide change

      >
        {slides.map((_, index) => (
          <ResponsiveContainer key={index}>
            <Card>
              <CardImage src={myImage} alt={`Team Member ${index + 1}`} />
            </Card>
            <InfoCard>
              <Name>Gunnar Rustad</Name>
              <Title>Daglig leder</Title>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Description>
            </InfoCard>
          </ResponsiveContainer>
        ))}
      </Carousel>

      {/* Add Dots Below the Carousel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <Bottom onClick={goToPrevSlide} style={{ marginRight: '5px', display: 'flex', alignItems: 'center',marginTop:"10px" }} /> {/* Icon on the left */}
        <div className="control-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'selected' : ''}`}
              onClick={() => setCurrentIndex(index)} // Optional: allow clicking on dots to change slide
            />
          ))}
        </div>
        <Down   onClick={goToNextSlide} style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' ,marginTop:"10px"}} /> {/* Icon on the right */}
      </div>
    </CarouselWrapper>
  );
};
