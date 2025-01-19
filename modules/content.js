export const welcome_page = `
        <section> <!--Welcome-->
            <h1>Welcome to Fi Security</h1>
            <p class="welcome_title_meta">We are a non-profit dealing with the problem of Food Insecurity in American households, providing ease of access and services to both food insecure households and organizations.</p>
            <div class="inline_element">
                <button class="register_btn">Register</button>
                <button class="login_btn">Login</button>
            </div>

            <div class="welcome_images">
                <img class="welcome_image" src="images/welcome/img_1.png">
                <img class="welcome_image" src="images/welcome/img_2.png">
                <img class="welcome_image" src="images/welcome/img_3.png">
            </div>
        </secion>

        <section class="features"> <!--Features-->
            <div class="features_list_title"><h3>Features</h3></div>
            <p class="features_list_paragraph">We streamline the processes to help solve the problems and logistics of food insecurity.</p>
            <div class="feature_list">
                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                        <div class="feature_title">Find a Food Pantry</div>
                        <div class="feature_content">Locate nearby food pantries                                quickly with our easy-to-use
                            tool, helping individuals and
                            families access nutritious food
                            when they need it most, in a
                            matter of seconds.</div>
                    </div>
                </div>

                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                    <div class="feature_title">Inventory</div>
                    <div class="feature_content">See what’s in stock at local
                                pantries. This feature helps you
                                find exactly what you need and
                                ensures that donated items are
                                utilized efficiently, improving
                                access for everyone.</div>
                    </div>
                </div>

                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                        <div class="feature_title">Live Heatmap</div>
                        <div class="feature_content">Our real-time heatmap shows
                                pantry locations and current
                                activity, so you can make informed
                                decisions about when and where
                                to visit, reducing wait times by
                                helping you plan your trip.</div>
                    </div>
                </div>

                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                        <div class="feature_title">AI Powered Recipes</div>
                        <div class="feature_content">Get creative with what’s available!
                                Our AI-powered recipe generator
                                suggests delicious, healthy meals
                                based on the ingredients you
                                have, minimizing waste and
                                making the most of pantry items.
                                Personalized for everyone!</div>
                    </div>
                </div>

                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                        <div class="feature_title">News Updates</div>
                        <div class="feature_content">Stay up-to-date on food security
                                initiatives, community events, and
                                important changes in local pantry
                                services.Keep yourself informed
                                and connected to the latest
                                developments in the fight against
                                hunger.</div>
                    </div>
                </div>

                <div class="feature_container">
                    <div class="feature_panel"><img class="welcome_icon" src="images/welcome/feature_icon.png"></div>
                    <div class="feature_text">
                        <div class="feature_title">Resources</div>
                        <div class="feature_content">Access a variety of helpful
                                resources, from nutrition guides
                                to community support programs.
                                With resources at your fingertips,
                                this feature empowers individuals
                                with information that enhances
                                well-being and security.</div>
                    </div>
                </div>
            </div>
        </section>
`;

export const register_page = `
        <section>
            <div class="auth_text">
                <h1>Register</h1>
                <h2>Personalize Your Use</h2>
            </div>
    
            <form class="register_form" method="GET">
                <br>
                <div class="register_form_names">
                    <div class="register_form_name">
                        <label class="auth_form_labels">First Name: </label> <br>
                        <input class="auth_input" type="text" id="fname" name="fname" value="first name...">
                    </div>
                
                    <div class="register_form_name">
                        <label class="auth_form_labels">Last Name: </label> <br>
                        <input class="auth_input" type="text" id="lname" name="lname" value="last name...">
                    </div>
                </div>


                <br>
                <label class="auth_form_labels register_form_label_uname" style="float:left;">Username</label><br>
                <input class="auth_input" type="text" id="uname" name="uname" value="enter your username">
                
                <br> <br>
                <label class="auth_form_labels" style="float:left;">Email</label><br>
                <input class="auth_input" type="text" id="email" name="email" value="email@example.com">

                <br> <br> <br>
                <label class="auth_form_labels" style="float:left;">Create Password</label> <br>
                <input class="auth_input" type="text" id="cpass" name="cpass"> <br> <br>

                <label class="auth_form_labels" style="float:left;">Re-enter Password</label> <br>
                <input class="auth_input" type="text" id="repass" name="repass">
                <br> <br>
                <button class="cancel_btn auth_input">Cancel</button>
                <input class="auth_input" type="submit" value="Submit"> <br> <br>
            </form>
        </section>
`;

export const login_page = `
        <section>
            <div class="auth_text">
                <h1>Login</h1>
            </div>
    
            <form class="register_form" method="GET">
                <br>
                <label class="auth_form_labels register_form_label_uname" style="float:left;">Username / Email</label><br>
                <input class="auth_input" type="text" id="uename" name="uename" value="">
                
                <br> <br>
                <label class="auth_form_labels" style="float:left;">Password</label><br>
                <input class="auth_input" type="text" id="passwd" name="passwd" value="">

                <br> <br>
                <button class=" cancel_btn auth_input">Cancel</button>
                <input class="auth_input" type="submit" value="Submit"> <br> <br>
            </form>
        </section>
`;

export const dashboard_page = `
        <section>
            <div>
                <h1>Stony Brook University Food Pantry</h1>
                <h2>Inventory</h2>
                <div>
                    <button id="dashboard_filter_toggle">Filter</button>
                    <button id="dashboard_change_pantry">Change Pantry</button>
                </div>
            </div>
            <hr> 

            <div id="filters">
                <h2>Filters</h2>
                <h3>Find What You Want</h3>
                <div class="dashboard_filter_box">
                    <form id="filter_presets" method="post">
                        <div class="dashboard_filter_container">
                            <label>Item Name</label> <br>
                            <input type="text" id="dash_name_search" name="dash_item_search">
                            <p><span class="tooltip" id="dash_search_tooltip"><img class="dash_info_icon" src="images/dashboard/informational.png"><span class="tooltip_text" id="dash_search_tooltip_text">Enter item name, which matches name against the Item Name column. </span></span> Search:</p>
                            <div id="dashboard_search_filter">Not Set.</div>
                        </div>

                        <div class="dashboard_filter_container">
                            <label>Item Quantity</label> <br>
                            <input type="text" id="dash_qty_search" name="dash_item_search">
                            <p><span class="tooltip" id="dash_qty_tooltip"><img class="dash_info_icon" src="images/dashboard/informational.png"><span class="tooltip_text"  id="dash_qty_tooltip_text">Enter a number only to specify minimum quantity that you are looking for.</span></span> Minimum:</p>
                            <div id="dashboard_qty_filter">Not Set.</div>
                        </div>

                        <div class="dashboard_filter_container">
                            <label>Item Description</label> <br>
                            <input type="text" id="dash_desc_search" name="dash_item_search">
                            <p><span class="tooltip" id="dash_desc_tooltip"><img class="dash_info_icon" src="images/dashboard/informational.png"><span class="tooltip_text"  id="dash_desc_tooltip_text">Enter keywords separated by space to match against item description.</span></span> Tags:</p>
                            <div id="dashboard_desc_filter">Not Set.</div>
                        </div>
                        <br> <br>
                        <div class="dashboard_filter_container">
                            <input type="submit" value="Search">
                            <button type="button" id="dashboard_clear_filters">Clear Filters</button>    
                        </div>
                    </form>
                </div>
            </div>

            <hr>

            <div>
                <div class="inline_element dashboard_matches_title">Matches: </div><div class="inline_element" id="dashboard_matches"></div><br>
                <table id="dashboard_table"></table>
            </div>
        </section>
`;