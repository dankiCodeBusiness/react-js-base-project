import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--blue-rgba);
  backdrop-filter: blur(10px);
  width: 80%;
  height: 500px;
  border-radius: 10px;
  padding: 40px;

  form {
    margin: 50px;

    div {
      display: flex;
      flex-direction: row;

      label {
        cursor: pointer;
        margin-left: 20px;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--white);
        text-shadow: var(--black) 0 0 2px;
      }

      input[type='checkbox'] {
        position: relative;
        cursor: pointer;

        :before {
          content: '';
          display: block;
          position: absolute;
          width: 20px;
          height: 20px;
          top: 0;
          left: 0;
          border: 2px solid var(--gold-100);
          border-radius: 1px;
          background-color: var(--gold);
        }

        :checked:after {
          content: '';
          display: block;
          width: 6px;
          height: 12px;
          border: solid var(--black);
          border-width: 0 2px 2px 0;
          position: absolute;
          top: 2px;
          left: 7px;
          transform: rotate(45deg);
        }
      }
    }
  }
`
