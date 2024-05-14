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

  ul {
    padding: 0;
    margin-top: 45px;
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 25px;
  margin-right: 35px;
  width: 342px;
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  line-height: 2px;
  height: 30px;
  width: 130px;
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  border-radius: 5px;
  height: 35px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px;
  width: 500px;

  li {
    list-style: none;
  }
`;
