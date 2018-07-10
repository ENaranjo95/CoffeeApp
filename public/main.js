var check = document.getElementsByClassName("fa-check");
var trash = document.getElementsByClassName("fa-trash");
var synth = window.speechSynthesis;

Array.from(check).forEach(function(element) {
  console.log(check)
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const type = this.parentNode.parentNode.childNodes[3].innerText
    const size = this.parentNode.parentNode.childNodes[5].innerText
    const quantity = this.parentNode.parentNode.childNodes[7].innerText
    const other = this.parentNode.parentNode.childNodes[9].innerText
    const check = this.parentNode.parentNode.childNodes[11].innerText
    var utterThis = new SpeechSynthesisUtterance(name)
    synth.speak(utterThis)
    fetch('barista', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'type': type,
        'size': size,
        'quantity': quantity,
        'other':other
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log('works')
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const type = this.parentNode.parentNode.childNodes[3].innerText
        fetch('remove', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'type': type
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
