import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiCardInfoListResponse, logApiFailureResponse } from './Log';

import {
  FincodeVerticalView,
  FincodePaymentResponse,
  FincodeErrorResponse,
  BEARER,
  initPayment,
  payment,
  PaymentResponse,
  CardInfo,
  cardInfoList,
  CardInfoListResponse,
  ErrorResponse,
} from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = 'p_test_NjRhNGFhYTctZDQ1YS00MzYxLTkzOTgtOWZlMjY0ODhhNWRlMGY0ZDNlMjUtMzg1Yi00ZTNlLTgyNzQtMTQ2ZDhhODAxNGVhc18yMzAyMDg2OTU1Mw';
const sample_apiVersion = '';
const sample_customerId = 'user001';

// **************************
// component
// **************************
const ApiCardInfoList = () => {
  useEffect(() => {
    // カード一覧取得APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ カード一覧取得 API >>>>>');
    cardInfoList(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: CardInfoListResponse) => {
    console.log('■■■ コールバック :  成功');
    logApiCardInfoListResponse(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>カード一覧取得API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiCardInfoList;
