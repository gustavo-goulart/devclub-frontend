import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 25px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 35px;
`;
