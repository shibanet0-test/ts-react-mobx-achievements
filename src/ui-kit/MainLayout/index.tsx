import React from "react";
import styled from "styled-components";

const MainLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(38, 1, 67);
  background-image: ${`url('${process.env.PUBLIC_URL}/static/bg.svg')`};
  background-position: 100% 0px;
  background-repeat: no-repeat;
  background-size: contain;
`;
export default MainLayout;
