// import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  // console.log("In FCounter")
  const counter = useCounter(1)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
// Chekc when is useRef updated