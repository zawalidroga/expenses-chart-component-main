import styled from "styled-components"
import React from "react";

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
    background: hsl(10, 79%, 65%);   
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 25px;
    height: 90px;
    width: 400px;
    border-radius: 12px;
    font-family: 'Outfit';
    color: hsl(27, 66%, 92%);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        h3 {
            font-size: 14px;
            margin: 3px;
            font-weight: normal;
        }   

        p{
            margin: 3px;
            font-size: 26px;
            font-weight: normal;
        }
    }




`

function Balance() {
    return(
        <Container>
            <div>
            <h3>My balance</h3>
            <p>${921.48}</p>
            </div>
            <svg width="50" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
        </Container>
    )
}

export default Balance;