//------Второй файл с моими обработчиками
//window_form_unloader.js
$(document).ready(function(){
    var formTextChangesChecker = new FormTextChangesChecker('input, textarea', 'form#asdfsdf1');
    WindowUnloadStorage.addHandlerObject(new WindowUnloadHanlder(true, formTextChangesChecker.hasChanges.bind(formTextChangesChecker), 'Are you sure you want to navigate away from this page?'));
});