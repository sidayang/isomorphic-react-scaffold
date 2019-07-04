import React from "react";
import useReactRouter from "use-react-router";
import { Button } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 14px;
  color: #f5222d;
`;

interface IProps {}

export const PageOne = (props: IProps) => {
  const { history, location } = useReactRouter();
  const handleButtonClick = () => {
    history.push("/page-2");
  };
  return (
    <Wrapper>
      Page 1
      <Button type="primary" onClick={handleButtonClick}>
        Goto Page 2
      </Button>
    </Wrapper>
  );
};
