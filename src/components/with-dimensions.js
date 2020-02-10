/* src/components/with-dimensions.js */
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {SafeAreaConsumer} from 'react-native-safe-area-context';

const withDimensions = BaseComponent => props => {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
  });
//setting the initial width;


  const handleOrientationChange = ({window}) => {

    const {width} = window;
    setDimensions({width});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
//when the component is mounted and the dimensions change, we will go to the handleOrientationChange function; 
    return () =>
      Dimensions.removeEventListener('change', handleOrientationChange);
    // when the component is unmounted, we will remove the event listener; 
  }, []);

  return (
    <SafeAreaConsumer>
    {insets => (
      <BaseComponent
        dimensions={{width: dimensions.width - insets.left - insets.right}}
        {...props}
      />
    )}
  </SafeAreaConsumer>
  );
};

export default withDimensions;