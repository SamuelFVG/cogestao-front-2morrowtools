import React from "react";
import { Card } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 55vh;
  margin-left: 20%;
  margin-top: 13%;
`;
export const Title = styled.div`
  width: 100%;
  color: #fff;
  font-family: Exo 2;
  font-size: 5vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`;
export const Description = styled.div`
  color: #828282;
  font-family: Exo 2;
  font-size: 5vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`;
export const Image = styled.img`
  width: 100%;
  height: 60vh;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
