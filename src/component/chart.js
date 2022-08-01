import styled, { keyframes } from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  color: hsl(28, 10%, 53%);

.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .chart-column{
    height:100px;
    width: 40px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: hsl(10, 79%, 65%);
  }
}
`


function Chart() {
    return(
        <Container>
          <div className="chart-container"><div className="chart-column mon"></div> mon </div>
          <div className="chart-container"><div className="chart-column tue"></div> tue </div>
          <div className="chart-container"> <div className="chart-column wed"></div> wed </div>
          <div className="chart-container"><div className="chart-column thu"></div> thu </div>
          <div className="chart-container"><div className="chart-column fri"></div> fri </div>
          <div className="chart-container"><div className="chart-column sat"></div> sat </div>
          <div className="chart-container"><div className="chart-column sun"></div> sun </div>
      </Container>
    )
}

export default Chart;
