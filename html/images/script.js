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

	let viewProject1 = document.getElementById('viewProject1');
	viewProject1.addEventListener('click',function(e){
		displayProject1();
		e.preventDefault;
	});

	let viewProject2 = document.getElementById('viewProject2');
	viewProject2.addEventListener('click',function(e){
		displayProject2();
		e.preventDefault;
	});

	let viewProject3 = document.getElementById('viewProject3');
	viewProject3.addEventListener('click',function(e){
		displayProject3();
		e.preventDefault;
	});
}

function displayProject1(){
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');

	project1.style.display = "block";
	project2.style.display = "none";
	project3.style.display = "none";
}

function displayProject2(){
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');

	project1.style.display = "none";
	project2.style.display = "block";
	project3.style.display = "none";
}

function displayProject3(){
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');

	project1.style.display = "none";
	project2.style.display = "none";
	project3.style.display = "block";
}

function showHome(){
	let bodyArea = document.querySelector('.bodyArea');
	console.log(bodyArea);
	let aboutMePage = document.querySelector('.aboutMePage');
	let projectsPage = document.querySelector('.projectsPage');
	

	bodyArea.style.display = "block";
	aboutMePage.style.display = "none";
	projectsPage.style.display = "none";

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