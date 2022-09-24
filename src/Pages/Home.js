import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function Home (props) {
    const navigate = useNavigate();
  return (
    <LandingPageRootRoot>
      <FlexColumn>
        <FlexRow>
          <NoStyleButton onClick={()=>{window.open("https://sites.google.com/view/art-for-others/", '_blank');}}><Text1>The Creative Solution</Text1></NoStyleButton>
          <NoStyleButton onClick={()=>{navigate("/hello")}}><Text2>HelloHacks</Text2></NoStyleButton>
          <NoStyleButton onClick={()=>{window.open("https://ubcux.ca/",'_blank')}}><Text1>UX Hub</Text1></NoStyleButton>
          <NoStyleButton onClick={()=>{navigate("/other")}}><Text4>Sign Up</Text4></NoStyleButton>
        </FlexRow>
        <FlexRow1>
          <FlexColumn1>
            <WelcomeToThe>Welcome to the </WelcomeToThe>
            <Text5>Landing Page</Text5>
          </FlexColumn1>
          <UnsplashTzvMJGink
            src={`https://file.rendit.io/n/HUbRyFT1AsZzO2t1cHYi.png`}
          />
        </FlexRow1>
      </FlexColumn>
      <FlexRow2>
        <FlexRow3>
        <NoStyleButton onClick={()=>{navigate("/other")}}>
        <Text4>Get Started</Text4>
        </NoStyleButton>
        </FlexRow3>
        <Image1 src={`https://file.rendit.io/n/iBjlUaiJvDa1ejzKLrFk.png`} />
        <Paragraph>
          The 30 minute Figma workshop AKA how to make your code cute :)
        </Paragraph>
      </FlexRow2>
    </LandingPageRootRoot>
  );
};
const NoStyleButton = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;
const Text1 = styled.div`
  color: rgba(10, 103, 212, 0.56);
  font-size: 48px;
  font-weight: 500;
  font-family: Lexend Deca;
  text-decoration: underline;
  white-space: nowrap;
`;
const LandingPageRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #dae6f9;
  width:100%;
`;
const FlexColumn = styled.div`
  width: 100%;
  height: 807px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(
    180deg,
    rgba(10, 151, 212, 0) 1%,
    #0966d4 100%
  );
  box-shadow: 0px 5px 4px 0px rgba(134, 105, 105, 0.63);
  border-radius: 50px;
  padding: 0px 0px 0px 3px;
`;
const FlexRow = styled.div`
  gap: 50px;  /* This is the gap between items in a row */
  width:100%; /* How wide the div is */
  display: flex; /* Required */
  box-sizing: border-box;
  flex-direction: row; /* This tells React whether to go for column or row */
  justify-content: space-between; 
  align-items: center; 
  padding: 27px 50px; /* This is the gap between the content and the border */
`;
const Text2 = styled.div`
  color: rgba(10, 103, 212, 0.55);
  font-size: 48px;
  font-weight: 500;
  font-family: Lexend Deca;
  text-decoration: underline;
  white-space: nowrap;
`;
const Text4 = styled.div`
  width: 215px;
  height: 58px;
  gap: -87px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  font-family: Lexend Deca;
  white-space: nowrap;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(
    180deg,
    #a5deff 0%,
    rgba(10, 103, 212, 0.56) 100%
  );
  box-shadow: 0px 10px 14px 13px rgba(134, 105, 105, 0.3);
  border-radius: 32px;
  padding: 0px 58px;
  border-width: 12px;
`;
const FlexRow1 = styled.div`
  height: 493px;
  gap: 69px;
  width:100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 50px;
  align-self: stretch;
  align-items: center;
`;
const FlexColumn1 = styled.div`
  width: 1015px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 107px 0px;
`;
const WelcomeToThe = styled.div`
  color: #ffffff;
  font-size: 48px;
  font-weight: 500;
  font-family: Lexend Deca;
  white-space: pre-wrap;
`;
const Text5 = styled.div`
  align-self: stretch;
  color: #ffffff;
  font-size: 144px;
  font-weight: 700;
  font-family: Lexend Deca;
  white-space: nowrap;
`;
const UnsplashTzvMJGink = styled.img`
  width: 465px;
  height: 519px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 50px 50px 50px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow3 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self:center;
  align-items: center;
`;
const FlexRow4 = styled.div`
  gap: -87px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  height:100%;
  align-items: center;
  border-style: solid;
  border-color: #ffffff;
  background-image: linear-gradient(
    180deg,
    #a5deff 0%,
    rgba(10, 103, 212, 0.56) 100%
  );
  box-shadow: 0px 10px 14px 13px rgba(134, 105, 105, 0.3);
  border-radius: 32px;
  padding: 0px 58px;
  margin: 0px 0px 125px 0px;
  border-width: 12px;
`;
const Text6 = styled.div`
  color: #ffffff;
  font-size: 56px;
  font-weight: 500;
  font-family: Lexend Deca;
  white-space: nowrap;
`;
const GetStartedButton = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-image: url("undefined");
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  background-color: transparent;
`;
const Image1 = styled.img`
  width: 399px;
  height: 566px;
`;
const Paragraph = styled.div`
  width: 535px;
  height: 208px;
  align-self: flex-end;
  color: rgba(10, 103, 212, 0.56);
  font-size: 48px;
  font-family: Lato;
  margin: 0px 0px 61px 0px;
  font-style: italic;
`;
