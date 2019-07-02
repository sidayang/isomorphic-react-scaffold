import React from "react";
import useReactRouter from "use-react-router";

interface IProps {}

export const PageOne = (props: IProps) => {
  const { history, location } = useReactRouter();
  const handleButtonClick = () => {
    history.push("/page-2");
  };
  return (
    <div>
      Page 1<button onClick={handleButtonClick}>Goto Page 2</button>
    </div>
  );
};
