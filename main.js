$(function () {
  $.backstretch('https://images.unsplash.com/photo-1446716336919-df838e44ce7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1345&q=80');

  let form = document.querySelector('form');
  let clearBtn = document.querySelector('#clear');
  let apiKey = '33sv4ePMBpRH7dhg134wMIwoZqtgvUeT';
  let gifCont = document.querySelector('#gif-cont');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let query = document.querySelector('#query').value;

    $.get('http://api.giphy.com/v1/gifs/search', {
      q: query,
      api_key: apiKey,
    }).then(function (response) {
      let data = response.data;
      console.log(response);

      if (data.length) {
        let randomId = Math.floor(Math.random() * data.length);
        let gif = document.createElement('img');
        let gifDiv = document.createElement('div');
        gifDiv.addClass = 'gif-div';

        gif.src = data[randomId].images.original.url;
        gif.style.height = '200px';
        gif.style.width = '300px';

        gifDiv.appendChild(gif);
        gifCont.appendChild(gifDiv);
      }
    });
  });

  clearBtn.addEventListener('click', function (e) {
    gifCont.innerHTML = '';
    document.querySelector('#query').value = '';
  });
});