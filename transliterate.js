function transliterate(word) {
  translit = "";
  for (l in word) {
    letter = word[l];
    match = false;
    for (i in conversion) {
      if (letter == conversion[i].l) {
        translit += conversion[i].t;
        match = true;
      }
    }
    if (match == false) {
      translit += letter;
    }
  }
    return translit;
}

function convert_button() {
  word = window.textbox.value;

  window.output.innerHTML = transliterate(word)
}
