import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  max-width: 1500px;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 30px;
  width: 50%;

  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 280px;
    border-radius: 30px;
  }
`;
