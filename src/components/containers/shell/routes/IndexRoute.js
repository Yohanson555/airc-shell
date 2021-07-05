/*
 * Copyright (c) 2020-present unTill Pro, Ltd.
 */
import _ from "lodash";
import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { translate as t } from 'airc-shell-core';
import { isApplicationDerscription } from '../../../../classes/Utils';

import "assets/css/index_route.css";

const IndexRoute = () => {
    const manifest = useSelector((state) => state.shell.manifest);
    console.log("=> manifest: ", manifest);

    if (_.isPlainObject(manifest)) {
        const apps = Object.values(manifest);
        const app = apps.length ? apps[0] : null;
        
        if (isApplicationDerscription(app)) {
            const history = useHistory();
            history.push(`/${app.code}`);
        }
    }

    return (
        <div className="index-route-container">
            <div className="index-route-body">
                <div className="index-route-body-title">
                    {t("Welcome to unTill Air Shell", "shell")}
                </div>
                <div className="index-route-body-sep"></div>
                <div className="index-route-body-text">
                    {t("Please select a module from top navigation bar", "shell")}
                </div>
            </div>
        </div>
    );
}

export default IndexRoute;