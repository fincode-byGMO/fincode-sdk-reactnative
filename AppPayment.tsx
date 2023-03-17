import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Platform } from 'react-native';
import { logPaymentResponse, logFincodeErrorResponse } from './Log';

import { FincodeVerticalView, FincodeHorizontalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, initPayment, VERTICAL, HORIZONTAL } from './fincode_component/Fincode';

// **************************
// const
// **************************
const sample_apiKey = '';
const sample_apiVersion = '';
const sample_customerId = '';
const sample_payType = 'Card';
const sample_accessId = '';
const sample_id = '';

// **************************
// component
// **************************
const AppPayment = () => {
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
    initPayment(viewId, VERTICAL, {
      authorization: BEARER,
      apiKey: sample_apiKey,
      apiVersion: sample_apiVersion,
      customerId: sample_customerId,
      payType: sample_payType,
      accessId: sample_accessId,
      id: sample_id,
    });
  }, []);

  const paymentSuccessCallback = (e: NativeSyntheticEvent<FincodePaymentResponse>) => {
    logPaymentResponse(e.nativeEvent);
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
          payTimesHidden={true}
          onPaymentSuccessCallback={paymentSuccessCallback}
          onFailureCallback={failureCallback}
          ref={fincodeVerticalViewRef}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPayment;
