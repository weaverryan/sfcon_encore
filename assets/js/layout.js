'use strict';

const $ = require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../css/layout.scss');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
