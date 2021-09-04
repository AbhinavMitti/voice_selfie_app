var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis

    speech_text = "Taking selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speech_text);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
})
camera = document.getElementById("camera")

function take_snapshot() {
    Webcam.snap(function (data_pic) {
        document.getElementById("result").innerHTML = '<img id = "img_data" src="' + data_pic + '"/>'
    })
}

function save() {
    link = document.getElementById("link1");
    image = document.getElementById("img_data").scr
    link.href = image
    link.click();
}