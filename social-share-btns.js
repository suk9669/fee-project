const fillData = [
    {
        title: "WhatsApp",
        accentColor: "#0cc243",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`,
        url: `https://api.whatsapp.com/send/?text=${window.encodeURIComponent(
            window.location.href
        )}&type=custom_url`,
    },
    {
        title: "Twitter",
        accentColor: "#55ACEE",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>`,
        url: `https://twitter.com/intent/tweet?url=${window.encodeURIComponent(
            window.location.href
        )}&text=${window.encodeURIComponent(document.title)}`,
    },
    {
        title: "Facebook",
        accentColor: "#3B5998",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>`,
        url: `https://www.facebook.com/sharer/sharer.php?u=${window.encodeURIComponent(
            window.location.href
        )}`,
    },
    {
        title: "LinkedIn",
        accentColor: "#2d7cab",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>`,
        url: `https://www.linkedin.com/cws/share?url=${window.encodeURIComponent(
            window.location.href
        )}&title=${window.encodeURIComponent(document.title)}`,
    },
    {
        title: "Reddit",
        accentColor: "#ff4400",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/></svg>`,
        url: `https://www.reddit.com/submit?url=${window.encodeURIComponent(
            window.location.href
        )}&title=${window.encodeURIComponent(document.title)}`,
    },
    {
        title: "Email",
        accentColor: "#888888",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>`,
        url: `mailto:?subject=${window.encodeURIComponent(
            "Check out " + document.title
        )}&amp;body=${window.encodeURIComponent(window.location.href)}`,
    },
];

const populateSocialBtns = () => {
    const cont = document.querySelector(
        "#socialShareBtnCont .social-btn-shareBtns"
    );
    fillData.forEach((e) => {
        cont.innerHTML += `
<button class="social-btn-socialBtn"  role="button" onclick="window.open('${e.url}')" >
    <div class="social-btn-icon" style='--accentColor:${e.accentColor}'>
        ${e.icon}
    </div>
    <div class="social-btn-title">${e.title}</div>
</button>
        `;
    });
};

const makeModal = () => {
    const modalHTML = `
<div id="socialShareBtnCont" class="hide">
    <div class="social-btn-main">
        <div class="social-btn-title">Share <button class="social-btn-closeBtn">&#x2716;</button></div>
        <div class="social-btn-shareBtns">
        </div>
        <div class="social-btn-copyLink">
            <p class="social-btn-text"><span>${window.location.href}</span></p>
            <button class="social-btn-copyBtn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 96 960 960"
                >
                    <path
                        d="M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z"
                    />
                </svg>
                Copy
            </button>
        </div>
    </div>
</div>
`;
    document.body.innerHTML += modalHTML;
};

const registerEvents = () => {
    const mainCont = document.querySelector("#socialShareBtnCont");
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") mainCont.classList.replace("show", "hide");
    });
    document.querySelectorAll(".socialShareBtn").forEach((e) => {
        e.addEventListener("click", (e) => {
            if (mainCont.classList.contains("show"))
                mainCont.classList.replace("show", "hide");
            else mainCont.classList.replace("hide", "show");
        });
    });
    mainCont.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            if (e.currentTarget.classList.contains("show"))
                e.currentTarget.classList.replace("show", "hide");
            else e.currentTarget.classList.replace("hide", "show");
        }
    });
    mainCont.querySelector(".closeBtn").addEventListener("click", (e) => {
        mainCont.classList.replace("show", "hide");
    });
    mainCont
        .querySelector(".copyLink .copyBtn")
        .addEventListener("click", (e) => {
            window.navigator.clipboard
                .writeText(window.location.href)
                .then((e) => {
                    mainCont.classList.replace("show", "hide");
                })
                .catch((e) => console.error(e));
        });
};
window.addEventListener("load", () => {
    makeModal();
    populateSocialBtns();
    registerEvents();
});
