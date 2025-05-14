let codeProjects = [''];
let currentProject = ''

document.addEventListener('DOMContentLoaded', () => {
    let checkBox = document.getElementById('menuCheck');
    let navBar = document.getElementById('navigation');
    let closeBox = document.getElementById('menuCheckOff');

    checkBox.addEventListener('change', () => {
        if(checkBox.checked){
            navBar.style.width = '500px';
        }else{
            navBar.style.width = '0';
        }
        document.getElementById('arrowL').style.display = 'none';
    });

    closeBox.addEventListener('change', () => {
        if(checkBox.checked){
            checkBox.checked = false;
            closeBox.checked = false;
            navBar.style.width = '0';
        }
        document.getElementById('arrowL').style.display = 'flex';
    });
});

function moveCarouselStory(project) {
    if(project == '1984'){
        document.getElementById('project').innerHTML = `
        <img src="/images/1984.jpg" id="projectImage" alt="Photo of the Book 1984">
        <h2 id="projectTitle">1984 Essay</h2>
        <article>
            <a href="https://docs.google.com/document/d/1BCk8J-FWkW0Q6aKohO1mpmsgSeerz1aiUw9h1mI0K-E/edit?tab=t.0">Google
                Doc</a>
            <ul>
                <li>This was an essay written for English class in the 11th grade, it discusses how tech can be used
                    could be
                    used to control people as well as other ways tech affects our life in the modern day</li>
                <li>This essay was based on the book 1984, and was used to showcase our literary and inferring skills.
                </li>
            </ul>
        </article>`;
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselStory("story")');
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselStory("story")');
    }else{
        document.getElementById('project').innerHTML = `
        <img src="/images/game.png" alt="Photo of the Adventure game project">
        <h2>Adventure Game Story</h2>
        <article>
            <a href="https://docs.google.com/document/d/1jo6IM3nb2le5F6tG2jQblu_1F_Y2ukpftPiEOlO3Vq4/edit?usp=sharing">Google
                Doc</a>
            <ul>
                <li>This project is the story for the adventure game project you can find in the programming projects
                    page</li>
                <li>This story had to be created completely from scratch and needed to be designed with gameplay and
                    choices in mind</li>
                <li>It was completed with one other person and was the first time I had tried to create a non linear
                    story for a game</li>
            </ul>
        </article>`;
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselStory("1984")');
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselStory("1984")');
    }
}

function moveCarouselCode(project){
    if(project == 'rain'){
        document.getElementById('project').innerHTML = `
        <img src="/images/rainiest.png" alt="Photo of the website Make-It-Rainiest">
        <h2>Make-it-Rainiest</h2>
        <article>
            <a href="https://makeitrainiest.netlify.app">The Website</a>
            <a href="https://github.com/AAflip/makeitrainiest">Github Repository</a>
            <ul>
                <li>This was a game created by myself in collaboration with two of my friends</li>
                <li>The name and design was inspired by a website created by our teacher to encourage students to
                    complete their work.</li>
                <li>This website was created with the purpose of helping us improve our technical skills and to create
                    something fun that people would enjoy</li>
                <li>The website functions similar to games like cookie clicker, where in order to buy upgrades you need
                    to click on the screen, and upgrades help you progress even faster.</li>
                <li>There is no story or overarching goal in this game due to us moving on to bigger and better
                    projects, however it still showcases a good level of technical knowledge.</li>
            </ul>
        </article>`;
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselCode("trion")');
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselCode("eecu")');
    }else if(project == 'trion'){
        document.getElementById('project').innerHTML = `
        <img src="/images/trion.png" alt="Photo of the Trion Supercars website proposal">
        <h2>Trion Supercars</h2>
        <article>
            <a href="https://trisupercar.netlify.app/">The Website</a>
            <a href="https://github.com/AAflip/supercar-website-pm-team-6-trion-website">Github Repository</a>
            <ul>
                <li>This was a website created for the use of a 3+ million dollar supercar company named Trion
                    supercars.</li>
                <li>This website was made in collaboration with one other person by request of Trion supercars through
                    the Center
                    for Advanced Research and Technology (CART).</li>
                <li>This project was undertaken to help me and my work partner further our knowledge in the field of web
                    development, as well as to gain experience working in a team.</li>
                <li>The website has approximately 30 pages containing various pieces of content, such as car
                    information,
                    merchandise store, and a car customization feature.</li>
            </ul>
        </article>`;
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselCode("advent")');
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselCode("rain")');
    }else if(project == 'advent'){
        document.getElementById('project').innerHTML = `
        <img src="/images/game.png" alt="Photo of the Adventure game project">
        <h2>Adventure Video Game</h2>
        <article>
            <a href="https://beneathesheep2.netlify.app">The Website</a>
            <a href="https://github.com/AAflip/project-adventure-polybius">Github Repository</a>
            <ul>
                <li>This website is an interactive story game, where you can solve puzzles, fight bad guys, and get
                    immersed
                    in
                    the story</li>
                <li>This website was created with one other person in order to improve our skills and learn more about
                    js-html
                    integration</li>
                <li>This game is also the first time we’ve tried to do something like this, however it it still and
                    excellent
                    showcase of our technical ability as well as our writing skills.</li>
            </ul>
        </article>`;
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselCode("eecu")');
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselCode("trion")');
    }else if(project == 'eecu'){
        document.getElementById('project').innerHTML = `
        <img src="/images/budget.png" alt="Photo of the EECU budget calculator">
        <h2>EECU Budget Calculator</h2>
        <article>
            <a href="https://bugetcalcalc.netlify.app/">The Website</a>
            <a href="https://github.com/AAflip/eecu-budget-caclulator-AAflip">Github Repository</a>
            <ul>
                <li>This website was requested for Educational Employees Credit Union through the Center for Advanced
                    Research
                    and Technology (CART) and was created to help members of the credit union budget their finances</li>
                <li>The parameters for this project were, that I had to lead members of my class on making this website
                    instead
                    of making it myself</li>
                <li>The website features a compact design with a information summary off to the right and editable
                    dropdowns to
                    help categorize deductions</li>
            </ul>
        </article>`;
        document.getElementById('arrowR').setAttribute('onclick', 'moveCarouselCode("rain")');
        document.getElementById('arrowL').setAttribute('onclick', 'moveCarouselCode("advent")');
    }
}