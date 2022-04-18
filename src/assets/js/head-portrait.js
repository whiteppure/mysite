$(".close,.gb").click(function () {
    close_pic_box()
})
function close_pic_box() {
    $(".pic_box").animate({
        'top': '-1000px'
    }, 500);
}

// 头像旋转
$(".my_box").click(function () {
    $(".pic_box").animate({
        'top': '15px',
    }, 300);
})
$(".queren").click(function () {
    var src = $(".jide").val();

    //效果展示,在服务器中把这一段删除,用上面那一段
    if (src !== "") {
        $(".my_pic").attr('src', src);
        $(".pic_box").animate({
            'top': '-1000px'
        }, 500);
    } else {
        close_pic_box();
        return false;
    }

});
var $box = document.getElementById('pic_box');
var $li = $box.getElementsByTagName('li');
var index = 0;
for (var i = 0; i < $li.length; i++) {
    $li[i].index = i;
    $li[i].onclick = function () {
        $li[index].style.borderRadius = "15%";
        this.style.borderRadius = "50%";
        index = this.index;
    }
}
$(".pic_box li img").click(function () {
    var src = $(this).attr("src");
    $(".jide").val(src);
})