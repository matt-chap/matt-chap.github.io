const toggleThemeType = () => {
    let btn_theme_txt = document.getElementById("btn_theme_txt");
    let btn_theme_img = document.getElementById("btn_theme_img");

    if (btn_theme_txt.textContent === "Light Theme"){
        btn_theme_txt.textContent = "Dark Theme";
        btn_theme_img.src = "assets/images/icons/dark_mode_black_24dp.svg";
    }else{
        btn_theme_txt.textContent = "Light Theme";
        btn_theme_img.src = "assets/images/icons/light_mode_black_24dp.svg";
    }
    
}