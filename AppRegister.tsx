import React, { useEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent } from 'react-native';
import { logFincodeCardRegisterResponse, logFincodeErrorResponse } from './Log';

import {
  FincodeVerticalView,
  FincodeHorizontalView,
  FincodeCardRegisterResponse,
  FincodeErrorResponse,
  BEARER,
  initCardRegister,
  VERTICAL,
  HORIZONTAL,
  DEFAULT_FLG_ON,
} from './fincode_component/Fincode';

// **************************
// const
// **************************
const sample_apiKey = '';
const sample_apiVersion = '';
const sample_customerId = '';

// **************************
// component
// **************************
const AppRegister = () => {
  // get window size
  const windowSize: ScaledSize = useWindowDimensions();
  const fincodeVerticalViewRef = useRef(null);

  // 加盟店アプリのレイアウトに応じて設定いただく
  const viewStyle =
    Platform.OS === 'android'
      ? { height: PixelRatio.getPixelSizeForLayoutSize(800), width: PixelRatio.getPixelSizeForLayoutSize(windowSize.width) }
      : { height: PixelRatio.getPixelSizeForLayoutSize(800) };

  useEffect(() => {
    const viewId = findNodeHandle(fincodeVerticalViewRef.current);

    // initialize
    initCardRegister(viewId, VERTICAL, {
      authorization: BEARER,
      apiKey: sample_apiKey,
      apiVersion: sample_apiVersion,
      customerId: sample_customerId,
      defaultFlg: DEFAULT_FLG_ON,
    });
  }, []);

  const cardRegisterSuccessCallback = (e: NativeSyntheticEvent<FincodeCardRegisterResponse>) => {
    logFincodeCardRegisterResponse(e.nativeEvent);
  };

  const failureCallback = (e: NativeSyntheticEvent<FincodeErrorResponse>) => {
    logFincodeErrorResponse(e.nativeEvent);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FincodeVerticalView
          style={viewStyle}
          headingHidden={true}
          dynamicLogDisplay={true}
          holderNameHidden={true}
          onCardRegisterSuccessCallback={cardRegisterSuccessCallback}
          onFailureCallback={failureCallback}
          ref={fincodeVerticalViewRef}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppRegister;
