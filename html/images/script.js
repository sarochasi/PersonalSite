console.log("JS loaded");

window.addEventListener('load', function(e) {
    console.log('document loaded');
    init();
});


function init(){
	showHome();
	let homeLink = document.getElementById("goToHome");
	homeLink.addEventListener('click', function(e){
		showHome();
		e.preventDefault();
	});

let aboutMeLink = document.getElementById("goToAboutMe");
	aboutMeLink.addEventListener('click', function(e){
		showAboutMe();
		e.preventDefault();
	});

let projectsLink = document.getElementById("goToProjects");
	projectsLink.addEventListener('click', function(e){
		showProjects();
		e.preventDefault();
	});
}

function showHome(){
	let bodyArea = document.querySelector('.bodyArea');
	console.log(bodyArea);
	let aboutMePage = document.querySelector('.aboutMePage');
	let projectsPage = document.querySelector('.projectsPage');
	

	bodyArea.style.display = "block";
	aboutMePage.style.display = "none";
	projectsPage.style.display = "none";

	//bodyArea.style.visibility = "visible";
	//aboutMePage.style.visibility = "hidden";
	//projectsPage.style.visibility = "hidden";

}

function showAboutMe(){
	let bodyArea = document.querySelector('.bodyArea');
	
	let aboutMePage = document.querySelector('.aboutMePage');
	console.log(aboutMePage);
	let projectsPage = document.querySelector('.projectsPage');

	bodyArea.style.display = "none";
	aboutMePage.style.display = "block";
	projectsPage.style.display = "none";

}

function showProjects(){
		let bodyArea = document.querySelector('.bodyArea');
	
	let aboutMePage = document.querySelector('.aboutMePage');
	let projectsPage = document.querySelector('.projectsPage');
	console.log(projectsPage);

	bodyArea.style.display = "none";
	aboutMePage.style.display = "none";
	projectsPage.style.display = "block";

}