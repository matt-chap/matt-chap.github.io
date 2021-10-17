const toggleThemeType = () => {
    let btn_theme_txt = document.getElementById("btn_theme_txt");
    let btn_theme_svg_src = document.getElementById("btn_theme_svg_src"); //TODO: fix svg switch

    if (btn_theme_txt.textContent === "Dark Theme: Off"){
        btn_theme_txt.textContent = "Dark Theme: On";
        btn_theme_svg_src.href = "assets/images/icons/modes.svg#dark_mode";
    }else{
        btn_theme_txt.textContent = "Dark Theme: Off";
        btn_theme_svg_src.href = "assets/images/icons/modes.svg#light_mode";
    }
}