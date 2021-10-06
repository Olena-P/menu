import styled from "@emotion/styled";

export const TodoTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: #001698;

  font-size: 32px;
  line-height: 120%;
  font-weight: 500;
  text-transform: uppercase;
`;

export const List = styled.div``;

export const Item = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: var(--transition);
  padding: 0.25rem 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
  background-color: rgb(238, 238, 238);

  :hover {
    color: var(--clr-grey-5);
    background: var(--clr-grey-10);
  }

  :hover .title {
    color: black;
  }
`;

export const Title = styled.p`
  margin-bottom: 0;
  color: black;
  letter-spacing: 2px;
  transition: var(--transition);
`;

export const BtnContainer = styled.div``;

export const EditBtn = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);

  color: var(--clr-green-light);

  :hover {
    color: var(--clr-green-dark);
  }
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);

  color: var(--clr-red-light);

  :hover {
    color: var(--clr-red-dark);
  }
`;
