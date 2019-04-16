(function() {

    console.log("ajsrConfirm plug-in!");

    window.ajsrConfirm = function(options, e) {

        'use strict';

        var _WIDTH = 340, _HEIGHT = 130, componentObj,
            defaults = {
                title: 'Attention!',
                message: 'Do you really want to do that?',
                okButton: 'OK',
                cancelButton: 'Cancel',
                btnFocus: 1, // Default selected button is 1, 'OK'. It can be set to 0, 'Cancel'. or false. Extra styling will be applied to default button.
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
            //params = $.extend(defaults, options),
            params = {},
            _timestamp = Date.now(),
            htmlString = '',
            _bg_layer_style = '',
            _modal_style = '';

        // set params
        for(var _obj in defaults) params[_obj ]=defaults[_obj];
        for(var _obj in options) params[_obj ]=options[_obj];

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
		'left: -webkit-calc(50% - '+ _WIDTH/2 +'px); '+
                'top: -webkit-calc(50% - '+ _HEIGHT/2 +'px); '+
                'opacity: 1;';
            
            _bg_layer_style = "background-color: black; height: 100%; left: 0; opacity: 0.4; position: fixed; top: 0; width: 100%; z-index: 10000;";

            // position: fixed;
        
        } else {

            _modal_style = 'position: fixed; z-index: 10001; '+ params.template;
            _bg_layer_style = "background-color: black; height: 100%; left: 0; opacity: 0.4; position: fixed; top: 0; width: 100%; z-index: 10000;";
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

                        if( params.showCancel ) htmlString += '<button id="btn-cancel" class="btn cancel" type="button">'+ params.cancelButton +'</button>';

        htmlString +=   ''+
                        '<button id="btn-ok" class="btn confirm" type="button">'+ params.okButton +'</button>'+
                        '</div>'+

                        '</div>';

        // functionality

        //if ( $(".ajsrConfirm").length === 0 ){ // If there are no modals then ...
        if ( document.getElementsByClassName("ajsrConfirm").length === 0 ) {

            params.beforeShow();

            // ... create one!

            //componentObj = $("body").append(htmlString);
            var el = document.createElement('div');
            el.setAttribute("id", "ajsrConfirm-container" );
            el.innerHTML = htmlString;
            document.body.appendChild(el);

            // Check default selected button is 1, 'OK'. It can be set to 0, 'Cancel'. Extra styling will be applied to default button.
            setFocus( params.btnFocus );

            if (1) {
                //componentObj.find(".ajsrConfirm-back-bg").click( function () { cancel(); }); 
                document.getElementsByClassName("ajsrConfirm-back-bg")[0].addEventListener("click", function( event ){ cancel(); });
            }

            //componentObj.find(".confirm").click( function () { confirm(); });
            //componentObj.find(".cancel").click( function () { cancel(); });   
            document.getElementById("btn-ok").addEventListener("click", function( event ){ confirm(); });
            document.getElementById("btn-cancel").addEventListener("click", function( event ){ cancel(); });
            
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
                //$(".ajsrConfirm-back-bg").remove();
                //$(".ajsrConfirm").remove();
                var leftSection = document.getElementById("ajsrConfirm-container");
                leftSection.parentNode.removeChild(leftSection);

                params.whenDestroyed();                   
            //})
            
            // unbind events       
        }

        function setFocus( num ){ // 1 is ok btn. 0 is cancel btn.

            // remove both
            //$(".ajsrConfirm .btn").removeClass("default");
            document.getElementById("btn-ok").classList.remove("default");
            document.getElementById("btn-cancel").classList.remove("default");

            // apply focus
            //if ( num === 1) $(".ajsrConfirm #btn-ok").addClass("default");
            //if ( num === 0) $(".ajsrConfirm #btn-cancel").addClass("default");
            if ( num === 1) document.getElementById("btn-ok").classList.add("default");
            if ( num === 0) document.getElementById("btn-cancel").classList.add("default");

            return "All is OK!";
        }

        function hasClass(element, className) {
            return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
        }

        function getFocused(){
            var el = document.getElementById("btn-ok");
            if ( hasClass( el, 'default') ) return 1;
            return 0;
        }

        function doDefault() {
            if ( getFocused() === 1 ) {
                confirm();
            } else {
                cancel();
            }
        }

        // Share the component and a couple of methods in the global scope. This will allow communication with other components
        //window.ajsrConfirm = {};
        window.ajsrConfirm.setFocus = setFocus;
        window.ajsrConfirm.cancel = cancel;
        window.ajsrConfirm.confirm = confirm;
        window.ajsrConfirm.getFocused = getFocused;
        window.ajsrConfirm.doDefault = doDefault;

        return 0
    }

}());
