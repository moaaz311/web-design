const navs = document.querySelector(".ull");
navs.onclick = (e) => {
    if (e.target.tagName === "LI") {
        document.querySelectorAll(".ull li").forEach(li => li.classList.remove("active"));

        e.target.classList.add("active");
        const selectedCategory = e.target.getAttribute("data-category");
        const allCategories = document.querySelectorAll(".wep_design, .graphics, .last .motion, .last .pranding");

        for (let i = 0; i < allCategories.length; i++) {
            const cat = allCategories[i];

            if (selectedCategory === "all") {
                cat.classList.remove("filter");
            } 
            else {
                if (cat.classList.contains(selectedCategory)) {
                    cat.classList.remove("filter"); 
                } 
                else {
                    cat.classList.add("filter");
                }
            }
        }

    }
};
