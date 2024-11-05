import React from 'react';
import styled from 'styled-components';
import { ReactComponent  as Doticon} from './assest/Doticon.svg'; 
import { ReactComponent  as Bsc} from './assest/Bsc.svg'; 
import { ReactComponent  as Sol} from './assest/Sol.svg'; 
import { ReactComponent  as Eth} from './assest/Eth.svg'; 
import { ReactComponent  as Info} from './assest/Info.svg'; 

import { ReactComponent  as Arrow} from './assest/Arrow.svg'; 

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const StyledHeader = styled.h1`
  font-size: 45px;
  font-family: 'Clash Display';
  color: #fff;
`;
const RowContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Space the components evenly */
  align-items: flex-start; /* Align items to the start */
  width: 100%; /* Full width */
  gap: 16px; /* Add some space between the components */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack components on smaller screens */
  }
`;
const StyledParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  width: 690px;
  color: #A6AAB2;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PurchaseFormWrapper = styled.div`
  padding: 20px;
  margin: 20px 0;
  color: #fff;
  text-align: start;
  border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.15); /* Add border style with 15% color */ 
  color: #FFFFFF;
margin: 0; padding: 16px; 
  margin-bottom: 8px; /* Adds space between MegaDiceWrapper and MegaDiceContent */
box-sizing: border-box;
      width: 602px;

 background-color: #04071d;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const PurchaseContainer = styled.div`
  display: flex;
  justify-content: start;
      width: 602px;

flex-direction: column;
 @media (max-width: 768px) {
    width: 100%;
  }
`;

const PurchaseHeading = styled.h2`
  font-family: 'Poppins', sans-serif; /* Ensure to include a fallback font */
  font-size: 14.95px;
  font-weight: 600;
  line-height: 22.42px;
  text-align: left;
  margin: 0; /* Optional: Remove default margin */
  padding: 0; /* Optional: Remove default padding */
`;

const CoinOptions = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  width: 132px;
  height: 46px;

  @media (max-width: 768px) {
    flex-direction: row; /* Keep buttons in a row on smaller screens */
    width: 100%; /* Make it full width to fit the screen */
    height: auto; /* Adjust height as needed */
  }
`;

const CoinButton = styled.button`
  display: flex; /* Use flexbox to align SVG and text */
  align-items: center; /* Center items vertically */
  margin: 5px;
  padding: 0.5rem 1rem; /* Reduce padding for smaller buttons on mobile */
  cursor: pointer;
  background-color: #673ab7;
  color: #fff;
  border: 1px solid #132166; /* Add 1px white border */
  border-radius: 44.29px; /* Rounded corners */

  @media (max-width: 768px) {
    width: auto; /* Maintain width for small buttons */
    height: 30px; /* Set a specific height for mobile buttons */
    font-size: 12px; /* Adjust font size for better readability on mobile */
  }

  /* Optional: Add hover effect for better UX */
  &:hover {
    background-color: #5a2d9a; /* Darker shade on hover */
  }

  /* Style for the SVG icons, if needed */
  svg {
    margin-right: 8px; /* Add some space between the icon and text */
    width: 16px; /* Adjust icon size */
    height: 16px; /* Adjust icon size */
    
    @media (max-width: 768px) {
      width: 12px; /* Smaller icon size for mobile */
      height: 12px; /* Smaller icon size for mobile */
    }
  }
`;

const CoinIcon = styled.div`
  display: flex; /* Use flexbox to align SVG and text */
  align-items: center; /* Center items vertically */
  padding: 0.5rem; /* Adjust padding for a consistent look */
  color: #fff;

  @media (max-width: 768px) {
    padding: 0.25rem; /* Reduce padding for mobile */
    font-size: 12px; /* Adjust font size for better readability on mobile */
  }
`;

const ArrowButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* This spaces the buttons evenly */
  margin: 0; /* Optional: Add space above the button container */
    align-items: start; /* Center items vertically */

`;
const ArrowText = styled.p`
  display: flex; /* Use flexbox to align SVG and text */
  align-items: center; /* Center items vertically */
  color: #fff;
  margin: 0; /* Remove default margin */
  margin-right: 8px; /* Add margin to the right for space between text and icon */
  font-family: Poppins;
