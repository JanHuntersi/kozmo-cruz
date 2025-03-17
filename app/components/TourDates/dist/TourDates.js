"use strict";
exports.__esModule = true;
var ButtonPrimary_1 = require("@/app/global-components/ButtonPrimary/ButtonPrimary");
var react_1 = require("react");
function TourDates(_a) {
    var data = _a.data;
    return (react_1["default"].createElement("ul", { className: "list-none" }, data.map(function (gig) { return (react_1["default"].createElement("li", { key: gig.id, className: "flex items-center justify-between py-2 border-solid border-b-2 border-white last:border-b-0 leading-tight text-xl md:py-3 md:text-2xl lg:py-5 lg:justify-center lg:text-2xl xl:text-3xl lg:flex-row" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-between text-center text-base leading-none w-[40%] md:text-xl lg:w-6/12 lg:flex-row lg:justify-start lg:text-left lg:text-2xl" },
            react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center date w-[3.4rem] h-[3.4rem] leading-tight p-2 bg-flou-orange rounded-md lg:mr-12 lg:w-[5.3rem] lg:h-[5.3rem]" },
                react_1["default"].createElement("p", { className: "font-bold text-center uppercase" }, gig.date_text)),
            react_1["default"].createElement("div", { className: " text-white font-semibold leading-tight lg:ml-[20%]" },
                react_1["default"].createElement("p", null, gig.daytime_text),
                react_1["default"].createElement("p", null, gig.event_date))),
        react_1["default"].createElement("div", { className: "flex flex-col mt-2.5 items-center text-center text-base justify-between w-[60%] md:text-xl lg:flex-row lg:text-left lg:w-6/12 lg:mt-0 lg:text-2xl" },
            react_1["default"].createElement("div", { className: "text-white font-semibold leading-tight" },
                react_1["default"].createElement("p", null, gig.venue),
                react_1["default"].createElement("p", null, gig.city)),
            react_1["default"].createElement("div", { className: "ml-2.5 lg:ml-auto" },
                react_1["default"].createElement(ButtonPrimary_1["default"], { customClasses: "text-xs md:text-sm lg:text-base" }, "Get Ticket"))))); })));
}
exports["default"] = TourDates;
