import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CustomCard } from "../Components/Card";

export default function Other (props) {
  const Text4Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const navigate = useNavigate();
  const [list, setList] =  useState([0]);
  return (
    <CardsRootRoot>
      <TopBar>
          <NoStyleButton onClick={()=>{window.open("https://sites.google.com/view/art-for-others/", '_blank');}}><Text1>The Creative Solution</Text1></NoStyleButton>
          <NoStyleButton onClick={()=>{navigate("/hello")}}><Text2>HelloHacks</Text2></NoStyleButton>
          <NoStyleButton onClick={()=>{window.open("https://ubcux.ca/",'_blank')}}><Text1>UX Hub</Text1></NoStyleButton>
          <NoStyleButton onClick={()=>{navigate("/")}}><Text4>Home</Text4></NoStyleButton>
      </TopBar>
      <FlexColumn>
        <FlexColumn1>
          <FlexRow>
            <Text5>Let’s Swipe</Text5>
            <Text4 onClick={(e) => {
                setList([...list, 0]);
                console.log("Pushing!");
            }}>Add Card</Text4>
          </FlexRow>
          <FlexColumn2>
          <FlexRow2>
                    {list.map((e)=>{
                        return(
                            <CustomCard></CustomCard>
                        )
                    })}
                </FlexRow2>
          </FlexColumn2>
        </FlexColumn1>
      </FlexColumn>
    </CardsRootRoot>
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
const CardsRootRoot = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #dae7fa;
  padding-bottom: 100px;
  width:100%;
`;
const TopBar = styled.div`
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
const Text4 = styled.button`
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
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  background-color: transparent;
`;
const Image1 = styled.img`
  width: 100px;
  height: 100px;
`;
const FlexColumn = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn1 = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FlexRow = styled.div`
  gap: 49px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text5 = styled.div`
  color: rgba(10, 103, 212, 0.56);
  font-size: 128px;
  font-weight: 700;
  font-family: Lexend Deca;
  white-space: nowrap;
`;
const Image2 = styled.img`
  width: 201px;
  height: 80px;
`;
const FlexColumn2 = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CardsBSwiped = styled.div`
  width:100%;
  gap: 84px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 1px;
`;
const CeruleanFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #57a2e9;
  border-radius: 61px;
  padding: 52px 85px;
`;
const Image3 = styled.img`
  height: 491.71px;
`;
const FlexRow1 = styled.div`
  width: 1968px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow2 = styled.div`
  gap: 50px;
  display: flex;
  overflow-x:auto;
  flex-direction: row;
  justify-content: center;
  align-self:center;
  padding: 0px 25px;
  width:90%;
  box-sizing: border-box;
  align-items: center;
`;
const CeruleanFlexRow1 = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #57a2e9;
  border-radius: 61px;
  padding: 54.09px 0px 54.19px 0px;
`;
const Image4 = styled.img`
  width: 430px;
  height: 491.72px;
`;
const CeruleanFlexColumn = styled.div`
  height: 521.62px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #57a2e9;
  border-radius: 61px;
  padding: 39.19px 0px 39.19px 84.49px;
`;
const Image5 = styled.img`
  height: 491.72px;
`;
const FlexColumn3 = styled.div`
  width: -600px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 600px;
`;
const CeruleanSquare = styled.div`
  width: 600px;
  height: 600px;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #57a2e9;
  border-radius: 61px;
`;
