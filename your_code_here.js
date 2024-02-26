
function dynamically_update_comments(comments_data) {
  let place_to_put_comments = document.querySelector('#target');
  if (!target) {
    console.log("couldn't find target")
    return
  }
  place_to_put_comments.innerHTML = '';
  place_to_put_comments.innerText = "this div should now show comments, not this message"
}

