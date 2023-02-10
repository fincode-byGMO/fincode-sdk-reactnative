package com.fincode_manual_import;

import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.epsilon.fincode.fincodesdk.config.FincodePaymentConfiguration;
import com.epsilon.fincode.fincodesdk.config.Options;
import com.epsilon.fincode.fincodesdk.views.FincodeVerticalView;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class FincodeVerticalViewManager extends SimpleViewManager<FincodeVerticalView> {

    public ReactApplicationContext mCallerContext;

    public FincodeVerticalViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return FincodeVerticalView.class.getSimpleName();
    }

    @NonNull
    @Override
    protected FincodeVerticalView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        FincodeVerticalView view = new FincodeVerticalView(themedReactContext);
        return null;
    }

    @ReactProp(name = "test")
    public void setSrc(FincodeVerticalView view, String value) {
        view.test(value);
    }
}
