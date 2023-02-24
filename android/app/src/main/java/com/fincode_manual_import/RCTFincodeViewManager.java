package com.fincode_manual_import;

import android.util.Log;
import android.view.Choreographer;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.epsilon.fincode.fincodesdk.api.FincodeCallback;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardRegisterResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeCardUpdateResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodeErrorResponse;
import com.epsilon.fincode.fincodesdk.entities.api.FincodePaymentResponse;
import com.epsilon.fincode.fincodesdk.views.FincodeCommon;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.fincode_manual_import.opt.RCTFincodeOpt;
import com.fincode_manual_import.util.ConfigUtil;
import com.fincode_manual_import.constant.Event;
import com.fincode_manual_import.event.RCTFincodeResultEvent;

import java.util.HashMap;
import java.util.Map;

public abstract class RCTFincodeViewManager<T extends FincodeCommon> extends ViewGroupManager<T> {

    private int propWidth;
    private int propHeight;
    private RCTFincodeOpt opt = new RCTFincodeOpt();
    public ReactApplicationContext mCallerContext;

    abstract String viewName();
    abstract T createFincodeViewInstance(ThemedReactContext themedReactContext);

    public RCTFincodeViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return viewName();
    }

    @NonNull
    @Override
    protected T createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return createFincodeViewInstance(themedReactContext);
    }

    // event add: react native to native
    @Override
    public Map<String, Integer> getCommandsMap() {
        Map<String, Integer> map = new HashMap<>();
        map.put(Event.INIT_PAYMENT.key(), Event.INIT_PAYMENT.id());
        map.put(Event.INIT_CARD_REGISTER.key(), Event.INIT_CARD_REGISTER.id());
        map.put(Event.IINT_CARD_UPDATE.key(), Event.IINT_CARD_UPDATE.id());
        return map;
    }

    // event detail: react native to native
    @Override
    public void receiveCommand(@NonNull T root, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);

        if(isInitEvent(commandId)) {
            // initialize fincode view
            setupLayout(root);
            init(root, commandId, args);
            setOpt(root);
        }
    }

    // event add: native to react native
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {

        MapBuilder.Builder b = MapBuilder.builder();
        b.put(RCTFincodeResultEvent.PAYMENT_SUCCESS_CALLBACK,
                MapBuilder.of(RCTFincodeResultEvent.REGISTRATION_NAME, RCTFincodeResultEvent.PAYMENT_SUCCESS_CALLBACK));

        b.put(RCTFincodeResultEvent.CARD_REGISTER_SUCCESS_CALLBACK,
                MapBuilder.of(RCTFincodeResultEvent.REGISTRATION_NAME, RCTFincodeResultEvent.CARD_REGISTER_SUCCESS_CALLBACK));

        b.put(RCTFincodeResultEvent.CARD_UPDATE_SUCCESS_CALLBACK,
                MapBuilder.of(RCTFincodeResultEvent.REGISTRATION_NAME, RCTFincodeResultEvent.CARD_UPDATE_SUCCESS_CALLBACK));

        b.put(RCTFincodeResultEvent.FAILURE_CALLBACK,
                MapBuilder.of(RCTFincodeResultEvent.REGISTRATION_NAME, RCTFincodeResultEvent.FAILURE_CALLBACK));

        return b.build();
    }

    // set layout
    @ReactPropGroup(names = {"width", "height"}, customType = "Style")
    public void setStyle(T view, int index, Integer value) {
        if (index == 0) {
            propWidth = value;
        }

        if (index == 1) {
            propHeight = value;
        }
    }

    // set layout
    public void setupLayout(View view) {
        Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {
            @Override
            public void doFrame(long frameTimeNanos) {
                manuallyLayoutChildren(view);
                view.getViewTreeObserver().dispatchOnGlobalLayout();
                Choreographer.getInstance().postFrameCallback(this);
            }
        });
    }

    // Layout all children properly
    public void manuallyLayoutChildren(View view) {
        // propWidth and propHeight coming from react-native props
        int width = propWidth;
        int height = propHeight;

        view.measure(
                View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),
                View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));

        view.layout(0, 0, width, height);
    }

    // option
    @ReactProp(name = "headingHidden")
    public void headingHidden(T view, boolean value) {
        Log.d("fincode", "■■■ opt headingHidden:  " + value);
        //view.headingHidden(value);
        opt.headingHidden = value;
    }

    @ReactProp(name = "dynamicLogDisplay")
    public void dynamicLogDisplay(T view, boolean value) {
        Log.d("fincode", "■■■ opt dynamicLogDisplay:  " + value);
        //view.dynamicLogDisplay(value);
        opt.dynamicLogDisplay = value;
    }

    @ReactProp(name = "holderNameHidden")
    public void holderNameHidden(T view, boolean value) {
        Log.d("fincode", "■■■ opt holderNameHidden" + value);
        //view.holderNameHidden(value);
        opt.holderNameHidden = value;
    }

    @ReactProp(name = "payTimesHidden")
    public void payTimesHidden(T view, boolean value) {
        Log.d("fincode", "■■■ opt payTimesHidden:  " + value);
        //view.payTimesHidden(value);
        opt.payTimesHidden = value;
    }

    // initialize fincode view
    private void init(@NonNull T root, String commandId, @Nullable ReadableArray args) {

        switch (Event.getValue(commandId)) {
            case NONE:
                Log.d("fincode", "■■■ event NONE");
                break;
            case INIT_PAYMENT:
                Log.d("fincode", "■■■ event INIT_PAYMENT");
                root.initForPayment(ConfigUtil.payment(args), new FincodeCallback<FincodePaymentResponse>() {
                    @Override
                    public void onResponse(FincodePaymentResponse fincodePaymentResponse) {
                        RCTFincodeResultEvent.sendPaymentSuccess(root.getContext(), root.getId(), fincodePaymentResponse);
                    }

                    @Override
                    public void onFailure(FincodeErrorResponse fincodeErrorResponse) {
                        RCTFincodeResultEvent.sendFailureCallback(root.getContext(), root.getId(), fincodeErrorResponse);
                    }
                });
                break;
            case INIT_CARD_REGISTER:
                Log.d("fincode", "■■■ event INIT_CARD_REGISTER");
                root.initForCardRegister(ConfigUtil.cardRegister(args), new FincodeCallback<FincodeCardRegisterResponse>() {
                    @Override
                    public void onResponse(FincodeCardRegisterResponse fincodeCardRegisterResponse) {
                        RCTFincodeResultEvent.sendCardRegisterSuccess(root.getContext(), root.getId(), fincodeCardRegisterResponse);
                    }

                    @Override
                    public void onFailure(FincodeErrorResponse fincodeErrorResponse) {
                        RCTFincodeResultEvent.sendFailureCallback(root.getContext(), root.getId(), fincodeErrorResponse);
                    }
                });
                break;
            case IINT_CARD_UPDATE:
                Log.d("fincode", "■■■ event IINT_CARD_UPDATE");
                root.initForCardUpdate(ConfigUtil.cardUpdate(args), new FincodeCallback<FincodeCardUpdateResponse>() {
                    @Override
                    public void onResponse(FincodeCardUpdateResponse fincodeCardUpdateResponse) {
                        RCTFincodeResultEvent.sendCardUpdateSuccess(root.getContext(), root.getId(), fincodeCardUpdateResponse);
                    }

                    @Override
                    public void onFailure(FincodeErrorResponse fincodeErrorResponse) {
                        RCTFincodeResultEvent.sendFailureCallback(root.getContext(), root.getId(), fincodeErrorResponse);
                    }
                });
                break;
        }
    }

    private void setOpt(T view) {
        view.headingHidden(!opt.headingHidden);
        view.dynamicLogDisplay(!opt.dynamicLogDisplay);
        view.holderNameHidden(!opt.holderNameHidden);
        view.payTimesHidden(!opt.payTimesHidden);
    }

    private boolean isInitEvent(String commandId) {
        Event e = Event.getValue(commandId);
        if (e == Event.INIT_PAYMENT || e == Event.INIT_CARD_REGISTER || e == Event.IINT_CARD_UPDATE) {
            return true;
        } else {
            return false;
        }
    }
}
