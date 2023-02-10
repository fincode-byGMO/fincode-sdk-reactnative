package com.fincode_manual_import;

import androidx.annotation.NonNull;

import com.epsilon.fincode.fincodesdk.api.FincodeCallback;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentResponse;
import com.epsilon.fincode.fincodesdk.views.FincodeVerticalView;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FincodeVerticalModule extends ReactContextBaseJavaModule {

    private Callback successCallback = null;
    private Callback failureCallback = null;

    FincodeVerticalModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "FincodeVerticalView";
    }

    @ReactMethod
    public void initForPayment(FincodeVerticalView view, Callback successCallback, Callback failureCallback) {
        this.successCallback = successCallback;
        this.failureCallback = failureCallback;
    }
}
