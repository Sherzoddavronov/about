const form = document.getElementById("contactForm");

function sendToTelegram() {
    const botToken = "7611061729:AAFmgmHYburqhwOFlFpn5Ij-uEGLiNUL-D0"; 
    const chatId = "6504383276"; 

    const bodyMessage = `👤 Ism: ${form.name.value}
📧 Email: ${form.email.value}
📞 Telefon: ${form.phone.value}
📝 Xabar: ${form.message.value}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: bodyMessage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            Swal.fire({
                title: "Rahmat!",
                text: "Xabaringiz jo'natildi",
                icon: "success",
                confirmButtonText: "OK",
            });
            form.reset();  
        } else {
            Swal.fire({
                title: "Xatolik yuz berdi!",
                text: "Iltimos qaytadan urinib ko'ring.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    })
    .catch(error => {
        Swal.fire({
            title: "Xatolik yuz berdi!",
            text: "Iltimos qaytadan urinib ko'ring.",
            icon: "error",
            confirmButtonText: "OK",
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendToTelegram();
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formani avtomatik yuborilishini to‘xtatadi

    // "Xabar yuborildi!" bildirishini chiqarish
    let responseDiv = document.getElementById("responseMessage");
    responseDiv.style.display = "block";

    // 3 soniyadan keyin bildirishni yashirish
    setTimeout(() => {
        responseDiv.style.display = "none";
    }, 3000);

    // Forma maydonlarini tozalash
    this.reset();
});
