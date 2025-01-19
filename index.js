import { welcome_page, register_page, login_page } from "./modules/content.js";
import { load_dashboard_page } from "./modules/dashboard.js";
import { items } from "./modules/items.js";

let page_id = 0;

function change_main(id) {
    if(page_id == id) return;
    document.body.style.visibility = 'hidden';

    let logout_btn = document.getElementById("logout_btn");
    logout_btn.onclick = function() {change_main(0)};
    if(id > 2) {
        document.getElementById("register_btn").style.display = "none";
        document.getElementById("login_btn").style.display = "none";
        logout_btn.style.display = "inline-block";
    } else {
        document.getElementById("register_btn").style.display = "inline-block";
        document.getElementById("login_btn").style.display = "inline-block";
        logout_btn.style.display = "none";
    }

    switch(id) {
        case 1:
            page_id = 1;
            load_register_page();
            break;
        case 2: 
            page_id = 2;
            load_login_page();
            break;
        case 3: 
            page_id = 3;
            load_dashboard_page(items);
            break;
        default:
            page_id = 0;
            load_welcome_page();
    }

    document.body.style.visibility = 'visible';
}

function load_welcome_page() {
    document.getElementsByTagName("main")[0].innerHTML = welcome_page;

    let register_btn = document.getElementById("register_btn");
    register_btn.onclick = function() {change_main(1)};

    let login_btn = document.getElementById("login_btn");
    login_btn.onclick = function() {change_main(2)};

    let register_btn_backup = document.getElementsByClassName("register_btn")[0];
    register_btn_backup.onclick = function() {change_main(1)};

    let login_btn_backup = document.getElementsByClassName("login_btn")[0];
    login_btn_backup.onclick = function() {change_main(2)};

    let logo_img = document.getElementsByClassName("logo")[0];
    logo_img.addEventListener("click", (e) => { change_main(0) });
}

function load_register_page() {
    document.getElementsByTagName("main")[0].innerHTML = register_page;
    let cancel_btn = document.getElementsByClassName("cancel_btn");
    cancel_btn[0].addEventListener("click", (e) => { change_main(0); });
}

function load_login_page() {
    document.getElementsByTagName("main")[0].innerHTML = login_page;
    let cancel_btn = document.getElementsByClassName("cancel_btn");
    cancel_btn[0].addEventListener("click", (e) => { change_main(0); });
}

let dashboard_tab = document.getElementById("tab_home");
dashboard_tab.addEventListener("click", (e) => { change_main(3); });

change_main();