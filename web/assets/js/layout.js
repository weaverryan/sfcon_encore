'use strict';

(function(window, $) {
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip()
        console.log($('[data-toggle="tooltip"]').length);
    });
})(window, jQuery);
