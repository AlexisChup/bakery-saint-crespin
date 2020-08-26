<?php
    $toEmail = "alexischup@gmail.com";
    $subject = "subject";
    // $message = $_POST["username-message"];
    $headers = 'From: devale.info@gmail.com';
    if(mail($toEmail, $subject, "Message", $headers)) {
        echo "<p class='success'>Mail Sent.</p>";
    } else {
        echo "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>