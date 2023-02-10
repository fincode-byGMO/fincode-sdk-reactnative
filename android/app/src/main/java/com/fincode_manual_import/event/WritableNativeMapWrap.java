package com.fincode_manual_import.event;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;

public class WritableNativeMapWrap {

    private WritableMap map;

    public WritableNativeMapWrap() {
        map = Arguments.createMap();
    }

    public WritableMap getArgs() {
        return map;
    }

    public void putNull(@NonNull String var1) {
        map.putNull(var1);
    }

    public void putBoolean(@NonNull String var1, boolean var2) {
        map.putBoolean(var1, var2);
    }

    public void putDouble(@NonNull String var1, double var2) {
        map.putDouble(var1, var2);
    }

    public void putInt(@NonNull String var1, int var2) {
        map.putInt(var1, var2);
    }

    public void putString(@NonNull String var1, @Nullable String var2) {
        if(var2 != null) {
            map.putString(var1, var2);
        } else {
            map.putNull(var1);
        }
    }

    public void putArray(@NonNull String var1, @Nullable ReadableArray var2) {
        if(var2 != null) {
            map.putArray(var1, var2);
        } else {
            map.putNull(var1);
        }
    }

    public void putMap(@NonNull String var1, @Nullable ReadableMap var2) {
        if(var2 != null) {
            map.putMap(var1, var2);
        } else {
            map.putNull(var1);
        }
    }

    public void putIntToString(@NonNull String var1, @Nullable Integer var2) {
        if(var2 != null) {
            map.putString(var1, var2.toString());
        } else {
            map.putNull(var1);
        }
    }

    public void putLongToInt(@NonNull String var1, @Nullable Long var2) {
        if(var2 != null) {
            map.putInt(var1, var2.intValue());
        } else {
            map.putNull(var1);
        }
    }
}
