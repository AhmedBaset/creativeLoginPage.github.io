document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        setTimeout(function () {
            document.getElementById("splash").style.display = "none";
        }, 2500);
    }
};


let sec = document.querySelectorAll(".step");

function sign_up(){
    // hide details
    for (let i = 0; i < sec.length; i++) {
        sec[i].style.display = "none";
    };
    // show step 2
    sec[1].style.display = "block";
}
function login(){
    // hide details
    for (let i = 0; i < sec.length; i++) {
        sec[i].style.display = "none";
    };
    // show step 3
    sec[2].style.display = "block";
}
function intro(){
    // hide details
    for (let i = 0; i < sec.length; i++) {
        sec[i].style.display = "none";
    };
    // show step 1
    sec[0].style.display = "block";
}

let note = document.getElementById("note"),
    emojy = document.querySelector(".emojy"),
    inp = document.querySelectorAll("form input");


    
    function hide() {
    document.querySelector(".emojy").style.display = "none";
    }
    function Focus() {
        document.querySelector(".emojy").style.display = "flex";
        for (let w = 0; w < 10; w++) {
            inp[w].onkeyup =  function () {
                if (!inp[w].checkValidity()) {
                    
                    function cons() {
                    note.innerHTML = inp[w].getAttribute("title");
                    }

                    note.innerHTML = '<i class="far fa-question-circle" onmouseover="' + cons() + '"></i> : ' + inp[w].validationMessage;

                    emojy.classList.remove("true");
                    emojy.classList.add("false");
                } else {
                    note.innerHTML = "أحسنت " + "&#128522;";
                    emojy.classList.remove("false");
                    emojy.classList.add("true");
                }
            }
        }

    }
