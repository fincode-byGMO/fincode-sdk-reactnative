package com.fincode_manual_import.constant;

public enum ArgsPayment {
    AUTHORIZATION(0),
    API_KEY(1),
    API_VERSION(2),
    CUSTOMER_ID(3),
    PAY_TYPE(4),
    ACCESS_ID(5),
    ID(6);
    private int index;
    private ArgsPayment(int index) {
        this.index = index;
    }

    public int index() {
        return this.index;
    }
}
