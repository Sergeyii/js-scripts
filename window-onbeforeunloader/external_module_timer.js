//--Точка входа - в toomer.js
$(document).ready(function() {
    //1.
    WindowUnloadStorage.addHandlerObject(new WindowUnloadHanlder(false, function(){
        console.log('Какие-то действия timelog модуля выполняются...');

        /*console.log(TimeMe.websocket.send);
        TimeMe.websocket.send(JSON.stringify({
            type: "TIMELOG_INSERT_TIME",
            page : location.href,
            activity_duration : parseInt(TimeMe.getTimeOnCurrentPageInSeconds()),
        }));*/
    }));

    //2.
    //WindowUnloadStorage.addHandlerObject(new WindowUnloadHanlder(true, handler));

});
//-----