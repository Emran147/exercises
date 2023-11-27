let posts = [
    { name: 'emran', text: 'some text1' },
    { name: 'emran2', text: 'some text2' }
  ];
  
  const render = function () {
    $("#posts-container").empty()
    for (const post of posts) {
      const aDynamicHtml = `<div class="postDiv">${post.name} : ${post.text}</div>`;
      $("#posts-container").append($(aDynamicHtml));
    }
  };
  
  const clickFunc = function () {
    let name = $('#name-input').val();
    let text = $('#text-input').val();
    let post = { name: name, text: text };
    posts.push(post);
    render();
  };
  
  $('button').click(clickFunc);
  
  