// ========================================================================
// ajsr confirm v0.0.1
// https://github.com/ajsoriar/confirmBox
// ========================================================================

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

        'use strict';

        // init vars 

        var _WIDTH = 340, _HEIGHT = 130, componentObj,
            defaults = {
                title: 'ajsrConfirm 1.0 - Andres J. Soria R. 2014',
                message: 'Do you really want to do that?',
                okButton: 'OK',
                cancelButton: 'Cancel',
                //css: '', // custom class
                onConfirm: function(){ console.log("onConfirm: do nothing by default"); },
                onCancel: function(){ console.log("onCancel: do nothing by default"); },
                beforeOpen: function(){ console.log("beforeOpen: do nothing by default"); },
                beforeClose: function(){ console.log("beforeClose: do nothing by default"); },
                whenDestroyed: function(){ console.log("whenDestroyed: do nothing by default"); }
            },
            parameters = $.extend(defaults, options),
            timestamp = Date.now(),
            htmlString = '';

        // template

        htmlString +=   '<div  class="ajsrConfirm-back-bg " style="background-color: black; height: 100%; left: 0; opacity: 0.2; position: absolute; top: 0; width: 100%; z-index: 10000;"></div>';
        htmlString +=   '<div id="ajsrConfirm-'+ timestamp +'" class="ajsrConfirm" style="'+
                            'background-color: red; '+
                            'display: block; '+
                            'position: absolute; '+
                            'z-index: 10001; '+
                            'width: '+ _WIDTH +'px; '+
                            //'height: '+ _HEIGHT +'px; '+
                            'left: calc(50% - '+ _WIDTH/2 +'px); '+
                            'top: calc(50% - '+ _HEIGHT/2 +'px); '+
                            'opacity: 1'+
                            ' ">' +
                            
                            '<div class="title">'+ parameters.title +'</div>'+
                            '<div class="content">'+ parameters.message +'</div>'+
                            '<div class="footer">'+
                                '<button class="btn cancel" type="button">'+ parameters.cancelButton +'</button>'+
                                '<button class="btn confirm" type="button">'+ parameters.okButton +'</button>'+
                            '</div>'+
                        '</div>';

        // functionality


        if ( $(".ajsrConfirm").length === 0 ){ // If there are no modals then ...

            componentObj = $("body").append(htmlString);
            
            /*
            componentObj.find(".confirm").click(function () { confirm(); });
            componentObj.find(".cancel").click(function () { cancel(); });    
            // show (change opacity)
            componentObj.fadeIn();
            */

            if (1) {
                componentObj.find(".ajsrConfirm-back-bg").click( function () { cancel(); }); 
            }

            componentObj.find(".confirm").click( function () { confirm(); });
            componentObj.find(".cancel").click( function () { cancel(); });   

            //$(".ajsrConfirm").fadeIn(); //'fast', function(){ });

        } else {
            // Sorry, No more than one!
        }

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

            parameters.beforeClose();  
            
            //componentObj.fadeOut(200, {
                $(".ajsrConfirm-back-bg").remove();
                $(".ajsrConfirm").remove();  
                parameters.whenDestroyed();                   
            //})
            

            // unbind events       
        }

        return 0;

    }

}(jQuery));
