package com.fincode_manual_import.util;

import com.epsilon.fincode.fincodesdk.config.FincodeCardRegisterConfiguration;
import com.epsilon.fincode.fincodesdk.config.FincodeCardUpdateConfiguration;
import com.epsilon.fincode.fincodesdk.config.FincodePaymentConfiguration;
import com.epsilon.fincode.fincodesdk.enumeration.Authorization;
import com.epsilon.fincode.fincodesdk.enumeration.DefaultFlg;
import com.facebook.react.bridge.ReadableArray;
import com.fincode_manual_import.constant.ArgsCardRegister;
import com.fincode_manual_import.constant.ArgsCardUpdate;
import com.fincode_manual_import.constant.ArgsPayment;

public class ConfigUtil {

    public static FincodePaymentConfiguration payment(ReadableArray args) {

        FincodePaymentConfiguration config = new FincodePaymentConfiguration();
        config.authorization = getAuthorization(args.getString(ArgsPayment.AUTHORIZATION.index()));
        config.apiKey = args.getString(ArgsPayment.API_KEY.index());
        config.apiVersion = args.getString(ArgsPayment.API_VERSION.index());
        config.customerId = args.getString(ArgsPayment.CUSTOMER_ID.index());
        config.payType = args.getString(ArgsPayment.PAY_TYPE.index());
        config.accessId = args.getString(ArgsPayment.ACCESS_ID.index());
        config.id = args.getString(ArgsPayment.ID.index());

        return config;
    }

    public static FincodeCardRegisterConfiguration cardRegister(ReadableArray args) {

        FincodeCardRegisterConfiguration config = new FincodeCardRegisterConfiguration();
        config.authorization = getAuthorization(args.getString(ArgsCardRegister.AUTHORIZATION.index()));
        config.apiKey = args.getString(ArgsCardRegister.API_KEY.index());
        config.apiVersion = args.getString(ArgsCardRegister.API_VERSION.index());
        config.customerId = args.getString(ArgsCardRegister.CUSTOMER_ID.index());
        config.defaultFlg = DefaultFlg.of(args.getString(ArgsCardRegister.DEFAULT_FLG.index()));

        return config;
    }

    public static FincodeCardUpdateConfiguration cardUpdate(ReadableArray args) {

        FincodeCardUpdateConfiguration config = new FincodeCardUpdateConfiguration();
        config.authorization = getAuthorization(args.getString(ArgsCardUpdate.AUTHORIZATION.index()));
        config.apiKey = args.getString(ArgsCardUpdate.API_KEY.index());
        config.apiVersion = args.getString(ArgsCardUpdate.API_VERSION.index());
        config.customerId = args.getString(ArgsCardUpdate.CUSTOMER_ID.index());
        config.defaultFlg = DefaultFlg.of(args.getString(ArgsCardUpdate.DEFAULT_FLG.index()));
        config.cardId = args.getString(ArgsCardUpdate.CARD_ID.index());

        return config;
    }

    private static Authorization getAuthorization(String value) {
        for (Authorization e : Authorization.values()) {
            if(String.valueOf(e.getValue()).equals(value)) {
                return e;
            }
        }
        return Authorization.NONE;
    }
}
