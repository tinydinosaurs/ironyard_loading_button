
////// add styles //////

// style the body
document.querySelector('body').style.textAlign = 'center';
document.querySelector('body').style.marginTop = '15em';

// create button variable
var LoadingButton = document.querySelector('button');

// style the button
LoadingButton.style.width = "10em";
LoadingButton.style.height = "4em";
LoadingButton.style.fontSize = "0.8em";

////// add some functionality //////

function endLoading() {
	LoadingButton.innerHTML = 'submit'
}

function loading() {
	LoadingButton.innerHTML = 'loading...'
	setTimeout(endLoading, 1500);
};

LoadingButton.addEventListener('click', loading);

////////////////////
////ADVENTURER MODE
////////////////////

LoadingButton.style.backgroundColor = "SeaGreen";
LoadingButton.style.border = "15px solid MediumSeaGreen";
LoadingButton.style.color = "white";
LoadingButton.style.fontSize = "1.25em";
LoadingButton.style.color = "white";
LoadingButton.style.textTransform = "uppercase"
