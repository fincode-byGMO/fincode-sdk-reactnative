import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules } from 'react-native';
import { logPaymentResponse, logFincodeErrorResponse } from './Log';

// import { FincodeVerticalView } from './fincode_component/FincodeComponent';
// import { FincodePaymentResponse, FincodeErrorResponse } from './fincode_component/types/FincodeTypes';
// import { BEARER } from './fincode_component/constant/FincodeConst';
// import { initPayment } from './fincode_component/event/FincodeInitEvent';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, initPayment } from './fincode_component/Fincode';

// **************************
// const
// **************************
const sample_apiKey = 'p_test_NjRhNGFhYTctZDQ1YS00MzYxLTkzOTgtOWZlMjY0ODhhNWRlMGY0ZDNlMjUtMzg1Yi00ZTNlLTgyNzQtMTQ2ZDhhODAxNGVhc18yMzAyMDg2OTU1Mw';
const sample_apiVersion = '';
const sample_customerId = 'user001';
const sample_payType = 'Card';
const sample_accessId = 'a_sR9x8NJGRRaeMBWboevycw';
const sample_id = 'o_2fzlftwoTiaDfw8htPJAbw';

// **************************
// component
// **************************
const AppPayment = () => {
  // get window size
  const windowSize: ScaledSize = useWindowDimensions();
  const fincodeVerticalViewRef = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(fincodeVerticalViewRef.current);

    // initialize
    initPayment(viewId, {
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
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(800), // 加盟店アプリのレイアウトに応じて設定いただく
            width: PixelRatio.getPixelSizeForLayoutSize(windowSize.width), // 加盟店アプリのレイアウトに応じて設定いただく
          }}
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
