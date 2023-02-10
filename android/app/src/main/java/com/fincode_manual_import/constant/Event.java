package com.fincode_manual_import.constant;

public enum Event {
    NONE(-1, ""),
    INIT_PAYMENT(0, "initPayment"),
    INIT_CARD_REGISTER(1, "initCardRegister"),
    IINT_CARD_UPDATE(2, "initCardUpdate");
    private int id;
    private String key;
    private Event(int id, String key) {
        this.id = id;
        this.key = key;
    }

    public int id() {
        return this.id;
    }

    public String key() {
        return this.key;
    }

    public static Event getValue(String id) {
        for (Event e : Event.values()) {
            if(String.valueOf(e.id).equals(id)) {
                return e;
            }
        }
        return Event.NONE;
    }
}
