// var words = ['One Identity', 'Zero trust access'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 15,
//     speed = 120;
// var wordflick = function () {
//     setInterval(function () {
//         if (forwards) {
//             if (offset >= words[i].length) {
//                 ++skip_count;
//                 if (skip_count == skip_delay) {
//                     forwards = false;
//                     skip_count = 0;
//                 }
//             }
//         } else {
//             if (offset == 0) {
//                 forwards = true;
//                 i++;
//                 offset = 0;
//                 if (i >= len) {
//                     i = 0;
//                 }
//             }
//         }
//         part = words[i].substr(0, offset);
//         if (skip_count == 0) {
//             if (forwards) {
//                 offset++;
//             } else {
//                 offset--;
//             }
//         }
//         $('.word').text(part);
//     }, speed);
// };

$(document).ready(function () {
    $(".menu_bars").click(() => {
        $(".main_menu").toggleClass("show");
    })
    //wordflick(); // for running text
});



// header sticky code
var header = $(".header")[0];
var sticky = header.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};








