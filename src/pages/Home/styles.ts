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
    display: flex;
    flex-direction: column;
    grid-row-gap: 3rem;

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
          border: 2px solid var(--green-600);
          border-radius: 1px;
          background-color: var(--green-500);
        }

        :checked:after {
          content: '';
          display: block;
          width: 6px;
          height: 12px;
          border: solid var(--green-400);
          border-width: 0 2px 2px 0;
          position: absolute;
          top: 2px;
          left: 7px;
          transform: rotate(45deg);
        }
      }
    }

    button {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 20px 40px;
      font-size: 1.3rem;
      text-transform: uppercase;
      color: var(--green-400);
      border: 1px solid var(--green-500);
      outline: none;
      background-color: var(--green-600);

      transition: 0.6s;
      overflow: hidden;

      :hover {
        box-shadow: 0 0 10px var(--green-700), 0 0 15px var(--green-600),
          0 0 25px var(--green-600);
        background-color: var(--green-700);
        transition-delay: 1s;

        span:nth-child(1) {
          left: 100%;
          transition: 1s;
        }

        span:nth-child(2) {
          top: 100%;
          transition: 1s;
          transition-delay: 0.25s;
        }

        span:nth-child(3) {
          right: 100%;
          transition: 1s;
          transition-delay: 0.5s;
        }
        
        span:nth-child(4){
          bottom: 100%;
          transition: 1s;
          transition-delay: .75s;
        }
      }

      span {
        position: absolute;
        display: block;

        :nth-child(1) {
          width: 100%;
          height: 2px;
          top: 0;
          left: -100%;
          background-image: linear-gradient(
            90deg,
            transparent,
            var(--green-700)
          );
        }

        :nth-child(2) {
          width: 2px;
          height: 100%;
          right: 0;
          top: -100%;

          background-image: linear-gradient(
            180deg,
            transparent,
            var(--green-700)
          );
        }

        :nth-child(3) {
          width: 100%;
          height: 2px;
          bottom: 0;
          right: -100%;

          background-image: linear-gradient(
            270deg,
            transparent,
            var(--green-700)
          );
        }

        :nth-child(4) {
          width: 2px;
          height: 100%;
          left: 0;
          bottom: -100%;

          background-image: linear-gradient(
            360deg,
            transparent,
            var(--green-700)
          );
        }
      }
    }
  }
`
