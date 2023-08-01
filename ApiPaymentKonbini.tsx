import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiPaymentResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, FincodePaymentResponse, FincodeErrorResponse, BEARER, initPayment, konbini, KonbiniResponse, ErrorResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = '';
const sample_apiVersion = '';
const sample_customerId = '';
const sample_payType = 'Konbini';
const sample_accessId = '';
const sample_id = '';
const sample_paymentTermDay = '';
const sample_deviceName = '';
const sample_winWidth = '';
const sample_winHeight = '';
const sample_pixelRatio = '';
const sample_winSizeType = '';

// **************************
// component
// **************************
const ApiPaymentKonbini = () => {
  useEffect(() => {
    // 決済実行APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 決済実行(コンビニ) API >>>>>');
    konbini(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        customerId: sample_customerId,
        payType: sample_payType,
        accessId: sample_accessId,
        id: sample_id,
        paymentTermDay: sample_paymentTermDay,
        deviceName: sample_deviceName,
        winWidth: sample_winWidth,
        winHeight: sample_winHeight,
        pixelRatio: sample_pixelRatio,
        winSizeType: sample_winSizeType,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: KonbiniResponse) => {
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
          <Text>決済実行API(コンビニ) : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiPaymentKonbini;
