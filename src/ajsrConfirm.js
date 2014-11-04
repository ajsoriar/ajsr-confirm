(function($) {

    console.log("ajsrConfirm plug-in!");

    //title,  --
    //text, --
    //onCancel
    //onConfirm, 
    //cancelButtonText, 
    //confirmButtonText, 
    //dlgClass

    $.ajsrConfirm = function(options, e) {

        //'use strict';

        var defaults = {
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

        var parameters = $.extend(defaults, options);

        var htmlString = '';
        htmlString += '<div  class="ajsrConfirm-back-bg" style="background-color: black; height: 100%; left: 0; opacity: 0.6; position: absolute; top: 0; width: 100%;"></div>';

        var timestamp = Date.now();
        htmlString +=   '<div id="ajsrConfirm-'+ timestamp +'" class="ajsrConfirm" >' +
                          // '<div id="ajsrConfirm-wave" class="ajsrConfirm-wave"> </div>' +
                          // '<div id="ajsrConfirm-ui-image" class="ajsrConfirm-ui-image"> </div>' +
                          // '<div class="ajsrConfirm-title">' + parameters.title + '</div>' +
                          // '<div id="ajsrConfirm-brush" class="ajsrConfirm-brush"> </div>' +
                          // '<div id="ajsrConfirm-mirror" class="ajsrConfirm-mirror"> </div>' +
                          '<button class="ajsrConfirm-btn" type="button" onclick="$.ajsrConfirm(\'close\')">Cancel</button>' +
                          '<button class="ajsrConfirm-btn" type="button" onclick="$.ajsrConfirm(\'save\')">OK</button>' +
                        '</div>';

        if ( $("#window-brush-editor").length === 0 ){ // TODO: Check out this ASAP!

            console.log("brushEditor! create!");

            var link = $("body");
            link.append(htmlString);

            //blackBoard.init(); // This is awful! The number of binded events increase every time we create/open this component.
            //mirror.init();
            //circle.init();      
        }

        /*
        var componentOptions = _.extend(JSON.parse(JSON.stringify(configuration)), options || {});

        var ComponentView = Backbone.View.extend({
            events: {
                'click #btnAccept': 'onAcept',
                'click #btnCancel': 'onCancel'
            },
            initialize: function() {
                this.render();
            },
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
            destroyComponent: function() {
                this.remove();
            },
            onAcept: function() {
                fnOnAcept();
                this.destroyComponent();
            },
            onCancel: function() {
                fnOnCancel();
                this.destroyComponent();
            }
        });

        var fnOnAcept;
        if (componentOptions.onAcept !== null) {
            fnOnAcept = componentOptions.onAcept;
        }

        var fnOnCancel;
        if (componentOptions.onCancel !== null) {
            fnOnCancel = componentOptions.onCancel;
        }

        var view = new ComponentView({
            el: $(document.body)
        });

    };
*/


        if (options === "OK") { // TODO: This is awful! The number of binded events increase every time we close the window.


        }

        if (options === "CANCEL") { // TODO: This is awful! The number of binded events increase every time we close the window.

            close(); 
            
        }

        function btnCancel(){
            console.log("ajsrConfirm! btnCancel!");
            defaults.beforeClose();
            destroy();
        }

        function btnOK(){
            console.log("ajsrConfirm! btnOK!");
            defaults.beforeClose();
            destroy();
        }

        function destroy(){
            $(".ajsrConfirm-back-bg").remove();
            //$(blackBoard.cvObj).off();
            $("#ajsrConfirm").remove();  

            defaults.whenDestroyed();   

            // unbind events       
        }

    }

}(jQuery));
