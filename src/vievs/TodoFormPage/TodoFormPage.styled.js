import styled from "@emotion/styled";

export const SectionCenter = styled.article`
  width: 95vw;
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;

  background: white;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  padding: 2rem;

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;

export const GroceryForm = styled.form`
  /* color: black;
  margin-bottom: 1.5rem;
  text-align: center; */
`;

export const Title = styled.h3`
  color: black;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grocery = styled.input`
  padding: 0.25rem;
  padding-left: 1rem;
  background: rgb(238, 238, 238);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: black;

  &::placeholder {
    color: black;
  }
`;

export const SubmitBtn = styled.button`
  background: #2563eb;
  border-color: transparent;
  flex: 0 0 5rem;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  cursor: pointer;
  color: white;
  transition: var(--transition);
  font-size: 0.85rem;

  &:hover {
    background: #1543a5;
    color: white;
  }
`;

export const GroceryContainer = styled.div`
  margin-top: 2rem;
`;

export const ClearBtn = styled.button`
  color: tomato;
`;
