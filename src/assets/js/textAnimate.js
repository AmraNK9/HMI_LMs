export function textAnimate(){
    $(".header1").textillate({
        initialDelay: 0,
        in: {
            effect: "fadeInRight",
    
            delay: "10",
            speed: "1000",
        },
    });
    $(".header2").textillate({
        initialDelay: 200,
        in: {
            effect: "fadeInRight",
            delay: "10",
            speed: "5000",
        },
    });
    $(".sub-header").textillate({
        initialDelay: 500,
        in: {
            effect: "bounceIn",
            delay: "5",
            speed: "1000",
            sync: false,
            shuffle: false,
            reverse: false,
    
        },
    });
}