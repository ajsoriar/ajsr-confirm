'use strict';

//var myApp = angular.module('myApp', ['ngAvatar']);

describe('Unit testing ajsrConfirm, jQuery version.', function() {

    /*

    var $compile, $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(module('myApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_) {

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content. Display angular-avatar directive in the UI and rendering a png image', function() {
        
        //expect( 8 ).toBe(8);
        
        // Compile a piece of HTML containing the directive
        var element = $compile('<div><ng-avatar initials="A"></ng-avatar></div>')($rootScope);
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("data:image/png;base64"); // By default this directive will generate a png image.
        
    });

    it('Replaces the element with the appropriate content. Display angular-avatar directive in the UI and rendering a jpeg image', function() {

        // Compile a piece of HTML containing the directive
        var element = $compile('<div><ng-avatar initials="B" picture-format="jpeg"></ng-avatar></div>')($rootScope);
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("data:image/jpeg;");
        
    });

    it('Generated IMG element sould have the class "image-class" ' , function() {

        // Compile a piece of HTML containing the directive
        var element = $compile('<div><ng-avatar initials="C" img-class="image-class" ></ng-avatar></div>')($rootScope);
        $rootScope.$digest();

        // Check that the compiled element contains the templated content
        var str = element.html();
        console.log( "str: ", str );
        expect(element.html()).toContain("image-class");
        
    });
    */

    // add needed architecture to allow testing in the future

    describe('Testing xxx', function() {

        it('1 should be 1', function() {
            expect( 1 ).toBe(1);
        });
    });

});

