import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiPaymentResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, initPayment, payment, PaymentResponse, ErrorResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = '';
const sample_apiVersion = '';
const sample_customerId = '';
const sample_payType = 'Card';
const sample_accessId = '';
const sample_id = '';
const sample_token = '';
const sample_cardNo = '4111111111111111';
const sample_expire = '2612';
const sample_cardId = '';
const sample_method = '1';
const sample_payTimes = '';
const sample_securityCode = '1111';
const sample_holderName = 'TARO YAMADA';

// **************************
// component
// **************************
const ApiPayment = () => {
  useEffect(() => {
    // 決済実行APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 決済実行 API >>>>>');
    payment(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
        payType: sample_payType,
        accessId: sample_accessId,
        id: sample_id,
        token: sample_token,
        cardNo: sample_cardNo,
        expire: sample_expire,
        cardId: sample_cardId,
        method: sample_method,
        payTimes: sample_payTimes,
        securityCode: sample_securityCode,
        holderName: sample_holderName,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: PaymentResponse) => {
    console.log('■■■ コールバック :  成功');
    logApiPaymentResponse(response);
  };

  const failureCallback = (response: ErrorResponse) => {
    console.log('■■■ コールバック :  失敗');
    logApiFailureResponse(response);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text>決済実行API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiPayment;
