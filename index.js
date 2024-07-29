var i = 0;
document.querySelector(".reset-bt button").onclick = function(){
    i=0;
    document.querySelector(".container div h2").textContent = i;
};

document.querySelector(".counter-bt button").onclick = function(){
    document.querySelector(".container div h2").textContent = ++i;
};