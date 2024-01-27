const arrayOfCategories = document.querySelectorAll(".item");

console.log("Number of categories:", arrayOfCategories.length);

arrayOfCategories.forEach(category => {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.children.length);
})