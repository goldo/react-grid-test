import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.svg'

const LoadingImg = styled.img`
  animation: logo-spin infinite 5s linear;
  height: 10vmin;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Loading = () => (
  <div>
    <p>
      <strong>Loading ..</strong>
    </p>
    <LoadingImg src={logo} alt="loading" />
  </div>
)

export default Loading
