(function($) {

    console.log("ajsrConfirm plug-in!");

    /*
    $.ajsrConfirm.defaults = {
        title: 'ajsrConfirm 1.0 - Andres J. Soria R. 2014',
        message: 'Do you really want to do that?',
        okButton: 'OK',
        cancelButton: 'Cancel',
        onConfirm: function(){},
        onCancel: function(){},
        beforeOpen: function(){},
        beforeClose: function(){},
        whenDestroyed: function(){}
    };
    */

    $.ajsrConfirm = function(options, e) {

        //'use strict';

        var _WIDTH = 340, _HEIGHT = 130;


        var defaults = {
            title: 'ajsrConfirm 1.0 - Andres J. Soria R. 2014',
            message: 'Do you really want to do that?',
            okButton: 'OK',
            cancelButton: 'Cancel',
            onConfirm: function(){ console.log("onConfirm: do nothing by default"); },
            onCancel: function(){ console.log("onCancel: do nothing by default"); },
            beforeOpen: function(){ console.log("beforeOpen: do nothing by default"); },
            beforeClose: function(){ console.log("beforeClose: do nothing by default"); },
            whenDestroyed: function(){ console.log("whenDestroyed: do nothing by default"); }
        },

        parameters = $.extend(defaults, options),
        timestamp = Date.now(),
        htmlString = '';

        htmlString += '<div  class="ajsrConfirm-back-bg" style="background-color: black; height: 100%; left: 0; opacity: 0.6; position: absolute; top: 0; width: 100%; z-index: 10000;"></div>';
        htmlString += '<div id="ajsrConfirm-'+ timestamp +'" class="ajsrConfirm" style="'+
                            'background-color: red; '+
                            'display: block; '+
                            'position: absolute; '+
                            'z-index: 10001; '+
                            'width: '+ _WIDTH +'px; '+
                            'height: '+ _HEIGHT +'px; '+
                            'left: calc(50% - '+ _WIDTH/2 +'px); '+
                            'top: calc(50% - '+ _HEIGHT/2 +'px); '+
                            ' ">' +
                            
                            '<div>'+ parameters.title +'</div>'+
                            '<div>'+ parameters.message +'</div>'+
                            '<button class="ajsrConfirm-btn cancel" type="button">'+ parameters.cancelButton +'</button>'+
                            '<button class="ajsrConfirm-btn confirm" type="button">'+ parameters.okButton +'</button>'+
                        '</div>';

        if ( $(".ajsrConfirm").length === 0 ){ // If there are no modals then ...
            var link = $("body");
            link.append(htmlString);
            link.find(".confirm").click(function () { confirm(); });
            link.find(".cancel").click(function () { cancel(); });    
        } else {
            // Sorry, No more than one!
        }

/*
            render: function() {

                $(this.$el).append('<div id="dlgContainer"></div>');
                this.$el = this.$el.find("#dlgContainer");
                var template = Handlebars.compile(componentTemplate);
                template = $(template({
                    id: null,
                    dlgBarText: componentOptions.dlgBarText,
                    dlgText: componentOptions.dlgText
                }));

                this.$el.html(template);
                this.centerOnScreen();
            },
            centerOnScreen: function() {
                var dlg = this.$el.find("#dialog");
                dlg.css({ 'position': 'fixed' });
                var positionX = $(window).width() / 2 - dlg.width() / 2 + "px";
                var positionY = $(window).height() / 2 - dlg.height() / 2 + "px";
                dlg.css({ 'left': positionX });
                dlg.css({ 'top': positionY });
            },
*/

        function cancel(){
            console.log("btn cancel!");

            parameters.onCancel();
            parameters.beforeClose();
            destroy();
        }

        function confirm(){
            console.log("btn confirm!");

            parameters.onConfirm();
            parameters.beforeClose();
            destroy();
        }

        function destroy(){

            console.log("destroy!");

            $(".ajsrConfirm-back-bg").remove();
            $(".ajsrConfirm").remove();  
            parameters.whenDestroyed();   

            // unbind events       
        }

    }

}(jQuery));
