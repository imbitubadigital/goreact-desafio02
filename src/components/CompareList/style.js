import styled from 'styled-components';

export const Container = styled.div`
  span{
    display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  }
  
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;

      i{
        margin-right:8px;
      }

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n -1) {
        background: #ccc;
      }
    }
  }
`;

export const Action = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 3px;
    border: 0;
    text-transform: uppercase;
    font-weight: bold;

    flex-basis: calc(49%);
    padding: 8px;
    background: #136dd4;
    color: #fff;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      margin-right: 8px;
    }
  }
  button:hover {
    background: #0d59af;
  }
  button:nth-child(2n) {
    background: #dd0505;
  }
  button:nth-child(2n):hover {
    background: #b30404;
  }
`;
