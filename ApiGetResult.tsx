import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { SafeAreaView, findNodeHandle, PixelRatio, ScrollView, useWindowDimensions, NativeSyntheticEvent, NativeModules, Text, View } from 'react-native';
import { logApiRegisterCardResponse, logApiFailureResponse } from './Log';

import { FincodeVerticalView, GetResultResponse, FincodeErrorResponse, BEARER, getResult, ErrorResponse } from './fincode_component/Fincode';

// **************************
// const
// **************************

const sample_apiKey = '';
const sample_apiVersion = '';
const sample_id = '';

// **************************
// component
// **************************
const ApiGetResult = () => {
  useEffect(() => {
    // 3DS2.0認証結果取得APIを単体で呼び出す
    // 補足：
    //   動作確認の容易さからuseEffect内で実行しているが、加盟店様の任意のタイミングで実行してください
    console.log('■■■ 3DS2.0認証結果取得 API >>>>>');
    getResult(
      {
        authorization: BEARER,
        apiKey: sample_apiKey,
        apiVersion: sample_apiVersion,
        id: sample_id,
      },
      successCallback,
      failureCallback,
    );
  }, []);

  const successCallback = (response: GetResultResponse) => {
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
          <Text>3DS2.0認証結果取得API : 単体で実行</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApiGetResult;
