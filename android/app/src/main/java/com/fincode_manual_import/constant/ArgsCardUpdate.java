package com.fincode_manual_import.constant;

public enum ArgsCardUpdate {
    AUTHORIZATION(0),
    API_KEY(1),
    API_VERSION(2),
    CUSTOMER_ID(3),
    DEFAULT_FLG(4),
    CARD_ID(5);
    private int index;

    private ArgsCardUpdate(int index) {
        this.index = index;
    }

    public int index() {
        return this.index;
    }
}
