//-----windowUnloadExecute.js
//И в конечном файле - регистрируем само событие onbeforeunload со всеми обработчиками
(function($) {
    $(document).ready(function() {
        //--Работает!!!
        window.onbeforeunload = function(){
            return WindowUnloadStorage.onbeforeunloadHandle();
        };
    });
})(jQuery);