font-size: 14px;
font-weight: 400;


`;


const ArrowIcon = styled.div`
  display: flex; /* Use flexbox to align SVG and text */
  align-items: center; /* Center items vertically */
  padding: 0.75rem 0rem; /* Adjust padding for a consistent look */
  color: #fff;
`;


const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;

const ConnectWalletButton = styled.button`
  margin-top: 3px;
  padding: 10px 20px;
  border: none;
  color: #FFFFFF;
 height:59.79px;
  cursor: pointer;
  background-color: #5235E8; /* Background color */
  
   border-radius: 29.89px; /* Rounded corners */
   @media (max-width: 480px) {
    width: 100%;
     height:auto;

  }
`;

const MegaDiceWrapper = styled.div`
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.15); /* Add border style with 15% color */ 
  color: #FFFFFF;
margin: 0; padding: 16px; 
  margin-bottom: 8px; /* Adds space between MegaDiceWrapper and MegaDiceContent */
box-sizing: border-box;
width:602px;
 background-color: #04071d;

  @media (max-width: 768px) {
    width: 100%;
  }
   

  
`;
const MegaDiceWrapperHeading = styled.h2`
 margin: 0; padding: 0; 
  color: #FFFFFF;
  font-weight: 700;

  text-align: start;
font-size: 40.23px; 
  font-family: 'Clash Display';
   @media (max-width: 768px) {
font-size: 30.23px; 
  }

  @media (max-width: 480px) {
font-size: 30.23px; 

  }
    
`;
const MegaDiceWrapperp = styled.p`
 margin: 0; padding: 5px; 
  color: #D2D2D2;
  font-weight: 400;

  text-align: start;
font-size: 16px;
  font-family: 'Clash Display';
  
`;

const MegaDiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    box-sizing: border-box;
background-color: #04071d;
  border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.15); /* Add border style with 15% color */ 
  color: #FFFFFF;
 @media (max-width: 768px) {
    width: 100%;
  }
   

 
`;
const AmountContent = styled.div`
  width: 353.81px; /* Set the width as specified */
  height: 71px; /* Set the height as specified */
  display: flex; /* Use flexbox for layout */
  justify-content: center; /* Space the time components evenly */
  align-items: center; /* Center the content vertically */
  border-radius: 999px; /* Apply rounded corners */
  gap: 0;

  /* Gradient border properties */
  border: 1px solid #5235E8; /* Make sure border is transparent */
  /* border-image-source: linear-gradient(180deg, #5235E8 0%, rgba(10, 124, 255, 0) 134.38%); Gradient source */
  /* border-image-slice: 1; Use the entire gradient for the border */

  /* Ensure no background color */
  background-color: transparent; /* Set background to transparent */
  opacity: 1; /* Ensure the timer is fully visible */
  margin: 20px auto; /* Center the timer container and add some vertical spacing */
   @media (max-width: 768px) {
    width: 80%;
    
  }
   

  
`;
const AmountWrapper = styled.p`
  font-family: 'Clash Display', sans-serif; /* Fallback to sans-serif */
  font-size: 36.88px;
  font-weight: 600;
  text-align: center;
   margin: 0; padding: 0; 
 @media (max-width: 380px) {
  font-size: 2rem;
    
  }
  
`;
const UsdRaisedTitle = styled.p`
  font-family: 'Clash Display', sans-serif; /* Fallback to sans-serif */
  font-size: 32px;
  font-weight: 600; /* Semibold weight */
  text-align: center;
     margin: 0; padding: 0; 

`;
const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Space columns evenly */
  width: 100%;
  border-radius: 22.42px;
  color: #FFFFFF;
  border-top: 1px solid #2C3049; /* Only the top border */
  /* If you want to remove other borders, you can ensure there are none */
  border-left: none;
  border-right: none;
  border-bottom: none;

  @media (max-width: 768px) {
    flex-direction: row; /* Stack columns vertically on smaller screens */
    align-items: center;
  }
