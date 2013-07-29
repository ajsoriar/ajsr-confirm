define({
    defaultOptions: {
        catchfrase: "Do it?",
        onCancel: function(){
            console.log("Cancel button was pressed!");  
        },
        onAcept: function(){
            console.log("Accept button was pressed!");
        } 
    }
});
