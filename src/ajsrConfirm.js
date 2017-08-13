/**
 * ajsr-confirm
 * jQuery confirm dialog box including several fun css templates.
 * @version v0.0.3 - 2017-8-13
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
        beforeShow: function(){},
        beforeClose: function(){},
        whenDestroyed: function(){}
    };
    */
  
    $.ajsrConfirm = function(options, e) {

        'use strict';

        // init vars 

        var _WIDTH = 340, _HEIGHT = 130, componentObj,
            defaults = {
                title: 'Attention!',
                message: 'Do you really want to do that?',
                okButton: 'OK',
                cancelButton: 'Cancel',
                template: '',
                showCancel: true,
                css: '', // extra custom class at the end
                style: '', // extra custom style at the end
                bgStyle: '',
                nineCorners: false,
                onConfirm: function(){ console.log("onConfirm(): do nothing by default"); },
                onCancel: function(){ console.log("onCancel(): do nothing by default"); },
                beforeShow: function(){ console.log("beforeShow(): do nothing by default"); },
                afterShow: function(){ console.log("afterShow(): do nothing by default"); },
                beforeClose: function(){ console.log("beforeClose(): do nothing by default"); },
                whenDestroyed: function(){ console.log("whenDestroyed(): do nothing by default"); }
            },
            params = $.extend(defaults, options),
            _timestamp = Date.now(),
            htmlString = '',
            _bg_layer_style = '',
            _modal_style = '';

        // template

        if ( params.template === undefined || params.template === '' || params.template === null || params.template === 'default' ){

            _modal_style = ''+
                //'background-color: red; '+
                'display: block; '+
                'position: absolute; '+
                'z-index: 10001; '+
                'width: '+ _WIDTH +'px; '+
                //'height: '+ _HEIGHT +'px; '+
                'left: calc(50% - '+ _WIDTH/2 +'px); '+
                'top: calc(50% - '+ _HEIGHT/2 +'px); '+
                'opacity: 1;';
            
            _bg_layer_style = "background-color: black; height: 100%; left: 0; opacity: 0.4; position: fixed; top: 0; width: 100%; z-index: 10000;";

            // position: fixed;
        
        } else {

            _modal_style = 'position: fixed; z-index: 10001; '+ params.template;
            _bg_layer_style = "background-color: black; height: 100%; left: 0; opacity: 0.4; position: absolute; top: 0; width: 100%; z-index: 10000;";
        }

        htmlString +=   '<div  class="ajsrConfirm-back-bg '+ params.template +' '+ params.css +' " style=" '+ _bg_layer_style +' '+ params.bgStyle +' "></div>';
        htmlString +=   '<div id="ajsrConfirm-'+ _timestamp +'" class="ajsrConfirm '+ params.template +' '+ params.css +'" style="'+ _modal_style +' '+ params.style +' " >';

        if( params.nineCorners ) { 

                    htmlString += ''+
                    '<div class="extra layer-1 top left"></div>' + 
                    '<div class="extra layer-2 top center"></div>' + 
                    '<div class="extra layer-3 top right"></div>' + 
                    '<div class="extra layer-4 middle left"></div>' + 
                    '<div class="extra layer-5 middle center"></div>' + 
                    '<div class="extra layer-6 middle right"></div>' + 
                    '<div class="extra layer-7 bottom left"></div>' + 
                    '<div class="extra layer-8 bottom center"></div>' + 
                    '<div class="extra layer-9 bottom right"></div>'; 

        }
                    
        htmlString +=   '<div class="title">'+ params.title +'</div>'+
                        '<div class="content"><p>'+ params.message +'</p></div>'+
                        '<div class="footer">';

                        if( params.showCancel ) htmlString += '<button class="btn cancel" type="button">'+ params.cancelButton +'</button>';

        htmlString +=   ''+
                        '<button class="btn confirm" type="button">'+ params.okButton +'</button>'+
                        '</div>'+

                        '</div>';

        // functionality


        if ( $(".ajsrConfirm").length === 0 ){ // If there are no modals then ...

            params.beforeShow();

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

            params.afterShow();

        } else {
            // Sorry, No more than one!
            console.error("Sorry, No more than one!");
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
