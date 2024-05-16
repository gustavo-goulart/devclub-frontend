import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 25px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 25%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 35px;
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.isActive ? "100%" : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
