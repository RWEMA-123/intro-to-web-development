function changebackgroundcolor(color){
    let section=get.elementbyId('coding journey');
    section.style.backgroundColor=color;
}
console.log('hallo')
document.getElementById('intro').addEventListener('click',() => changebackgroundcolor("#2CA02C"))

document.getElementById('react').addEventListener('click',() => changebackgroundcolor("#FF70F0E"))

document.getElementById('backend').addEventListener('click',() => changebackgroundcolor("#9467BD"))