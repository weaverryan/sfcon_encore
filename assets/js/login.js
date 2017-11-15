'use strict';

import $ from 'jquery';
import '../css/login.css';
import LoginDetails from './Components/LoginDetails';
import ReactDOM from 'react-dom';
import React from 'react';

$(document).ready(function() {
    const loginDetailsEl = document.getElementById('js-login-details');
    const username = loginDetailsEl.dataset.username;
    const password = loginDetailsEl.dataset.password;
    ReactDOM.render(
        <LoginDetails username={username} password={password} />,
        loginDetailsEl
    );

    $('.js-login-field-username').on('keydown', function(e) {
        const $usernameInput = $(e.currentTarget);
        // remove any existing warnings
        $('.login-long-username-warning').remove();

        if ($usernameInput.val().length >= 20) {
            require.ensure(['./Components/show_long_username_error'], (require) => {
                const showLongUsernameError = require('./Components/show_long_username_error');
                showLongUsernameError($usernameInput);
            });
        }
    });
});
