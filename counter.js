// 當頁面 準備完成時
$(document).ready(function () {

    // 當視窗 捲動時
    $(window).scroll(function () {


        $("*").each(function (index, element) {

            // element == this
            // var 變數 = 資料
            var offset = $(this).offset();       // 取得元素位移資料
            var top = offset.top;                   // 上方
            var left = offset.left;                 // 左方

            // console.log("元素的上方：" + top);

            var windowTop = $(window).scrollTop();

            // console.log("視窗的上方：" + windowTop);

            // 取得參數：數字、時間與位移
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var offset = $(this).attr("data-counter-offset");

            //console.log("數字：" + number);
            //console.log("時間：" + time);
            //console.log("位移：" + offset);

            // id  ()  {}
            // 如果 發生什麼事 就...
            // if (條件) { 程式 }
            if (windowTop > top - offset) {
                // console.log("開始執行動畫")


                $(this).animate({
                    num: number
                }, {
                    duration: parseInt(time),
                    step: (now) => {
                        $(this).text(Math.floor(now));
                    }
                })
            }
        });
    });
});