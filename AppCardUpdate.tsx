import React, { useEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent } from 'react-native';

import { FincodeVerticalView } from './fincode_component/FincodeComponent';
import { FincodeCardUpdateResponse, FincodeErrorResponse } from './fincode_component/types/FincodeTypes';
import { BEARER, DEFAULT_FLG_ON } from './fincode_component/constant/FincodeConst';
import { initCardUpdate } from './fincode_component/event/FincodeInitEvent';

// **************************
// const
// **************************
const sample_apiKey = 'p_test_NjRhNGFhYTctZDQ1YS00MzYxLTkzOTgtOWZlMjY0ODhhNWRlMGY0ZDNlMjUtMzg1Yi00ZTNlLTgyNzQtMTQ2ZDhhODAxNGVhc18yMzAyMDg2OTU1M';
const sample_apiVersion = '';
const sample_customerId = 'user001';
const sample_cardId = '';

// **************************
// component
// **************************
const AppCardUpdate = () => {
  // get window size
  const windowSize: ScaledSize = useWindowDimensions();
  const fincodeVerticalViewRef = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(fincodeVerticalViewRef.current);

    // initialize
    initCardUpdate(viewId, {
      authorization: BEARER,
      apiKey: sample_apiKey,
      apiVersion: sample_apiVersion,
      customerId: sample_customerId,
      defaultFlg: DEFAULT_FLG_ON,
      cardId: sample_cardId,
    });
  }, []);

  const cardUpdateSuccessCallback = (e: NativeSyntheticEvent<FincodeCardUpdateResponse>) => {
    console.log('■■■ successCallback  ' + e.nativeEvent.cardId);
  };

  const failureCallback = (e: NativeSyntheticEvent<FincodeErrorResponse>) => {
    console.log('■■■ failureCallback  ' + e.nativeEvent.value);
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
          onCardUpdateSuccessCallback={cardUpdateSuccessCallback}
          onFailureCallback={failureCallback}
          ref={fincodeVerticalViewRef}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppCardUpdate;
