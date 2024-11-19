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

	let viewProjectList = document.getElementById('ProjectList');
	viewProjectList.addEventListener('click',function(e){
		displayProjectsList()
		e.preventDefault;
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

	let viewProject4 = document.getElementById('viewProject4');
	viewProject4.addEventListener('click',function(e){
		displayProject4();
		e.preventDefault;
	});

	let viewProject5 = document.getElementById('viewProject5');
	viewProject5.addEventListener('click',function(e){
		displayProject5();
		e.preventDefault;
	});
}

function displayProjectsList(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');

	allProjects.style.display = "block";
	project1.style.display = "none";
	project2.style.display = "none";
	project3.style.display = "none";
	project4.style.display = "none";
	project5.style.display = "none";
	projectListButton.style.display = "none";
}

function displayProject1(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');

	allProjects.style.display = "none";
	project1.style.display = "block";
	project2.style.display = "none";
	project3.style.display = "none";
	project4.style.display = "none";
	project5.style.display = "none";
	projectListButton.style.display = "block";
}

function displayProject2(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');


	allProjects.style.display = "none";
	project1.style.display = "none";
	project2.style.display = "block";
	project3.style.display = "none";
	project4.style.display = "none";
	project5.style.display = "none";
	projectListButton.style.display = "block";
}

function displayProject3(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');

	allProjects.style.display = "none";
	project1.style.display = "none";
	project2.style.display = "none";
	project3.style.display = "block";
	project4.style.display = "none";
	project5.style.display = "none";
	projectListButton.style.display = "block";
}

function displayProject4(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');

	allProjects.style.display = "none";
	project1.style.display = "none";
	project2.style.display = "none";
	project3.style.display = "none";
	project4.style.display = "block";
	project5.style.display = "none";
	projectListButton.style.display = "block";
}

function displayProject5(){
	let allProjects = document.querySelector('.allProjects');
	let project1 = document.querySelector('.project1');
	let project2 = document.querySelector('.project2');
	let project3 = document.querySelector('.project3');
	let project4 = document.querySelector('.project4');
	let project5 = document.querySelector('.project5');
	let projectListButton = document.querySelector('.projectList');

	allProjects.style.display = "none";
	project1.style.display = "none";
	project2.style.display = "none";
	project3.style.display = "none";
	project4.style.display = "none";
	project5.style.display = "block";
	projectListButton.style.display = "block";
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
	let projectListButton = document.querySelector('.projectList');
	//let allProjects = document.querySelector('.allProjects');
	console.log(projectsPage);

	bodyArea.style.display = "none";
	aboutMePage.style.display = "none";
	projectsPage.style.display = "block";
	projectListButton.style.display = "none";
	displayProjectsList();
	//allProjects.style.display = "block";

}