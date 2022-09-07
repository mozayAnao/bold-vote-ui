import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Navbar } from '../../components/navbar';
import { HomeWrapper } from './style';

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <Button>Sign up</Button>
      <Input placeholder='Input' />
    </HomeWrapper>
  );
};

export default Home;
