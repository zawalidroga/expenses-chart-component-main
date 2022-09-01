import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto auto;

.text {
    font-size: 12px;
    color: hsl(28, 10%, 53%);
}

.text-total {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
}

.text-last {
    justify-self: end;
    grid-column: 2 / 2;
    grid-row: 3 / 3;
}

.total-numb{
    font-weight: bold;
    align-self: end;
    font-size: 36px;
    grid-column: 1 / 1;
    grid-row: 2 / span 2;
}

.last-numb {
    font-weight: bold;
    align-self: end;
    justify-self: end;
    grid-column: 2 / 2;   
    grid-row: 2 / 2;
}
`

function Footer() {
    return(
        <Container>
            <div className="text text-total">Total this month</div>
            <div className="total-numb">$478.33</div>
            
            <div className="last-numb">+2.4%</div>
            <div className="text text-last">from last month</div>
        </Container>
    )
}

export default Footer;