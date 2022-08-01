import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-rows: 1fr 1fr;

.text {
    font-size: 12px;
    color: hsl(28, 10%, 53%);

}

.text-total {
    grid-column: 1 span 1;
    grid-row: 1 1;
}
.text-last {
    grid-column: 2 2;
    grid-row: 2 2;
}
.total-numb{
    font-size: 22px;
    grid-column: 1 1;
    grid-row: 2 2;
}

.last-numb {
    grid-column: 2 2;
    grid-row: 1 1;
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