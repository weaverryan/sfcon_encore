'use strict';

import $ from 'jquery';
import '../css/login.css';
import LoginDetails from './Components/LoginDetails';
import ReactDOM from 'react-dom';
import React from 'react';

$(document).ready(function() {
    const username = 'cindy_clawford';
    const password = 'pumpup';

    ReactDOM.render(
        <LoginDetails username={username} password={password} />,
        document.getElementById('js-login-details')
    );

    $('.js-login-field-username').on('keydown', function(e) {
        const $usernameInput = $(e.currentTarget);
        // remove any existing warnings
        $('.login-long-username-warning').remove();

        if ($usernameInput.val().length >= 20) {
            const $warning = $('<div class="login-long-username-warning">This is a really long username - are you sure that is right?</div>');
            $usernameInput.before($warning);
        }
    });
});
