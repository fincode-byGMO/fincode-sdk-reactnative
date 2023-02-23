import React, { useEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent } from 'react-native';
import { logFincodeCardRegisterResponse, logFincodeErrorResponse } from './Log';

import { FincodeVerticalView } from './fincode_component/FincodeComponent';
import { FincodeCardRegisterResponse, FincodeErrorResponse } from './fincode_component/types/FincodeTypes';
import { BEARER, DEFAULT_FLG_ON } from './fincode_component/constant/FincodeConst';
import { initCardRegister } from './fincode_component/event/FincodeInitEvent';

// **************************
// const
// **************************
const sample_apiKey = 'p_test_NjRhNGFhYTctZDQ1YS00MzYxLTkzOTgtOWZlMjY0ODhhNWRlMGY0ZDNlMjUtMzg1Yi00ZTNlLTgyNzQtMTQ2ZDhhODAxNGVhc18yMzAyMDg2OTU1Mw';
const sample_apiVersion = '';
const sample_customerId = 'user001';

// **************************
// component
// **************************
const AppRegister = () => {
  // get window size
  const windowSize: ScaledSize = useWindowDimensions();
  const fincodeVerticalViewRef = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(fincodeVerticalViewRef.current);

    // initialize
    initCardRegister(viewId, {
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
          style={{
            height: PixelRatio.getPixelSizeForLayoutSize(800),
            //width: PixelRatio.getPixelSizeForLayoutSize(windowSize.width), // TODO：これを入れるとiOSで幅が画面外になる。Android側で必須か再確認する
          }}
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
