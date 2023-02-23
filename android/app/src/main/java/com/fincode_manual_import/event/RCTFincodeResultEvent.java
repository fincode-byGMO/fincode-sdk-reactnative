package com.fincode_manual_import.event;

import android.content.Context;

import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardRegisterResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardUpdateResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorInfo;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentResponse;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class RCTFincodeResultEvent {

    public static String PAYMENT_SUCCESS_CALLBACK = "onPaymentSuccessCallback";
    public static String CARD_REGISTER_SUCCESS_CALLBACK = "onCardRegisterSuccessCallback";
    public static String CARD_UPDATE_SUCCESS_CALLBACK = "onCardUpdateSuccessCallback";
    public static String FAILURE_CALLBACK = "onFailureCallback";
    public static String REGISTRATION_NAME = "registrationName";

    public static void sendPaymentSuccess(Context context, int viewId, FincodePaymentResponse res) {
        WritableNativeMapWrap event = new WritableNativeMapWrap();
        event.putString("acs", res.getAcs());
        event.putString("shopId", res.getShopId());
        event.putString("orderId", res.getOrderId());
        event.putString("payType", res.getPayType());
        event.putString("status", res.getStatus());
        event.putString("accessId", res.getAccessId());
        event.putString("processDate", res.getProcessDate());
        event.putString("jobCode", res.getJobCode());
        event.putString("itemCode", res.getItemCode());
        event.putLongToInt("amount", res.getAmount());
        event.putLongToInt("tax", res.getTax());
        event.putLongToInt("totalAmount", res.getTotalAmount());
        event.putString("customerGroupId", res.getCustomerGroupId());
        event.putString("customerId", res.getCustomerId());
        event.putString("cardNo", res.getCardNo());
        event.putString("cardId", res.getCardId());
        event.putString("expire", res.getExpire());
        event.putString("holderName", res.getHolderName());
        event.putString("cardNoHash", res.getCardNoHash());
        event.putString("method", res.getMethod());
        event.putLongToInt("payTimes", res.getPayTimes());
        event.putString("forward", res.getForward());
        event.putString("issuer", res.getIssuer());
        event.putString("transactionId", res.getTransactionId());
        event.putString("approve", res.getApprove());
        event.putString("authMaxDate", res.getAuthMaxDate());
        event.putString("clientField1", res.getClientField1());
        event.putString("clientField2", res.getClientField2());
        event.putString("clientField3", res.getClientField3());
        event.putString("tdsType", res.getTdsType());
        event.putString("tds2Type", res.getTds2Type());
        event.putString("tds2RetUrl", res.getTds2RetUrl());
        event.putString("tds2Status", res.getTds2Status());
        event.putString("merchantName", res.getMerchantName());
        event.putString("sendUrl", res.getSendUrl());
        event.putString("subscriptionId", res.getSubscriptionId());
        event.putString("bulkPaymentId", res.getBulkPaymentId());
        event.putString("cardBrand", res.getCardBrand());
        event.putString("errorCode", res.getErrorCode());
        event.putString("acsUrl", res.getAcsUrl());
        event.putString("paReq", res.getPaReq());
        event.putString("created", res.getCreated());
        event.putString("updated", res.getUpdated());

        if(context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(viewId, PAYMENT_SUCCESS_CALLBACK, event.getArgs());
        }
    }

    public static void sendCardRegisterSuccess(Context context, int viewId, FincodeCardRegisterResponse res) {
        WritableNativeMapWrap event = new WritableNativeMapWrap();
        event.putString("customerId", res.getCustomerId());
        event.putString("cardId", res.getCardId());
        event.putString("defaltFlag", res.getDefaltFlag());
        event.putString("cardNo", res.getCardNo());
        event.putString("expire", res.getExpire());
        event.putString("holderName", res.getHolderName());
        event.putString("cardNoHash", res.getCardNoHash());
        event.putString("created", res.getCreated());
        event.putString("updated", res.getUpdated());
        event.putString("cardType", res.getCardType());
        event.putString("cardBrand", res.getCardBrand());

        if(context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(viewId, CARD_REGISTER_SUCCESS_CALLBACK, event.getArgs());
        }
    }

    public static void sendCardUpdateSuccess(Context context, int viewId, FincodeCardUpdateResponse res) {
        WritableNativeMapWrap event = new WritableNativeMapWrap();
        event.putString("customerId", res.getCustomerId());
        event.putString("cardId", res.getCardId());
        event.putString("defaltFlag", res.getDefaltFlag());
        event.putString("cardNo", res.getCardNo());
        event.putString("expire", res.getExpire());
        event.putString("holderName", res.getHolderName());
        event.putString("cardNoHash", res.getCardNoHash());
        event.putString("created", res.getCreated());
        event.putString("updated", res.getUpdated());
        event.putString("cardType", res.getCardType());
        event.putString("cardBrand", res.getCardBrand());

        if(context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(viewId, CARD_UPDATE_SUCCESS_CALLBACK, event.getArgs());
        }
    }

    public static void sendFailureCallback(Context context, int viewId, FincodeErrorResponse res) {
        WritableNativeMapWrap event = new WritableNativeMapWrap();
        event.putIntToString("statusCode", res.statusCode);;

        WritableNativeArray array = new WritableNativeArray();
        for (FincodeErrorInfo v : res.errorInfo.getList()) {
            array.pushMap(createInfo(v.getCode(), v.getMessage()));
        }
        event.putArray("errors", array);

        if(context instanceof ReactContext) {
            ReactContext reactContext = (ReactContext) context;
            reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(viewId, FAILURE_CALLBACK, event.getArgs());
        }
    }

    private static WritableNativeMap createInfo(String code, String message) {
        WritableNativeMap map = new WritableNativeMap();
        map.putString("code", code);
        map.putString("message", message);

        return map;
    }
}
