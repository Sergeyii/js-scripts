//-----Самый первый файл который должен подключаться во все страницы
// - куда прописать чтобы он подключался в самом начале?
//windowUnloadStorage.js

/**
 * Usage example;
 * WindowUnloadStorage.addHandlerObject(new WindowUnloadHanlder(true|false, function(){...}));
 */

WindowUnloadStorage = {
    eventHandlers: [],
    eventHandlersWithBlock: [],

    addHandlerObject: function(handlerObject){
        if(handlerObject.needBlockClosing){
            this.eventHandlersWithBlock.push(handlerObject);
        }else{
            this.eventHandlers.push(handlerObject);
        }
    },
    onbeforeunloadHandle: function (event) {
        //--Сначала неблокирующие:
        for (var i = 0; i < this.eventHandlers.length; i++) {
            this.eventHandlers[i].handler();
        }

        //--Блокирующие:
        for (var i = 0; i < this.eventHandlersWithBlock.length; i++) {
            if( this.eventHandlersWithBlock[i].handler() ){
                return this.eventHandlersWithBlock[i].blockMessage;
            }
        }
    }
};

function WindowUnloadHanlder(needBlockClosing, handler, blockMessage){
    this.needBlockClosing = needBlockClosing || false;
    this.handler = handler || function(){};
    this.blockMessage = blockMessage || '';
};
//-----

//Отслеживание изменений на форме
function FormTextChangesChecker(elementsNames, containerElementName){
    var self = this;
    this.containerElement = $(containerElementName || document);

    this.elementsNames = elementsNames;
    this.dataAttrName = 'changed';
    this.formName = containerElementName || 'form';


    this.init = function(){
        this.checkConstructorParameters();

        $(document).delegate(this.formName, 'submit', function(){
            $(self.elementsNames).removeData(self.dataAttrName);
        });

        this.containerElement.delegate(self.elementsNames, 'change', function(){
            $(this).data(self.dataAttrName, 'changed');
        });
    }

    this.checkConstructorParameters = function(){
        if(!self.elementsNames){
            throw new Error('Не переданы теги элементов.');
        }
    }

    this.hasChanges = function(){
        var warn = false;

        $(this.formName).find(self.elementsNames).blur().each(function(){
            if ($(this).data(self.dataAttrName)) {
                warn = true;
                //Break looping
                return false;
            }
        });

        return warn;
    }

    //--
    this.init();
}