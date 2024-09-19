import { Link } from "react-router-dom";
import styled from "styled-components";

export const PresentationCard = styled.div`
  height: 100%;
  width: 100%;
  max-width: 950px;
  padding: 0 20px;
  display: flex;
  gap: 25px;
  align-items: center;

  & > img {
    padding-top: 20px;
    padding-right: 25px;
    height: calc(100% - 20px);
    filter: ${(props) => `drop-shadow(0 0 3px ${props.theme.permanentColors.grey})`};
  }

  @media (max-width: 1200px) {
    max-width: 850px;
    display: flex;
    gap: 15px;

    & > img {
      padding-right: 20px;
    }
  }

  @media (max-width: 1000px) {
    max-width: auto;
    padding: 50px 20px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    & > img {
      padding-top: 0;
      padding-right: 0;
      height: auto;
      max-width: 230px;
    }
  }

  @media (max-width: 660px) {
    gap: 30px;

    & > img {
      max-width: 200px;
    }
  }
`;

export const PresentationCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 25px;

  & > h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 55px;
    color: ${(props) => props.theme.text.dark};
    & > span {
      font-weight: 800;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  & > p {
    width: 85%;
  }

  @media (max-width: 1200px) {
    gap: 10px;
    padding-left: 20px;

    & > h2 {
      font-size: 40px;
      line-height: 47px;
    }

    & > p {
      font-size: 14px;
      width: 90%;
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    gap: 15px;
    padding-left: 0;

    & > p {
      width: 85%;
    }
  }

  @media (max-width: 660px) {
    gap: 10px;

    & > h2 {
      font-size: 36px;
      line-height: 40px;
    }

    & > p {
      width: 90%;
    }
  }

  @media (max-width: 575px) {
    gap: 10px;

    & > h2 {
      font-size: 30px;
      line-height: 36px;
    }

    & > p {
      font-size: 13px;
      line-height: 21px;
    }
  }

  @media (max-width: 470px) {
    & > h2 {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

export const PresentationCardButton = styled(Link)`
  width: fit-content;
  text-decoration: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.permanentColors.white};
  font-weight: 700;
  border: 0;
  padding: 12px 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    background: ${(props) => props.theme.colors.primaryLight};
  }

  &:active {
    transform: scale(1.01);
  }

  & > svg {
    width: 16px;
    margin-left: 10px;
    transition: 0.3s;
  }

  &:hover svg {
    transform: translateX(5px) scale(1.2);
  }

  @media (max-width: 1200px) {
    font-size: 14px;
    padding: 10px 25px;
    margin-top: 10px;

    & > svg {
      width: 15px;
      margin-left: 8px;
    }
  }

  @media (max-width: 540px) {
    font-size: 13px;
    padding: 8px 20px;
    margin-top: 10px;
    & > svg {
      width: 13px;
      margin-left: 6px;
    }
  }
`;
