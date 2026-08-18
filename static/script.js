function startExperience() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("memory").style.display = "block";

    showStars();

}


const memories = {

    1: {
        image: "/static/images/memory1.jpg",
        date: "20.06.2026",
        title: "день, когда всё началось",
        description: "та самая ночь, те нежные объятия"
    },

    2: {
        image: "/static/images/memory2.jpg",
        date: "21.06.2026",
        title: "после прогулочки",
        description: "наш первый неловкий поцелуй"
    },

    3: {
        image: "/static/images/memory3.jpg",
        date: "22.06.2026",
        title: "наши совместные прогулочки",
        description: "то, чего сейчас сильно не хватает"
    },

    4: {
        image: "/static/images/memory4.jpg",
        date: "хз, не помню дату",
        title: "просто милая фотка",
        description: "как она смотрит))"
    },

    5: {
        image: "/static/images/memory5.jpg",
        date: "последние фотки перед расстоянием",
        title: "это чтоб не плакала",
        description: ""
    }

};


function openMemory(number) {

    const memory = memories[number];

    document.getElementById("memoryImage").src = memory.image;

    document.getElementById("memoryDate").textContent = memory.date;

    document.getElementById("memoryTitle").textContent = memory.title;

    document.getElementById("memoryDescription").textContent =
        memory.description;

    document.getElementById("memoryWindow").style.display = "flex";
}


function closeMemory() {

    document.getElementById("memoryWindow").style.display = "none";

}

function openFuture() {

    document.getElementById("futureWindow").style.display = "flex";

}


function closeFuture() {

    document.getElementById("futureWindow").style.display = "none";

}
const meetingDate = new Date("2026-08-31T00:00:00");


function updateCountdown() {

    const now = new Date();

    const difference = meetingDate - now;


    if (difference <= 0) {

        document.getElementById("countdown").style.display = "none";

        document.getElementById("meetingMessage").style.display = "block";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);

function showStars() {

    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {

        setTimeout(() => {

            star.classList.add("star-visible");

        }, index * 600);

    });

}
function typeText(elementId, text, speed = 50) {

    const element = document.getElementById(elementId);

    element.textContent = "";

    let index = 0;


    function type() {

        if (index < text.length) {

            element.textContent += text[index];

            index++;

            setTimeout(type, speed);

        }

    }


    type();
}

window.addEventListener("load", function () {

    typeText(
        "typingText",
        "привет. я кое-что для тебя приготовил.",
        60
    );

});
function openFinal() {

    document.getElementById("finalWindow").style.display = "flex";

}


function closeFinal() {

    document.getElementById("finalWindow").style.display = "none";

}