import React, { useEffect, useState } from "react";
import { Wrapper, Button } from "./styles";
import { usePingMutation } from "../../generated/graphql";

interface IProps {}

const Client: React.FC<IProps> = ({}: IProps) => {
  const [ping] = usePingMutation();
  const [greenClick, setGreenClick] = useState(0);
  const [orangeClick, setOrangeClick] = useState(0);

  useEffect(() => {
    ping({ variables: { pingPong: { color: "Green", click: 0 } } });
    ping({ variables: { pingPong: { color: "Orange", click: 0 } } });
  }, []);
  const onClick = (color: string) => {
    if (color === "Green") {
      setGreenClick(greenClick + 1);
      ping({ variables: { pingPong: { color, click: greenClick + 1 } } });
    } else {
      setOrangeClick(orangeClick + 1);
      ping({ variables: { pingPong: { color, click: orangeClick + 1 } } });
    }
  };
  return (
    <Wrapper>
      <Button onClick={() => onClick("Green")} backgroundColor={"green"}>
        Green
      </Button>
      <Button onClick={() => onClick("Orange")} backgroundColor={"orange"}>
        Orange
      </Button>
    </Wrapper>
  );
};

export default Client;
