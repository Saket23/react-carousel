//@flow
import React, { PureComponent } from "react";

import { Wrapper, Container, BackButton, NextButton } from "./styles";

type Props = {
  children: any
};

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
    const { position } = this.state;
    this.setState({ position: position - 1 });
  }

  onNextButtonClickHandler() {
    const { position } = this.state;
    this.setState({ position: position + 1 });
  }

  render() {
    const { position } = this.state;
    const { children } = this.props;
    return (
      <>
        <Container>
          <BackButton onClick={this.onBackButtonClickHandler}>Back</BackButton>
          <Wrapper position={position} distance={764}>
            {children}
          </Wrapper>
          <NextButton onClick={this.onNextButtonClickHandler}>Next</NextButton>
        </Container>
      </>
    );
  }
}
