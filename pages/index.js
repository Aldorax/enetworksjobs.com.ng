/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Header from 'components/atoms/Header';
import {
  Hero,
  Reason,
  Skill,
  Opinion,
  Subscribe,
  Description,
} from 'components';
import { API_URL } from 'helpers/env';

const index = ({ data }) => {
  return (
    <>
      <Header title="Become an official at enetworks today" />

      <Hero />
      <Reason />
      <Description />
      <Skill />
      {/* <Opinion data={data} /> */}
      <Subscribe />
    </>
  );
};

index.layout = 'mainLayout';

export default index;
