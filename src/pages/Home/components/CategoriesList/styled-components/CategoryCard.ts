import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryCard = styled(Link)`
  flex: 1;
  background: ${(props) => props.theme.background.greyLight};
  min-width: 250px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    transform: scale(1.03);
  }

  &:active {
    opacity: 0.8;
    transform: scale(1.01);
  }

  & > img {
    width: 90px;
  }

  & > h3 {
    font-size: 24px;
    color: ${(props) => props.theme.text.dark};
  }

  & > p {
    color: ${(props) => props.theme.text.grey};
    max-width: 350px;
  }

  @media (max-width: 1200px) {
    gap: 5px;

    & > img {
      width: 70px;
    }

    & > h3 {
      font-size: 22px;
    }

    & > p {
      font-size: 14px;
    }
  }

  @media (max-width: 1000px) {
    & > img {
      width: 60px;
    }
  }
`;
