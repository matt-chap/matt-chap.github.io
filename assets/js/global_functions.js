const storageName = "github_matt_theme";

const toggleThemeType = () => {
    setThemeContent(document.getElementById('btn_theme_svg_src').href.baseVal.includes('dark_mode'));
}

const loadThemeData = () => {
    let ls = localStorage.getItem(storageName);
    setThemeContent(ls === "Dark_Mode_Off");
}

const setThemeContent = (isDarkMode) => {
    let btn_theme_svg_src = document.getElementById("btn_theme_svg_src");
    let svg_href = btn_theme_svg_src.href.baseVal;

    if (isDarkMode){
        btn_theme_svg_src.href.baseVal = svg_href.replace('dark_mode','light_mode' );
        document.body.classList.remove("theme--dark");
        document.body.classList.add("theme--light");
        localStorage.setItem(storageName, "Dark_Mode_Off");
    } else {
        btn_theme_svg_src.href.baseVal = svg_href.replace('light_mode','dark_mode');
        document.body.classList.remove("theme--light");
        document.body.classList.add("theme--dark");
        localStorage.setItem(storageName, "Dark_Mode_On");
    }
}