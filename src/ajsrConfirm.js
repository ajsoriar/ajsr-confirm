(function($) {



    //title, 
    //text, 
    //onCancel
    //onConfirm, 
    //cancelButtonText, 
    //confirmButtonText, 
    //dlgClass

    $.ajsrConfirm = function(options, e) {

        //'use strict';
        //var Component = function(options) {

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

});
/*
  return Component;
});



*/
