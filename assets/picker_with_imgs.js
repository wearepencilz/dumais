document.addEventListener("DOMContentLoaded", function() {
    const selectSelected = document.querySelector(".select-with-imgs-selected");
    const selectItems = document.querySelector(".select-with-imgs-items");
  
    selectSelected.addEventListener("click", function() {
        if(selectItems.classList.contains("open")) {
            selectItems.classList.remove("open");
        }
        else {
            selectItems.classList.add("open");
        }
    });
  
    selectItems.addEventListener("click", function(event) {
        let target;
        if (event.target.classList.contains("select-with-imgs-option")) {
            target = event.target
        } else if (event.target.parentNode.classList.contains("select-with-imgs-option")) {
            target = event.target.parentNode
        }
        if (target) {
            selectSelected.querySelector("#selectedValueTitle").textContent = target.textContent;
            const newImg = target.querySelector("img")?.getAttribute("src");
            selectSelected.querySelector("img").setAttribute("src", newImg);
            selectItems.classList.remove("open");
            document.querySelector(".hidden-select-with-imgs").value = target.getAttribute("value");
            document.querySelector("variant-selects").onVariantChange();

        }
    });
  
    document.addEventListener("click", function(event) {
      if (!selectSelected.contains(event.target)) {
        selectItems.classList.remove("open");
      }
    });
});