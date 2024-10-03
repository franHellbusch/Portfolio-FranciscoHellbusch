import styled from "styled-components";

export const ProjectModalButtonsContainer = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 15px;

  & > h5 {
    padding: 12px 20px;
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.background.grey};
    border: 1px solid ${(props) => props.theme.background.grey};
    color: ${(props) => props.theme.text.light};
    font-size: 15px;
    border-radius: 10px;
    transition: 0.3s;

    > svg {
      margin-right: 10px;
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

export const ProjectModalGithubButton = styled.a`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryLight};
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.permanentColors.white};
  font-size: 15px;
  border-radius: 10px;
  transition: 0.3s;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);

  & > svg {
    color: ${(props) => props.theme.permanentColors.white};
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ProjectModalDeployButton = styled.a`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.text.grey};
  font-size: 15px;
  border-radius: 10px;
  transition: 0.3s;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 4px 0px 10px 0px rgba(47, 122, 249, 0.1);

  & > svg {
    color: ${(props) => props.theme.text.grey};
    margin-right: 10px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.permanentColors.white};

    > svg {
      color: ${(props) => props.theme.permanentColors.white};
      margin-right: 10px;
    }
  }
`;
