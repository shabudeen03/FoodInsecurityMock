import { dashboard_page } from "./content.js";

function toggle_filters() {
    let filters_tag = document.getElementById("filters");
    if(filters_tag.style.display === "none") {
        filters_tag.style.display = "block";
    } else {
        filters_tag.style.display = "none";
    }
}

function filter_iname_search(iname, items, updated_list) {
    // let matches = /\d/.test(iname);
    let matches = /^[a-z]+$/i.test(iname);
    if(!matches) return 1;

    let filter_title = document.getElementById("dashboard_search_filter");
    filter_title.innerText = iname; 

    let query = iname.split(" ");
    for(let j=0; j<query.length; j++) {
        let search_item = query[j].toLowerCase();

        for(let i=0; i<items.length; i++) {
            if(items[i].itemName.toLowerCase().includes(search_item) && updated_list.indexOf(items[i]) === -1) {
                updated_list.push(items[i]);
            }
        }
    }
    
    return 0;
}

function filter_iqty_search(iqty, updated_list) {
    let matches = /^[0-9]+$/.test(iqty);
    if(!matches) return 1;

    let filter_title = document.getElementById("dashboard_qty_filter");
    filter_title.innerText = iqty; 

    //Enter error check for invalid input (not a number, etc)
    let target_num = Number(iqty);
    return updated_list.filter(item => {
        return item.itemQuantity >= target_num;
    });
}

function filter_idesc_search(idesc, items, updated_list) {
    // let matches = /\d/.test(idesc);
    let matches = /^[a-z]+$/i.test(idesc);
    if(!matches) return 1;

    let filter_title = document.getElementById("dashboard_desc_filter");
    filter_title.innerText = idesc;
    
    let query = idesc.split(" ");
    for(let i=0; i<items.length; i++) {
        let tag_list = items[i].itemDescription;
        for(let j=0; j<tag_list.length; j++) {
            let tag = tag_list[j].toLowerCase();

            for(let k=0; k<query.length; k++) {
                let query_item = query[k].toLowerCase();
                if(tag.includes(query_item)) {
                    j = tag_list.length;
                    if(updated_list.indexOf(items[i]) === -1) {
                        updated_list.push(items[i]);
                    }

                    break;
                }
            }
        }
    }

    return 0;
}


function update_dashboard_table(items) {
    let dashboard_table = document.getElementById("dashboard_table");
    dashboard_table.innerHTML = `<tr>
                        <th>Item Name</th>
                        <th>Item ID</th>
                        <th>Quantity</th>
                        <th>Description</th>
                    </tr>`;

    dashboard_table.style.width = "60%";
    dashboard_table.style.margin = "1% 20%";
    dashboard_table.style.border = "1px solid black";

    for(let i=0; i<items.length; i++) {
        let row = dashboard_table.insertRow(-1); // -1 --> add at the end
        row.className = "dashboard_table_row";
        
        let rowName = row.insertCell(0);
        let rowId = row.insertCell(1);
        let rowQty = row.insertCell(2);
        let rowDesc = row.insertCell(3);

        rowName.innerText = items[i].itemName;
        rowName.style.textAlign = 'left';

        rowName.style.border = "2px solid black";
        rowId.style.border = "2px solid black";
        rowQty.style.border = "2px solid black";
        rowDesc.style.border = "2px solid black";

        rowId.innerText = items[i].itemId;
        rowQty.innerText = items[i].itemQuantity;
        rowDesc.innerText = items[i].itemDescription.join(",\n");
    }
}

function load_dashboard_page(items) {
    document.getElementsByTagName("main")[0].innerHTML = dashboard_page;
    update_dashboard_table(items);
    add_filter_listener(items);
    add_clear_filter_listener(items);
}

function add_clear_filter_listener(items) {
    let clear_filter_btn = document.getElementById("dashboard_clear_filters");
    clear_filter_btn.addEventListener("click", (e) => {
        update_dashboard_table(items);
        document.getElementById("dashboard_search_filter").innerText = "Not Set.";
        document.getElementById("dashboard_qty_filter").innerText = "Not Set.";
        document.getElementById("dashboard_desc_filter").innerText = "Not Set.";
        document.getElementById("dash_name_search").value = "";
        document.getElementById("dash_qty_search").value = "";
        document.getElementById("dash_desc_search").value = "";
    });
}

function add_filter_listener(items) {
    let filter_toggle_btn = document.getElementById("dashboard_filter_toggle");
    filter_toggle_btn.onclick = function () {toggle_filters()}

    let filter_form_iname = document.getElementById("filter_presets");
    filter_form_iname.addEventListener("submit", (e) => {
        let new_items = [];
        e.preventDefault();
        let search = 0;
        let invalid_search = 0;
        let iname = document.getElementById("dash_name_search").value;
        document.getElementById("dash_name_search").value = "";
        if(iname !== "") {
            let retCode = filter_iname_search(iname, items, new_items);
            if(retCode === 1) invalid_search = 1;
            search++;
        } else {
            document.getElementById("dashboard_search_filter").innerText = "Not Set.";
        }

        let idesc = document.getElementById("dash_desc_search").value;
        document.getElementById("dash_desc_search").value = "";
        if(idesc !== "" && invalid_search === 0) {
            let retCode = filter_idesc_search(idesc, items, new_items);
            if(retCode === 1) invalid_search = 1;
            search++;
        } else {
            document.getElementById("dashboard_desc_filter").innerText = "Not Set.";
        }

        let iqty = document.getElementById("dash_qty_search").value;
        document.getElementById("dash_qty_search").value = "";
        if(iqty !== "" && invalid_search === 0) {
            if(new_items.length > 0) new_items = filter_iqty_search(iqty, new_items);
            else new_items = filter_iqty_search(iqty, items);

            if(new_items === 1) invalid_search = 1;
            search++;
        } else {
            document.getElementById("dashboard_qty_filter").innerText = "Not Set.";
        }

        if(search === 0) {
            alert("You have not used any of the filters.");
        } else if(invalid_search > 0) {
            alert("Invalid Search. Please use filters appropriately");
            update_dashboard_table(items);
            document.getElementById("dashboard_search_filter").innerText = "Not Set.";
            document.getElementById("dashboard_qty_filter").innerText = "Not Set.";
            document.getElementById("dashboard_desc_filter").innerText = "Not Set.";
        } else { 
            update_dashboard_table(new_items);
            document.getElementById("dashboard_matches").innerText = (new_items.length > 0)? new_items.length : "None";
        }
    });
}

export { load_dashboard_page };