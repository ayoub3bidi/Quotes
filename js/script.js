fetch('https://type.fit/api/quotes')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    generateHtml(data)
  });

const generateHtml = (data) => {
  var i = Math.ceil(Math.random() * 1643)
  var html = `
    <blockquote class="blockquote ">
    <i class="fa fa-quote-left " aria-hidden="true"></i>
    <p class="display-4">
     ${data[i].text}
     </p>
    <i class="fa fa-quote-right" aria-hidden="true"></i>
    <footer class="blockquote-footer">
    ${data[i].author}
    </footer>
    </blockquote>
    `
  document.getElementById("quotes").innerHTML = html
}