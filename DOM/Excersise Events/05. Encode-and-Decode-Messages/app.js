function encodeAndDecodeMessages() {
    let ButtonElements = document.querySelectorAll("button");
    let EncodeElement = document.querySelector("#main div textarea");
    let DecodeElement = document.querySelector("#main div:nth-child(2) textarea");

    Array.from(ButtonElements).forEach((x) => {
        if (x.textContent == "Encode and send it") {
            x.addEventListener("click", EncodeMessage);
        } else if (x.textContent == "Decode and read it") {
            x.addEventListener("click", DecodeMessage);
        }
    });
    function EncodeMessage() {
        EncodedText = "";
        EncodeText = EncodeElement.value;
        for (let i = 0; i < EncodeText.length; i++) {
            EncodedText += String.fromCharCode(EncodeText.charCodeAt(i) + 1);
        }
        DecodeElement.value = EncodedText;
        EncodeElement.value = "";
    }
    function DecodeMessage() {
        DecodedText = "";
        for (let i = 0; i < DecodeElement.value.length; i++) {
            DecodedText += String.fromCharCode(DecodeElement.value.charCodeAt(i) - 1);
        }
        DecodeElement.value = DecodedText;
    }
}
