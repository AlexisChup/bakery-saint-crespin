// $("#form-contact").submit(function(e) {
//     e.preventDefault();
//     sendContact();
// });

function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        console.log("Form valid. We will send email via php.")
        $.ajax({
            url: "contactMail.php",
            type: "POST",
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            data:'username-name='+$("#username-name").val()+'&username-email='+
            'devale.info@gmail.com'
            // $("#username-email").val()
            +'&username-message='+
            $("#username-message").val(),
            success:function(data){
                // $("#mail-status").html(data);
                // $('#modal-confirmation').modal('toggle');
                console.log('Success sending request to php file.')
            },
            error:function (){
                console.log("Error sending request to php file.")
            }
        });
    } else {
        console.log('Form not valid !');
    }
}

function validateContact() {
    var valid = true;	
    // if(!$("#username-name").val()) {
    //     $("#username-name-info").html("(required)");
    //     $("#username-name").css('background-color','#FFFFDF');
    //     valid = false;
    // }
    // if(!$("#username-email").val()) {
    //     $("#username-email-info").html("(required)");
    //     $("#username-email").css('background-color','#FFFFDF');
    //     valid = false;
    // }
    // if(!$("#username-email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    //     $("#username-email-info").html("(invalid)");
    //     $("#username-email").css('background-color','#FFFFDF');
    //     valid = false;
    // }
    // if(!$("#username-message").val()) {
    //     $("#username-message-info").html("(required)");
    //     $("#username-message").css('background-color','#FFFFDF');
    //     valid = false;
    // }
    return valid;
}