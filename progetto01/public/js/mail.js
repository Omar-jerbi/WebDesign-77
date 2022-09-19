function sendMail(){

    var mail = document.querySelector('#mail');

    Email.send({
        Host: "smtp.gmail.com",
        Username : "uni2022icl@google.com",
        Password : "icl2022uni",
        To : 'uni2022icl@google.com',
        From : "uni2022icl@google.com",
        Subject : "test1S",
        Body : mail.value,
        }).then(
            message => alert("Grazie per la tua iscrizione!")
        );
}