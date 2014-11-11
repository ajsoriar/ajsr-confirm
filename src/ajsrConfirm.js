/**
 * ajsr-confirm
 * jQuery confirm dialog box including several fun css templates.
 * @version v0.0.1 - 2015-09-07
 * @link https://github.com/ajsoriar/ajsr-confirm
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

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
                template: '',
                showCancel: true,
                css: '', // extra custom class at the end
                style: '', // extra custom style at the end
                bgStyle: '',
                nineCorners: false,
                onConfirm: function(){ console.log("onConfirm: do nothing by default"); },
                onCancel: function(){ console.log("onCancel: do nothing by default"); },
                beforeOpen: function(){ console.log("beforeOpen: do nothing by default"); },
                beforeClose: function(){ console.log("beforeClose: do nothing by default"); },
                whenDestroyed: function(){ console.log("whenDestroyed: do nothing by default"); }
            },
            params = $.extend(defaults, options),
            _timestamp = Date.now(),
            htmlString = '',
            _bg_layer_style = '',
            _modal_style = '';

        // template

        if ( params.template === '' ){

            _modal_style = ''+
                'background-color: red; '+
                'display: block; '+
                'position: absolute; '+
                'z-index: 10001; '+
                'width: '+ _WIDTH +'px; '+
                //'height: '+ _HEIGHT +'px; '+
                'left: calc(50% - '+ _WIDTH/2 +'px); '+
                'top: calc(50% - '+ _HEIGHT/2 +'px); '+
                'opacity: 1;';

        } else {

            _modal_style = 'position: absolute; z-index: 10001; '+ params.template;

        }

        _bg_layer_style = "background-color: black; height: 100%; left: 0; opacity: 0.4; position: absolute; top: 0; width: 100%; z-index: 10000;";

        htmlString +=   '<div  class="ajsrConfirm-back-bg '+ params.template +' '+ params.css +' " style=" '+ _bg_layer_style +' '+ params.bgStyle +' "></div>';
        htmlString +=   '<div id="ajsrConfirm-'+ _timestamp +'" class="ajsrConfirm '+ params.template +' '+ params.css +'" style="'+ _modal_style +' '+ params.style +' " >'+
                    
                            '<div class="title">'+ params.title +'</div>'+
                            '<div class="content">'+ params.message +'</div>'+
                            '<div class="footer">';

                                if( params.showCancel ) htmlString += '<button class="btn cancel" type="button">'+ params.cancelButton +'</button>';

        htmlString += ''+
                                '<button class="btn confirm" type="button">'+ params.okButton +'</button>'+
                            '</div>'+

                        '</div>';

        // functionality


        if ( $(".ajsrConfirm").length === 0 ){ // If there are no modals then ...

            // ... create one!

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

            params.onCancel();
            params.beforeClose();
            destroy();
        }

        function confirm(){
            console.log("btn confirm!");

            params.onConfirm();
            params.beforeClose();
            destroy();
        }

        function destroy(){

            console.log("destroy!");

            params.beforeClose();  
            
            //componentObj.fadeOut(200, {
                $(".ajsrConfirm-back-bg").remove();
                $(".ajsrConfirm").remove();  
                params.whenDestroyed();                   
            //})
            

            // unbind events       
        }

        return 0;

    }

}(jQuery));
