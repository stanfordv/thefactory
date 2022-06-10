"use strict";
exports.__esModule = true;
exports.Index = void 0;
var image_1 = require("next/image");
function Index() {
    return (React.createElement("div", { className: "bg-gray-50" },
        React.createElement("div", { className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between" },
            React.createElement("div", { className: "text-3xl font-mono tracking-tight text-gray-900 sm:text-4xl" },
                React.createElement("span", { className: "block" },
                    React.createElement("div", { className: "items-center justify-center px-1 py-1 border bg-white" },
                        React.createElement(image_1["default"], { src: '/subroutineID_round.jpg', alt: "Soundcloud", height: 500, width: 500 }))),
                " ",
                React.createElement("h3", { className: "text-2xl mb-8" },
                    React.createElement("span", { className: "text-zinc-600 " }, "Optimistic post-apocalyptic mysticism")),
                React.createElement("div", { className: "mt-8 ml-28 flex lg:mt-0" },
                    React.createElement("div", { className: "rounded-md shadow" },
                        React.createElement("a", { href: "https://soundcloud.com/thesubroutine/looking-up-high", target: "_blank", className: "inline-flex justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-orange-500 hover:bg-black", rel: "noreferrer" },
                            React.createElement("div", { className: "h-10 w-20 relative" },
                                React.createElement(image_1["default"], { src: '/SoundcloudLogo.png', alt: "Soundcloud", width: 80, height: 40, className: "rounded-full" })))),
                    React.createElement("div", { className: "ml-4 inline-flex rounded-md shadow " },
                        React.createElement("a", { href: "https://open.spotify.com/artist/3HdPgI00Jz1qViim7N0zpw?si=pzMWop4dSDqhtbajvifHWQ", target: "_blank", className: "inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-500 bg-white hover:bg-sky-500", rel: "noreferrer" },
                            React.createElement("div", { className: "h-10 w-20 relative  items-center" },
                                React.createElement(image_1["default"], { src: '/spotifyLogo4.png', alt: "Spotify", width: 90, height: 45, className: "rounded-full" })))))))));
}
exports.Index = Index;
exports["default"] = Index;
