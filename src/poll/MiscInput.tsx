import { View } from 'react-native';
import React from 'react';

type PollConatinerProps = {
  image: boolean;
  onSubmit: () => any;
  children: JSX.Element | Array<JSX.Element>;
};

const PollContainer = ({ onSubmit, children }: PollConatinerProps) => {
  return <View />;
};

export default PollContainer;
