import React from 'react';
import { DashboardWrapper } from './style';
import { BrandLogo } from '../../components/brandLogo';
import { Line } from '../accessPages/style';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { SideNav } from './sideNav';
import { Dashboards } from './dashboard';

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div className="sidebar">
        <BrandLogo textSize={25} logoSize={4} />
        <Marginer direction="vertical" margin={10} />
        <Line width="100%" />
        <Marginer direction="vertical" margin={10} />

        <SideNav />
      </div>
      <main className="main">
        <Navbar />
        <Dashboards />
      </main>
    </DashboardWrapper>
  );
};
