
const movieInputEl = document.getElementById('movie');
const seatsList = document.querySelectorAll('.seats-container .seats svg');
// const screenSlider = document.querySelectorAll('.screen img');
// console.log(screenSlider);
const seatCountEl = document.getElementById('seat-count');
const amountEl = document.getElementById('amount');

function showSummary(){
    const selectedSeats = document.querySelectorAll('.seats-container .seats svg.selected');
    const movieAmount = movieInputEl.value;
    const seatCount = selectedSeats.length;
    const amount= seatCount * movieAmount;

    seatCountEl.innerText = seatCount;
    amountEl.innerText = '₹' + amount;
}

//events
movieInputEl.addEventListener('change' , function(){
    showSummary();
});

for(let i=0; i< seatsList.length; i++){
        if(!seatsList[i].classList.contains('booked')){
            seatsList[i].addEventListener('click' ,function(){
                seatsList[i].classList.toggle('selected');
                showSummary();
            })
        }
}

// document.getElementById('movie').addEventListener('change', function() {
//     var selectedImageId = this.value;
//     var images = document.querySelectorAll('.image');
//     images.forEach(function(image) {
//         image.classList.remove('active');
//         if (image.getAttribute('data-value') === selectedImageId) {
//             image.classList.add('active');
//         }
//     });
// });

