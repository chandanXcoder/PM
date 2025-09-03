function showMessage() {
    alert("श्री उदय वर्मा प्रधानमंत्री आवास योजना के तहत आवास मित्र के रूप में कार्यरत हैं।");
}

// फॉर्म भेजने पर संदेश दिखाना
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("आपका संदेश भेज दिया गया है। धन्यवाद!");
        form.reset();
    });
}
