import React from 'react';
import styled from 'styled-components';
import { ReactComponent as YouTube } from './assest/Youtube.svg';
import { ReactComponent as Facebook } from './assest/Facebook.svg';
import { ReactComponent as Insta } from './assest/Insta.svg';
import { ReactComponent as Link } from './assest/Link.svg';
import { ReactComponent as Tweet } from './assest/Tweet.svg';

// Main Container styled component
const MainContainer = styled.div`
  width: 1460px; /* Fixed width */
  height: 496px; /* Fixed height */
  border-radius: 20px 20px 0px 0px; /* Rounded corners */
  border: 1px solid transparent; /* Top border only */
  opacity: 1; /* Set opacity to 1 for visibility */
  display: flex; /* Enable flex layout */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
  gap: 0; /* No gap between items */
`;
 const FooterRow = styled.div` 
 display: flex; justify-content: space-around; width: 100%; max-width: 1000px;
  margin-bottom: 20px; @media (max-width: 768px) { flex-direction: column; align-items: start; } `; 
  const FooterColumn = styled.div` 
  flex: 1; margin: 10px; 
  .link-text, 
  .contact-text { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 400; 
  text-align: start; color: #A6AAB2; margin: 0 auto; width: 100%; &:hover { text-decoration: underline; } 
  @media (max-width: 768px) { margin-bottom: 10px; } } `;
const FooterContainer = styled.footer`
  color: #ffffff;
  text-align: start;
  display: flex;
  flex-direction: column; /* Keep the main layout as column */
  align-items: start;
width:  (606px)px;
height:  (364px)px;


  @media (max-width: 768px) {
    padding: 10px;
  }
    @media (max-width: 480px) {
        padding: 10px;

  }
`;
const Money = styled.h3`
font-family: Clash Display;
font-size: 32px;
font-weight: 600;
line-height: 39.36px;
text-align: left;
`
const FooterContainerSocial = styled.footer`
  color: #ffffff;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column; /* Keep the main layout as column */
  align-items: start;
width:  (294px)px;
height:  (369.6px)px;
gap: 57px;
opacity: 0px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Newsletter = styled.div`
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    width: 200px;

    @media (max-width: 768px) {
      width: 80%;
      margin-bottom: 10px;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #5235e8;
    border: none;
    border-radius: 25.81px;
    color: #fff;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 156.64px;
      
    }
      @media (max-width: 480px) {
      width: 156.64px;
      
    }
  }
`;

const LinksContainer = styled.div` display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 20px; 

.link-text { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 400; text-align: start; color: #A6AAB2; 
margin: 0 auto; width: 150px; @media (max-width: 768px) { width: 100%; } &:hover { text-decoration: underline; } } `
const ContactInfo = styled.div`
  margin-right: 20px; /* Space between contact info and social media */
  
  p {
    margin: 5px 0;
  }
`;

const Card = styled.div`
  width: 82.32px;
  margin:2px;
  padding: 21.68px;
  border-radius: 14.7px;
  background-color: #0e0826; /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1; /* Always visible */

  svg {
    width: 100%;
    height: auto;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start; /* Align items to the start (left) */
  width: 294px;
height: 5px;
opacity: 0px;

`;

const Credits = styled.p`
  margin-top: 0px;
`;

const Container = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-around; /* This spaces the buttons evenly */
  margin: 0; /* Optional: Add space above the button container */
    align-items: start; /* Center items vertically */  
     @media (max-width: 768px) {
  flex-direction: column;
    }
   @media (max-width: 480px) {
      flex-direction: column;

  }
`;

const StyledHeader = styled.h1`
  font-size: 45px;
  font-family: 'Clash Display', sans-serif;
  color: #fff;
`;
const MainDiv = styled.div`
width:100%;
    border-top: 20px #5235e8; /* Yahan border ka color aur width set karein */


`
export const Footer = () => {
    return (
            <>
    
<MainDiv/>
        <Container>
            {/* Row for Contact Info and Social Media */}
            <FooterContainerSocial >
                <ContactInfo>
                    <p>Contact us:</p>
                    <br />
                    <p>info@CoinChance.com</p>

                    <p>Phone: +123 234 567 8900</p>
                </ContactInfo>
                <SocialMedia>
                    <Card>
                        <a href="#">
                            <YouTube />
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <Facebook />
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <Link />
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <Insta />
                        </a>
                    </Card>
                    <Card>
                        <a href="#">
                            <Tweet />
                        </a>
                    </Card>
                </SocialMedia>
            </FooterContainerSocial>


            {/* <StyledHeader>Welcome to Coinchance</StyledHeader> */}
            <FooterContainer>
                <Money>Receive our weekly <br />
                    newsletter</Money>
                <Newsletter>
                    <input type="email" placeholder="Enter your email" style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #5235E8', // Border color and style
                        borderRadius: '17.2px', // Border radius
                        padding: '10px', // Optional: padding for better spacing
                        outline: 'none'
                    }} />
                    <button>Subscribe</button>
                </Newsletter>

                <FooterRow> <FooterColumn> 
                    <p className="link-text">Documentation</p> <p className="link-text">Join Now</p> 
                    <p className="link-text">About</p> <p className="link-text">FAQ</p> <p className="link-text">Coin Prices</p>
                     </FooterColumn> <FooterColumn> <p className="link-text">Terms and Conditions</p> 
                     <p className="link-text">Buy Bitcoin</p> <p className="link-text">Disclaimer</p>
                      <p className="link-text">Privacy Policy</p> </FooterColumn>
                      <FooterColumn>                <Credits>© 2024 CoinChance. Created by Momen Khan</Credits>
                      </FooterColumn>
                      
                      </FooterRow>


            </FooterContainer>

        </Container>
        </>
    );
};