`;


const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start; /* Center text inside each column */
  text-align: start;
  gap: 0; /* Adjust spacing between the label and value */
  padding: 0 20px; /* Adds padding of 20px on the left and right */
  margin:0;
  
`;
const PriceText = styled.p`
  font-family: 'Clash Display', sans-serif;
  font-size: 45px;
  font-weight: 600;
  line-height: 55.35px;
  text-align: right;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
      font-size: 22px;

  }
`;
const MegaDiv = styled.div`
display: flex;
  flex-direction: column;
    

`
// Styled component for the heading
const InputHeading = styled.h2`
  font-family: 'Poppins', sans-serif; /* Ensure Poppins is available */
  font-size: 14.95px;
  font-weight: 600;
  line-height: 22.42px;
  text-align: left;
  margin: 0; /* Optional: reset default margin */
`;


const MegaDicePresale = () => (
    <>
    <MegaDiv>
  <MegaDiceWrapper>
      <MegaDiceWrapperHeading>Mega Dice Presale</MegaDiceWrapperHeading>
      <MegaDiceWrapperp>Buy Before Next Stage Price Increase</MegaDiceWrapperp>
    </MegaDiceWrapper>
    <MegaDiceContent>
        <br/>
      <UsdRaisedTitle>$USD Raised:</UsdRaisedTitle>
      <AmountContent><AmountWrapper>$1,794,061.5</AmountWrapper></AmountContent>
      <RowWrapper>
        <ColumnWrapper>
          <p>Tokens bought on Solana:</p>
          <Doticon/>
        </ColumnWrapper>
        <ColumnWrapper>
        <PriceText>$0.116056</PriceText>
          <p>Price per Schance token:</p>
        </ColumnWrapper>
      </RowWrapper>
      </MegaDiceContent>
      </MegaDiv>
    </>
  
);

const PurchaseForm = () => (
    <PurchaseContainer>
  <PurchaseFormWrapper>
    <PurchaseHeading>Choose Coin</PurchaseHeading>
    <CoinOptions>
      <CoinButton><Sol width="24px" height="24px" />Sol</CoinButton>
      <CoinButton><Eth width="24px" height="24px" />ETH</CoinButton>
      <CoinButton><Bsc width="24px" height="24px" />BNB</CoinButton>
      <CoinIcon>
    <Info width="16.81px" height="16.81px"  /> 
  </CoinIcon>      
          </CoinOptions>
    <InputHeading>Buy with USDT</InputHeading>
    <Input  style={{
        backgroundColor: 'transparent', 
      border: '1px solid #5235E8', // Border color and style
      borderRadius: '20px', // Border radius
      padding: '10px', // Optional: padding for better spacing
      outline: 'none' // Optional: remove outline on focus
    }} type="number" placeholder="Amount in USDT" />


    <InputHeading>You will get</InputHeading>
    <Input  style={{
        backgroundColor: 'transparent', 
      border: '1px solid #5235E8', // Border color and style
      borderRadius: '20px', // Border radius
      padding: '10px', // Optional: padding for better spacing
      outline: 'none' // Optional: remove outline on focus
    }} type="number" placeholder="Amount in $COIN" />
  </PurchaseFormWrapper>
  <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
   {/* Arrow Button Container */}
   <ArrowButtonContainer>
      <ArrowIcon>
        <ArrowText>How to Buy</ArrowText>
        <Arrow />
      </ArrowIcon>
      <ArrowIcon>
        <ArrowText>Refer and Earn</ArrowText>
        <Arrow />
      </ArrowIcon>
      <ArrowIcon>
        <ArrowText>Instructions for Referring</ArrowText>
        <Arrow />
      </ArrowIcon>
    </ArrowButtonContainer>
  </PurchaseContainer>
);

const CombinedComponents = () => (
  <Container>
    <StyledHeader>Presale Aggregator</StyledHeader>
    <StyledParagraph>
      Don't miss out on early access to Coinchance tokens! Our limited-time pre-sale offers exclusive pricing and a seamless, secure purchase process. Act now to secure your share before it's gone.
    </StyledParagraph>
    <br/>
    <br/>
    <br/>
    <>
    <RowContainer>

    <MegaDicePresale />
    <PurchaseForm />
    </RowContainer>
    </>
  </Container>
);

export default CombinedComponents;
