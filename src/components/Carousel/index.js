//@flow
import React, { PureComponent } from "react";

import A from "../examples/A";
import B from "../examples/B";
import C from "../examples/C";
import D from "../examples/D";
import E from "../examples/E";
import F from "../examples/F";
import G from "../examples/G";
import H from "../examples/H";
import I from "../examples/I";
import J from "../examples/J";

import { Wrapper, Container, BackButton, NextButton } from "./styles";

type Props = {};

type State = {
  position: number
};

export default class Carousel extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      position: 0
    };

    //ref:: https://github.com/facebook/flow/issues/1517 fixing flow issues
    (this: any).onBackButtonClickHandler = this.onBackButtonClickHandler.bind(
      this
    );
    (this: any).onNextButtonClickHandler = this.onNextButtonClickHandler.bind(
      this
    );
  }

  onBackButtonClickHandler() {
    console.log(123);
    const { position } = this.state;
    console.log("back", position);
    this.setState({ position: position - 1 });
  }

  onNextButtonClickHandler() {
    const { position } = this.state;
    console.log("next", position);
    this.setState({ position: position + 1 });
  }

  render() {
    const { position } = this.state;
    return (
      <>
        <Container>
          <BackButton onClick={this.onBackButtonClickHandler}>Back</BackButton>
          <Wrapper position={position} distance={764}>
            <A />
            <B />
            <C />
            <D />
            <E />
            <F />
            <G />
            <H />
            <I />
            <J />
          </Wrapper>
          <NextButton onClick={this.onNextButtonClickHandler}>Next</NextButton>
        </Container>
      </>
    );
  }
}
