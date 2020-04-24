var books = [
    {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
    }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }
    ];

  let parent = document.querySelector("#books");
   
   for(let i=0;i<books.length;i++){
    let para = document.createElement("p");
    parent.appendChild(para);
      let book = document.createTextNode(books[i].title);
       para.appendChild(book);
   }


//   let para = document.createElement("p"); 
    