var menuButton = document.getElementById('menuButton');
var sideMenu = document.getElementById('sideMenu');

function main(){
	sideMenu.style.right = '-250px';
}

menuButton.addEventListener('click', function()	 {
	if (sideMenu.style.right === '-250px') {
		sideMenu.style.right = '0px';
		menuButton.style.right = '20px'
	} else {
		sideMenu.style.right = '-250px';
	}
});

main();