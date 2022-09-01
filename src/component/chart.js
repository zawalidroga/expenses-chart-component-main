import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
  color: hsl(28, 10%, 53%);

.chart-container {
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .chart-amount {
    width: 100%;
    height: 25px;
    padding-top: 7px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: hsl(25, 47%, 15%);
    color: hsl(27, 66%, 92%);
    font-weight: bold;
    text-align: center;
    opacity: 0;
  }
  .chart-column{
    height: 100px;
    width: 35px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: hsl(10, 79%, 65%);

    :hover {
      background-color: hsl(186, 34%, 60%);
    }
  }
}
`


function Chart() {
  const [ amounts, setAmounts ] = useState([]);
  const [ biggestAmount, setBiggestAmount ] = useState();
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']


  const getData = () => {
    
    axios({
      method: 'get',
      url: './data.json',
    })
    .then(function(response) {
      for (let i=0; i < response.data.length; i++) {
        setAmounts(amounts => [...amounts, response.data[i].amount]);
      }  
    })
  }

  const chartMaker = () => {
    const chartex = [];
    for(let i=0; i < 7; i++) {
      chartex.push(<div className="chart-container"><div className='chart-amount'>{amounts[i]}</div><div className="chart-column mon" id = 'mon' style = {{'height': `${Math.floor(amounts[i]/biggestAmount * 100)}px`}}></div> {days[i]} </div>)
    }
    return chartex
  }



  useEffect(() => {
    getData();
  },[])

  useEffect(() => {
    setBiggestAmount([...amounts].sort((a,b) => {
      return a-b
    }).reverse()[0])
  },[amounts])

  chartMaker();

    return(
        <Container>
          {chartMaker().map(e => { return e})}
      </Container>
    )
}

export default Chart;
