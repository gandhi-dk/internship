window.addEventListener("scroll", progressAll);
// console.log(window.innerHeight);

function progressAll(){
    const trigggerProgress=(window.innerHeight/8)*4;
    const progressTop=document.getElementById("about-p");

    const progressStart=progressTop.getBoundingClientRect().top;
    // console.log(progressStart);

    if(progressStart<trigggerProgress){
        const progress=document.getElementById("progressDoneHTML");
        progress.style.width=progress.getAttribute("data-done");
        progress.style.opacity=1;

        const progressCSS=document.getElementById("progressDoneCSS");
        progressCSS.style.width=progressCSS.getAttribute("data-done");
        progressCSS.style.opacity=1;

        const progressJS=document.getElementById("progressDoneJS");
        progressJS.style.width=progressJS.getAttribute("data-done");
        progressJS.style.opacity=1;

        const progressPy=document.getElementById("progressDonePy");
        progressPy.style.width=progressPy.getAttribute("data-done");
        progressPy.style.opacity=1;

        const progressJAVA=document.getElementById("progressDoneJAVA");
        progressJAVA.style.width=progressJAVA.getAttribute("data-done");
        progressJAVA.style.opacity=1;
    }
}