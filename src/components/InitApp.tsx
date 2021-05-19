import React, { useEffect } from 'react';
import { initApp as initAppThunk } from '../redux/actions/thunks';
import { connect } from 'react-redux';

/*
 * Inicializálja a storet alapadatokkal,
 * ezért nem kell a getbooks a Books komponensbe pl
 * */
export const InitApp: React.FC<{ initApp: any }> = ({ children, initApp }) => {
  useEffect(() => {
    initApp();
  }, [initApp]);
  return <>{children}</>;
};

// @ts-ignore
const mapDispatchToProps = dispatch => {
  return {
    initApp: () => dispatch(initAppThunk()),
  };
};

export default connect(null, mapDispatchToProps)(InitApp);
