document.addEventListener("DOMContentLoaded", ()=> {
    const picker = document.querySelector(".select-with-images")
    picker.addEventListener("change", function() {
        this.setAttribute("style", `background: url("${this.selectedOptions[0].dataset.optionImg}")`)
    })
})