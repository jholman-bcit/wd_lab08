let dropdown = document.querySelector("select#pickadataset")
let textarea = document.querySelector("textarea#viewthedata")
if (dropdown && textarea) {
  for (let comment_name in all_comments) {
    let opt = document.createElement("option");
    opt.name = comment_name
    opt.innerText = comment_name
    dropdown.appendChild(opt)
  }
  function dropdownonchange(event) {
    let json_key = event.target.children[event.target.selectedIndex].value;
    if (!json_key) { return; }
    let json_data = all_comments[json_key]
    if (!json_data) { return; }
    let jtext = JSON.stringify(json_data, null, 4)
    textarea.value = jtext
    dynamically_update_comments(json_data)
  }
  dropdown.addEventListener("change", dropdownonchange)
  textarea.addEventListener("input", () => { dynamically_update_comments(JSON.parse(textarea.value)) })

}



