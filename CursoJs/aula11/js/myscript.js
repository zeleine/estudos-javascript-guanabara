function checkCountry() {
  var country = window.document.getElementById('country').value
  var res = window.document.getElementById('res')
  if (country == 'brasil') {
    res.innerHTML = ('Você é brasileiro')
  } else {
    res.innerHTML = ('Você é estrangeiro.')
  }
  
}