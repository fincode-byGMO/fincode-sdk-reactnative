package com.fincode_manual_import.constant;

public enum ArgsCardRegister {
    AUTHORIZATION(0),
    API_KEY(1),
    API_VERSION(2),
    CUSTOMER_ID(3),
    DEFAULT_FLG(4);
    private int index;
    private ArgsCardRegister(int index) {
        this.index = index;
    }

    public int index() {
        return this.index;
    }
}
