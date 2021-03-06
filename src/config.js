/*
 * Copyright (c) 2020-present unTill Pro, Ltd.
 */

import isProd from 'is-prod';

const cfg = {
    CHECK_INTERVAL: 2000
};

if (isProd.isDevelopment()) {
    cfg.API_HOST = "https://air-alpha.untill.ru";
    //cfg.API_HOST = "https://airtest.untill.ru/airs-router";
} else {
    cfg.API_HOST = "/api";
    //cfg.API_HOST = "https://airtest.untill.ru/airs-router";
    
}

export default cfg;
