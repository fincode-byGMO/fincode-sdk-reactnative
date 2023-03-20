package com.fincode_manual_import;

import android.util.Log;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;

import com.epsilon.fincode.fincodesdk.Repository.FincodePaymentRepository;
import com.epsilon.fincode.fincodesdk.Repository.FincodeCardOperateRepository;
import com.epsilon.fincode.fincodesdk.Repository.FincodeAuthRepository;
import com.epsilon.fincode.fincodesdk.api.FincodeCallback;
import com.epsilon.fincode.fincodesdk.config.DataHolder;
import com.epsilon.fincode.fincodesdk.config.FincodeConfiguration;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeAuthRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeAuthResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardInfo;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardInfoListResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardRegisterRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardRegisterResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardUpdateRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardUpdateResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorInfo;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeGetResultResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentSecureRequest;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentSecureResponse;
import com.epsilon.fincode.fincodesdk.enumeration.Authorization;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.fincode_manual_import.event.RCTFincodeResultEvent;
import com.fincode_manual_import.event.WritableNativeMapWrap;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.ListIterator;

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
                        String tds2RetUrl,
                        String tds2ChAccChange,
                        String tds2ChAccDate,
                        String tds2ChAccPwChange,
                        String tds2NbPurchaseAccount,
                        String tds2PaymentAccAge,
                        String tds2ProvisionAttemptsDay,
                        String tds2ShipAddressUsage,
                        String tds2ShipNameInd,
                        String tds2SuspiciousAccActivity,
                        String tds2TxnActivityDay,
                        String tds2TxnActivityYear,
                        String tds2ThreeDsReqAuthData,
                        String tds2ThreeDsReqAuthMethod,
                        String tds2ThreeDsReqAuthTimestamp,
                        String tds2AddrMatch,
                        String tds2BillAddrCity,
                        String tds2BillAddrCountry,
                        String tds2BillAddrLine1,
                        String tds2BillAddrLine2,
                        String tds2BillAddrLine3,
                        String tds2BillAddrPostCode,
                        String tds2BillAddrState,
                        String tds2Email,
                        String tds2HomePhoneCc,
                        String tds2HomePhoneNo,
                        String tds2MobilePhoneCc,
                        String tds2MobilePhoneNo,
                        String tds2WorkPhoneCc,
                        String tds2WorkPhoneNo,
                        String tds2ShipAddrCity,
                        String tds2ShipAddrCountry,
                        String tds2ShipAddrLine1,
                        String tds2ShipAddrLine2,
                        String tds2ShipAddrLine3,
                        String tds2ShipAddrPostCode,
                        String tds2ShipAddrState,
                        String tds2DeliveryEmailAddress,
                        String tds2DeliveryTimeframe,
                        String tds2GiftCardAmount,
                        String tds2GiftCardCount,
                        String tds2GiftCardCurr,
                        String tds2PreOrderDate,
                        String tds2PreOrderPurchaseInd,
                        String tds2ReorderItemsInd,
                        String tds2ShipInd,
                        String tds2RecurringExpiry,
                        String tds2RecurringFrequency,
                        Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

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
        req.setTds2RetUrl(tds2RetUrl);
        req.setTds2ChAccChange(tds2ChAccChange);
        req.setTds2ChAccDate(tds2ChAccDate);
        req.setTds2ChAccPwChange(tds2ChAccPwChange);
        req.setTds2NbPurchaseAccount(tds2NbPurchaseAccount);
        req.setTds2PaymentAccAge(tds2PaymentAccAge);
        req.setTds2ProvisionAttemptsDay(tds2ProvisionAttemptsDay);
        req.setTds2ShipAddressUsage(tds2ShipAddressUsage);
        req.setTds2ShipNameInd(tds2ShipNameInd);
        req.setTds2SuspiciousAccActivity(tds2SuspiciousAccActivity);
        req.setTds2TxnActivityDay(tds2TxnActivityDay);
        req.setTds2TxnActivityYear(tds2TxnActivityYear);
        req.setTds2ThreeDsReqAuthData(tds2ThreeDsReqAuthData);
        req.setTds2ThreeDsReqAuthMethod(tds2ThreeDsReqAuthMethod);
        req.setTds2ThreeDsReqAuthTimestamp(tds2ThreeDsReqAuthTimestamp);
        req.setTds2AddrMatch(tds2AddrMatch);
        req.setTds2BillAddrCity(tds2BillAddrCity);
        req.setTds2BillAddrCountry(tds2BillAddrCountry);
        req.setTds2BillAddrLine1(tds2BillAddrLine1);
        req.setTds2BillAddrLine2(tds2BillAddrLine2);
        req.setTds2BillAddrLine3(tds2BillAddrLine3);
        req.setTds2BillAddrPostCode(tds2BillAddrPostCode);
        req.setTds2BillAddrState(tds2BillAddrState);
        req.setTds2Email(tds2Email);
        req.setTds2HomePhoneCc(tds2HomePhoneCc);
        req.setTds2HomePhoneNo(tds2HomePhoneNo);
        req.setTds2MobilePhoneCc(tds2MobilePhoneCc);
        req.setTds2MobilePhoneNo(tds2MobilePhoneNo);
        req.setTds2WorkPhoneCc(tds2WorkPhoneCc);
        req.setTds2WorkPhoneNo(tds2WorkPhoneNo);
        req.setTds2ShipAddrCity(tds2ShipAddrCity);
        req.setTds2ShipAddrCountry(tds2ShipAddrCountry);
        req.setTds2ShipAddrLine1(tds2ShipAddrLine1);
        req.setTds2ShipAddrLine2(tds2ShipAddrLine2);
        req.setTds2ShipAddrLine3(tds2ShipAddrLine3);
        req.setTds2ShipAddrPostCode(tds2ShipAddrPostCode);
        req.setTds2ShipAddrState(tds2ShipAddrState);
        req.setTds2DeliveryEmailAddress(tds2DeliveryEmailAddress);
        req.setTds2DeliveryTimeframe(tds2DeliveryTimeframe);
        req.setTds2GiftCardAmount(tds2GiftCardAmount);
        req.setTds2GiftCardCount(tds2GiftCardCount);
        req.setTds2GiftCardCurr(tds2GiftCardCurr);
        req.setTds2PreOrderDate(tds2PreOrderDate);
        req.setTds2PreOrderPurchaseInd(tds2PreOrderPurchaseInd);
        req.setTds2ReorderItemsInd(tds2ReorderItemsInd);
        req.setTds2ShipInd(tds2ShipInd);
        req.setTds2RecurringExpiry(tds2RecurringExpiry);
        req.setTds2RecurringFrequency(tds2RecurringFrequency);

        FincodePaymentRepository.getInstance().payment(header, id, req, new FincodeCallback<FincodePaymentResponse>() {
            @Override
            public void onResponse(FincodePaymentResponse fincodePaymentResponse) {

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

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    private HashMap<String, String> createHeader(String auth, String apiKey, String apiVersion) {
        HashMap<String, String> map = new HashMap<String, String>();
        map.put("Content-Type", "application/json");
        map.put("Authorization", getAuth(auth).getValue() + " " + apiKey);

        if (apiVersion != null && !apiVersion.isEmpty()) {
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

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeCardOperateRepository.getInstance().getCardInfoList(header, customerId, new FincodeCallback<FincodeCardInfoListResponse>() {
            @Override
            public void onResponse(FincodeCardInfoListResponse fincodeCardInfoListResponse) {
                WritableNativeArray args = new WritableNativeArray();

                for (FincodeCardInfo v : fincodeCardInfoListResponse.cardInfoList) {
                    args.pushMap(RCTFincodeResultEvent.sendCardInfoListCallback(v));
                }
                if (successCallback != null) {
                    successCallback.invoke(
                            args
                    );
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    @ReactMethod
    public void registerCard(String authorization,
                             String apiKey,
                             String apiVersion,
                             String customerId,
                             String defaultFlg,
                             String cardNo,
                             String expire,
                             String holderName,
                             String securityCode,
                             String token,
                             Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        FincodeCardRegisterRequest req = new FincodeCardRegisterRequest();
        req.setDefaltFlag(defaultFlg);
        req.setCardNo(cardNo);
        req.setExpire(expire);
        req.setHolderName(holderName);
        req.setSecurityCode(securityCode);
        req.setToken(token);


        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeCardOperateRepository.getInstance().cardRegister(header, customerId, req, new FincodeCallback<FincodeCardRegisterResponse>() {
            @Override
            public void onResponse(FincodeCardRegisterResponse fincodeCardRegisterResponse) {

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodeCardRegisterResponse.getCustomerId(),
                            fincodeCardRegisterResponse.getCardId(),
                            fincodeCardRegisterResponse.getDefaltFlag(),
                            fincodeCardRegisterResponse.getCardNo(),
                            fincodeCardRegisterResponse.getExpire(),
                            fincodeCardRegisterResponse.getHolderName(),
                            fincodeCardRegisterResponse.getCardNoHash(),
                            fincodeCardRegisterResponse.getCreated(),
                            fincodeCardRegisterResponse.getUpdated(),
                            fincodeCardRegisterResponse.getCardType(),
                            fincodeCardRegisterResponse.getCardBrand()
                    );
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    @ReactMethod
    public void updateCard(String authorization,
                           String apiKey,
                           String apiVersion,
                           String customerId,
                           String cardId,
                           String defaultFlg,
                           String expire,
                           String holderName,
                           String securityCode,
                           String token,
                           Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        FincodeCardUpdateRequest req = new FincodeCardUpdateRequest();
        req.setDefaltFlag(defaultFlg);
        req.setExpire(expire);
        req.setHolderName(holderName);
        req.setSecurityCode(securityCode);
        req.setToken(token);

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeCardOperateRepository.getInstance().cardUpdate(header, customerId, cardId, req, new FincodeCallback<FincodeCardUpdateResponse>() {
            @Override
            public void onResponse(FincodeCardUpdateResponse fincodeCardUpdateResponse) {

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodeCardUpdateResponse.getCustomerId(),
                            fincodeCardUpdateResponse.getCardId(),
                            fincodeCardUpdateResponse.getDefaltFlag(),
                            fincodeCardUpdateResponse.getCardNo(),
                            fincodeCardUpdateResponse.getExpire(),
                            fincodeCardUpdateResponse.getHolderName(),
                            fincodeCardUpdateResponse.getCardNoHash(),
                            fincodeCardUpdateResponse.getCreated(),
                            fincodeCardUpdateResponse.getUpdated(),
                            fincodeCardUpdateResponse.getCardType(),
                            fincodeCardUpdateResponse.getCardBrand()
                    );
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    @ReactMethod
    public void authentication(String authorization,
                               String apiKey,
                               String apiVersion,
                               String id,
                               String param,
                               Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        FincodeAuthRequest req = new FincodeAuthRequest();
        req.setParam(param);

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeAuthRepository.getInstance().authentication(header, id, req, new FincodeCallback<FincodeAuthResponse>() {
            @Override
            public void onResponse(FincodeAuthResponse fincodeAuthResponse) {

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodeAuthResponse.getTdsTransResult(),
                            fincodeAuthResponse.getTdsTransResultReason(),
                            fincodeAuthResponse.getChallegeUrl()
                    );
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }

    @ReactMethod
    public void getResult(String authorization,
                          String apiKey,
                          String apiVersion,
                          String id,
                          Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;


        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodeAuthRepository.getInstance().getResult(header, id, new FincodeCallback<FincodeGetResultResponse>() {
            @Override
            public void onResponse(FincodeGetResultResponse fincodeGetResultResponse) {

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodeGetResultResponse.getTdsTransResult(),
                            fincodeGetResultResponse.getTdsTransResultReason()
                    );
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }


    @ReactMethod
    public void paymentSecure(String authorization,
                              String apiKey,
                              String apiVersion,
                              String id,
                              String payType,
                              String accessId,
                              Callback failureCallback, Callback successCallback) {

        this.successCallback = successCallback;
        this.failureCallback = failureCallback;

        HashMap<String, String> header = createHeader(authorization, apiKey, apiVersion);
        FincodePaymentSecureRequest req = new FincodePaymentSecureRequest();
        req.setId(id);
        req.setPayType(payType);
        req.setAccessId(accessId);

        FincodePaymentRepository.getInstance().paymentSecure(header, id, req, new FincodeCallback<FincodePaymentSecureResponse>() {
            @Override
            public void onResponse(FincodePaymentSecureResponse fincodePaymentSecureResponse) {

                if (successCallback != null) {
                    successCallback.invoke(
                            fincodePaymentSecureResponse.getShopId(),
                            fincodePaymentSecureResponse.getPayType(),
                            fincodePaymentSecureResponse.getStatus(),
                            fincodePaymentSecureResponse.getAccessId(),
                            fincodePaymentSecureResponse.getProcessDate(),
                            fincodePaymentSecureResponse.getJobCode(),
                            fincodePaymentSecureResponse.getItemCode(),
                            fincodePaymentSecureResponse.getAmount() != null ? fincodePaymentSecureResponse.getAmount().toString() : "",
                            fincodePaymentSecureResponse.getTax() != null ? fincodePaymentSecureResponse.getTax().toString() : "",
                            fincodePaymentSecureResponse.getTotalAmount() != null ? fincodePaymentSecureResponse.getTotalAmount().toString() : "",
                            fincodePaymentSecureResponse.getCustomerGroupId(),
                            fincodePaymentSecureResponse.getCustomerId(),
                            fincodePaymentSecureResponse.getCardNo(),
                            fincodePaymentSecureResponse.getCardId(),
                            fincodePaymentSecureResponse.getExpire(),
                            fincodePaymentSecureResponse.getHolderName(),
                            fincodePaymentSecureResponse.getCardNoHash(),
                            fincodePaymentSecureResponse.getMethod(),
                            fincodePaymentSecureResponse.getPayTimes() != null ? fincodePaymentSecureResponse.getPayTimes().toString() : "",
                            fincodePaymentSecureResponse.getForward(),
                            fincodePaymentSecureResponse.getIssuer(),
                            fincodePaymentSecureResponse.getTransactionId(),
                            fincodePaymentSecureResponse.getApprove(),
                            fincodePaymentSecureResponse.getAuthMaxDate(),
                            fincodePaymentSecureResponse.getClientField1(),
                            fincodePaymentSecureResponse.getClientField2(),
                            fincodePaymentSecureResponse.getClientField3(),
                            fincodePaymentSecureResponse.getTdsType(),
                            fincodePaymentSecureResponse.getTds2Type(),
                            fincodePaymentSecureResponse.getTds2RetUrl(),
                            fincodePaymentSecureResponse.getTds2Status(),
                            fincodePaymentSecureResponse.getMerchantName(),
                            fincodePaymentSecureResponse.getSendUrl(),
                            fincodePaymentSecureResponse.getSubscriptionId(),
                            fincodePaymentSecureResponse.getBulkPaymentId(),
                            fincodePaymentSecureResponse.getBrand(),
                            fincodePaymentSecureResponse.getErrorCode(),
                            fincodePaymentSecureResponse.getCreated(),
                            fincodePaymentSecureResponse.getUpdated());
                }
            }

            @Override
            public void onFailure(FincodeErrorResponse fincodeErrorResponse) {

                WritableNativeArray args1 = new WritableNativeArray();
                args1.pushString(fincodeErrorResponse.statusCode.toString());

                WritableNativeArray args2 = new WritableNativeArray();
                for (FincodeErrorInfo v : fincodeErrorResponse.errorInfo.getList()) {
                    args2.pushMap(RCTFincodeResultEvent.createInfo(v.getCode(), v.getMessage()));
                }

                if (failureCallback != null) {
                    failureCallback.invoke(args1, args2);
                }
            }
        });
    }


    private Authorization getAuth(String auth) {
        if (auth == null || auth.isEmpty()) {
            return Authorization.NONE;
        }

        String value = auth.toLowerCase();
        if ("basic".equals(value)) {
            return Authorization.BASIC;
        } else if ("bearer".equals(value)) {
            return Authorization.BEARER;
        } else {
            return Authorization.NONE;
        }
    }
}
