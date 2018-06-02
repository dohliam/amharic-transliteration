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
  converted = transliterate(word);

  window.output.innerHTML = converted.replace(/ə([\s\.\?\!,:;"'›\)])/g, "$1").replace(/ə\n/g, "\n").replace(/ə$/g, "");
}
