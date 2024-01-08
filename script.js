const button = document.querySelector('button')
const input = document.querySelector('input')
const DivQrcode = document.querySelector('#qrcode')



function GenerateQRcode() {
    let inputData = input.value

 
    if (inputData === '') {
       return;
    }
    
    // Clear existing QR code
    DivQrcode.innerHTML = ''

    // Generate new QR code
    new QRCode(DivQrcode, {
        text: inputData,
        width: 300,
        height: 300
    });

}

button.addEventListener('click' , ()=> {
    GenerateQRcode()
    input.value = ''
})