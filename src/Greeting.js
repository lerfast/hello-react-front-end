import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from './redux/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return <h1>{greeting}</h1>;
}

export default Greeting;
