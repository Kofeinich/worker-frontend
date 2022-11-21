import React from 'react';
import styled from "styled-components";
import {Button} from "../components/button/Button";
import {Workers} from "../components/workers/Workers";

const StyledPanelWrapper = styled.section`{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}`

const StyledPanel = styled.div`{
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  width: 1200px;
}`

const Heading = styled.h1`{
  font-family: "Al Bayan", sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}`

const ButtonWrapper = styled.div`{
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
}`


export const AdminPanel = () => {


    return <StyledPanelWrapper>
        <StyledPanel>
            <Heading>Панель управления</Heading>
            <ButtonWrapper>
                <Button text={'Add user'} color={'white'} bgColor={'red'}/>
                <Button text={'Del user by status'} color={'darkgreen'} bgColor={'green'}/>
                <Button text={'Get with Max Org'} color={'white'} bgColor={'blue'}/>
            </ButtonWrapper>
            <Workers/>
        </StyledPanel>
    </StyledPanelWrapper>
}
