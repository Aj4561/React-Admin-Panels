// src/components/App.js
import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import DFD from '../../components/pannel/DFD';

const Pannels = () => {
  return (
    <div className='component-container'>

    <TransformWrapper>
      <TransformComponent>
        <DFD />
      </TransformComponent>
    </TransformWrapper>
    </div>
  );
};

export default Pannels;
