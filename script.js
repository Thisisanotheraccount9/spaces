function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
     
    if (newTheme === "dark"){
        document.querySelector(".inside-btn-dark").style.display = "block"

        document.querySelector(".inside-btn").style.display = "none";

    }else{
        document.querySelector(".inside-btn-dark").style.display = "none"

        document.querySelector(".inside-btn").style.display = "block";
    }

    root.className = newTheme;
}

  document.querySelector('.btn-toogle').addEventListener("click", setTheme);