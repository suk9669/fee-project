const addExampleHTML = () => {
    const codeBlock = document.querySelector("#codeBlock");
    const exampleHTMLtext = `<head>
    ...
    <script>
        // to add custom share button, fill data in window.customShare as such
        window.customShare = [
                {
                    title: "Instagram",
                    accentColor: "#3F729B",
                    icon: "",
                    url: "",
                },
            ];

        window.customMessage = "Put your custom message here.";
        
    </script>
    <link rel="stylesheet"
        href="${
            window.location.href.split("/").slice(0, -1).join("/") +
            "/social-share-btns.css"
        }">
    <script src="${
        window.location.href.split("/").slice(0, -1).join("/") +
        "/social-share-btns.js"
    }"></script>
    ...
</head>
<body>
    ...
    <button class="socialShareBtn">
        ...
    </button>
    ...
</body>
`;
    codeBlock.textContent = exampleHTMLtext;
    hljs.highlightAll();
};
window.addEventListener("load", () => {
    addExampleHTML();
});
