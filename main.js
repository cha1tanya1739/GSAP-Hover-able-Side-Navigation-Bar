var nav = document.querySelector("#nav");

nav.addEventListener('mouseenter', function(debts){
    gsap.to("#nav",{
        width:300,
        duration:0.35
    })
});

nav.addEventListener('mouseleave', function(debts){
    gsap.to("#nav",{
        width:85,
        duration:0.35
    })
});