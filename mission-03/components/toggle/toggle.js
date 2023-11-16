const selectBoxs = document.querySelector(".drop-down");

function toggleBox(selectLang) {
  selectLang.classlist.toggle("active");
}

selectBoxs.forEach((selectBox) => {
  selectBox.addEventLsitener("click", function (e) {
    toggleBox(selectBox);
  });
});
