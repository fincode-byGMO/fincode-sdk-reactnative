import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiPaymentResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, paypay, ErrorResponse, PaypayResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = '';
const sample_apiVersion = '';
const sample_customerId = '';
const sample_payType = 'Paypay';
const sample_accessId = '';
const sample_id = '';
const sample_redirectUrl = '';
const sample_redirectType = '';
const sample_userAgent = '';

// **************************
// component
// **************************
const ApiPaymentPaypay = () => {
  useEffect(() => {
    // 決済実行APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 決済実行(PayPay) API >>>>>');
    paypay(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        payType: sample_payType,
        accessId: sample_accessId,
        id: sample_id,
        customerId: sample_customerId,
        redirectUrl: sample_redirectUrl,
        redirectType: sample_redirectType,
        userAgent: sample_userAgent,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: PaypayResponse) => {
    console.log('■■■ コールバック :  成功');
    console.log(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>決済実行API(PayPay) : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiPaymentPaypay;
