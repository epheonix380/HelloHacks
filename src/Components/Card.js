import React from "react";
import styled from "styled-components";

export const CustomCard = ({}) => {
  return (
    <FrameRootRoot>
      <Image1 src={`https://file.rendit.io/n/NzNoqX8LNZQeXfiFWknt.svg`} />
    </FrameRootRoot>
  );
};

const FrameRootRoot = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #57a2e9;
  border-radius: 61px;
  box-sizing: border-box;
  padding: 52px 85px;
`;
const Image1 = styled.img`
  height: 491.71px;
`;
