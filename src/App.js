import React from 'react';
import styled from 'styled-components';
import Balance from './component/balance';
import Chart from './component/chart';
import Footer from './component/spending-footer';

const Container = styled.div`
 
  
  color: hsl(25, 47%, 15%);
  width: 400px;
  display: flex;
  flex-direction: column;

  h3{
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 1px;
  }
  .spending {
    box-sizing: border-box;
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    border-radius: 12px;
    height: 350px;
    width: 100%;
    background-color: hsl(33, 100%, 98%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    hr {
      margin: 25px 0 25px 0;
      border-top: 1px solid hsl(28, 10%, 53%);
      opacity: 0.3;
    }
  }
`

function App() {
  return (
    <Container>
      <Balance />
      <div className="spending">
        <h3>Spending - Last 7 days</h3>
        <Chart />
        <hr />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
