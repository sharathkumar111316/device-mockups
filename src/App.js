import React from 'react'
import styled from 'styled-components';
import { Ios, Android } from './Phone'
import CoursesImg from './Courses.png'
import AlertImg from './Alert.png'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #181818;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;  
`;

const App = () => {
  return (
    <Container>
      <Ios image = {CoursesImg}/>
      <Android image = {AlertImg}/>
    </Container>
  );
};

export default App