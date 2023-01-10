const imageCount = $(".images").length

const imageWidth = $(".images").width()
const imageHeight = $(".images").height()
const totalWidth = imageCount * imageWidth



$("#image-slider").css({
    width: imageWidth,
    height: imageHeight
})


$("#slider").css({
    width: totalWidth,
    marginLeft: -imageWidth
})


$(".images:last-child").prependTo("#slider")


$("#prev").click(() => {
    $("#slider").animate({
        left: imageWidth
    }, 800, () => {
        $(".images:last-child").prependTo("#slider")
        $("#slider").css("left", "")
    })
})


$("#next").click(() => {
    $("#slider").animate({
        left: -imageWidth
    }, 800, () => {
        $(".images:first-child").appendTo("#slider")
        $("#slider").css("left", "")
    })
    
})

//responsive on resizing windows for slider
$(window).resize(function(){location.reload();});


