const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitButton = document.getElementsByClassName("submit-button")[0];
const subject = document.getElementById("subject");
// console.log(submitButton);

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> 
    Message: ${message.value}`;

    Email.send({
        SecureToken:"d4c00957-37a8-4236-ae5b-9450400b153c", 
        To : 'nguyenxuanvuong107003@gmail.com',
        From : "nguyenxuanvuong107003@gmail.com",
        Subject: subject.value,
        Body : bodyMessage
    }).then(
      message => {
        console.log(message);
        if (message == "OK") {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    console.log(items);
    for (const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (fullName.value != "" && email.value != "" && message.value != "") {
        sendEmail();
        console.log("send");
    }
    // sendEmail();
    // checkInputs();

});
//         Host : "smtp.elasticemail.com",
// Username : "nguyenxuanvuong107003@gmail.com",
// Password : "333557272607460D5D29018EA690BC1DB23E",
// backup code: 335584