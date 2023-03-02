package com.fincode_manual_import;

import android.util.Log;

import androidx.annotation.NonNull;

import com.epsilon.fincode.fincodesdk.Repository.FincodePaymentRepository;
import com.epsilon.fincode.fincodesdk.Repository.FincodeCardOperateRepository;
import com.epsilon.fincode.fincodesdk.api.FincodeCallback;
import com.epsilon.fincode.fincodesdk.config.DataHolder;
import com.epsilon.fincode.fincodesdk.config.FincodeConfiguration;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardInfo;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardInfoListResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorInfo;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentResponse;
import com.epsilon.fincode.fincodesdk.enumeration.Authorization;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.fincode_manual_import.event.RCTFincodeResultEvent;
import com.fincode_manual_import.event.WritableNativeMapWrap;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.HashMap;

public class FincodeApiModule extends ReactContextBaseJavaModule {

    private Callback successCallback = null;
    private Callback failureCallback = null;

    FincodeApiModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return FincodeApiModule.class.getSimpleName();
    }

    @ReactMethod
    public void payment(String authorization,
                        String apiKey,
                        String apiVersion,
                        String payType,
                        String accessId,
                        String id,
                        String token,
                        String cardNo,
                        String expire,
                        String customerId,
                        String cardId,
                        String method,
                        String payTimes,
                        String securityCode,
                        String holderName,
                        Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        Log.d("fincode","■■■ native 決済実行API :  開始");
        Log.d("fincode","authorization : " + authorization);
        Log.d("fincode","apiKey : " + apiKey);
        Log.d("fincode","apiVersion : " + apiVersion);
        Log.d("fincode","customerId : " + customerId);
        Log.d("fincode","payType : " + payType);
        Log.d("fincode","accessId : " + accessId);
        Log.d("fincode","id : " + id);
        Log.d("fincode","token : " + token);
        Log.d("fincode","cardNo : " + cardNo);
        Log.d("fincode","expire : " + expire);
        Log.d("fincode","cardId : " + cardId);
        Log.d("fincode","method : " + method);
        Log.d("fincode","payTimes : " + payTimes);
        Log.d("fincode","securityCode : " + securityCode);
        Log.d("fincode","holderName : " + holderName);

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodePaymentRequest req = new FincodePaymentRequest();
        req.setPayType(payType);
        req.setAccessId(accessId);
        req.setOrderId(id);
        req.setToken(token);
        req.setCardNo(cardNo);
        req.setExpire(expire);
        req.setCustomerId(customerId);
        req.setCardId(cardId);
        req.setMethod(method);
        req.setPayTimes(payTimes);
        req.setSecurityCode(securityCode);
        req.setHolderName(holderName);

        FincodePaymentRepository.getInstance().payment(header, id, req, new FincodeCallback<FincodePaymentResponse>() {
            @Override
            public void onResponse(FincodePaymentResponse fincodePaymentResponse) {
                Log.d("fincode", "■■■ native　API　成功");

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodePaymentResponse.getAcs(),
                            fincodePaymentResponse.getShopId(),
                            fincodePaymentResponse.getOrderId(),
                            fincodePaymentResponse.getPayType(),
                            fincodePaymentResponse.getStatus(),
                            fincodePaymentResponse.getAccessId(),
                            fincodePaymentResponse.getProcessDate(),
                            fincodePaymentResponse.getJobCode(),
                            fincodePaymentResponse.getItemCode(),
                            fincodePaymentResponse.getAmount() != null ? fincodePaymentResponse.getAmount().toString() : "",
                            fincodePaymentResponse.getTax() != null ? fincodePaymentResponse.getTax().toString() : "",
                            fincodePaymentResponse.getTotalAmount() != null ? fincodePaymentResponse.getTotalAmount().toString() : "",
                            fincodePaymentResponse.getCustomerGroupId(),
                            fincodePaymentResponse.getCustomerId(),
                            fincodePaymentResponse.getCardNo(),
                            fincodePaymentResponse.getCardId(),
                            fincodePaymentResponse.getExpire(),
                            fincodePaymentResponse.getHolderName(),
                            fincodePaymentResponse.getCardNoHash(),
                            fincodePaymentResponse.getMethod(),
                            fincodePaymentResponse.getPayTimes() != null ? fincodePaymentResponse.getPayTimes().toString() : "",
                            fincodePaymentResponse.getForward(),
                            fincodePaymentResponse.getIssuer(),
                            fincodePaymentResponse.getTransactionId(),
                            fincodePaymentResponse.getApprove(),
                            fincodePaymentResponse.getAuthMaxDate(),
                            fincodePaymentResponse.getClientField1(),
                            fincodePaymentResponse.getClientField2(),
                            fincodePaymentResponse.getClientField3(),
                            fincodePaymentResponse.getTdsType(),
                            fincodePaymentResponse.getTds2Type(),
                            fincodePaymentResponse.getTds2RetUrl(),
                            fincodePaymentResponse.getTds2Status(),
                            fincodePaymentResponse.getMerchantName(),
                            fincodePaymentResponse.getSendUrl(),
                            fincodePaymentResponse.getSubscriptionId(),
                            fincodePaymentResponse.getBulkPaymentId(),
                            fincodePaymentResponse.getCardBrand(),
                            fincodePaymentResponse.getErrorCode(),
                            fincodePaymentResponse.getAcsUrl(),
                            fincodePaymentResponse.getPaReq(),
                            fincodePaymentResponse.getCreated(),
                            fincodePaymentResponse.getUpdated());
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {
                Log.d("fincode","■■■ native　API　失敗");

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if(failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    private HashMap<String, String> createHeader(String auth, String apiKey, String apiVersion) {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("Content-Type", "application/json");
        map.put("Authorization", getAuth(auth).getValue() + " " + apiKey);

        if(apiVersion != null && !apiVersion.isEmpty()) {
            map.put("Api-Version", apiVersion);
        }

        return map;
    }
    @ReactMethod
    public void cardInfoList(String authorization,
                        String apiKey,
                        String apiVersion,
                        String customerId,
                        Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        Log.d("fincode","■■■ native カード一覧取得API :  開始");
        Log.d("fincode","authorization : " + authorization);
        Log.d("fincode","apiKey : " + apiKey);
        Log.d("fincode","apiVersion : " + apiVersion);
        Log.d("fincode","customerId : " + customerId);

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeCardOperateRepository.getInstance().getCardInfoList(header, customerId, new FincodeCallback<FincodeCardInfoListResponse>() {
            @Override
            public void onResponse(FincodeCardInfoListResponse fincodeCardInfoListResponse) {
                Log.d("fincode", "■■■ native　API　成功");
                WritableNativeArray args1 = new WritableNativeArray();
                for (FincodeCardInfo v : fincodeCardInfoListResponse.cardInfoList) {
                    args1.pushArray(RCTFincodeResultEvent.createArray(
                            v.getCustomerId(),
                            v.getCardId(),
                            v.getDefaltFlag(),
                            v.getCardNo(),
                            v.getExpire(),
                            v.getHolderName(),
                            v.getCardNoHash(),
                            v.getCreated(),
                            v.getUpdated(),
                            v.getCardType(),
                            v.getCardBrand()
                    ));
                }


                if (successCallback != null) {
                    successCallback.invoke(


                    );

                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {
                Log.d("fincode","■■■ native　API　失敗");

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if(failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    private Authorization getAuth(String auth) {
        if(auth == null || auth.isEmpty()) {
            return Authorization.NONE;
        }

        String value = auth.toLowerCase();
        if("basic".equals(value)) {
            return Authorization.BASIC;
        } else if("bearer".equals(value)) {
            return Authorization.BEARER;
        } else {
            return Authorization.NONE;
        }
    }
}
