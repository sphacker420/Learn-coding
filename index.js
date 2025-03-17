function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-theme', !wasDarkmode);
    var x = document.getElementById(icol);
    if(!darkmode){
        x.classList.toggle("bi bi-sun-fill")
    }else{
        x.classList.toggle("bi-moon-fill")
    }
}
function onload() {
    document.body.classList.toggle('dark-theme', localStorage.getItem('darkmode') === 'true');
    }



// on click Window change
