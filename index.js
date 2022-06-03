class library{
    constructor(name,author,type){
        this.name=name
        this.author=author
        this.type=type
    }
}
class display{
    add(book){
        let tablebody=document.getElementById('tablebody')
        let html=`
                  <tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                 </tr>
        `
        tablebody.innerHTML +=html

    }
    clear(){
let libraryform=document.getElementById('libraryform')
libraryform.reset()


    }
    validate(book){
        if(book.name.length >2 || book.author.length >2){
            return true
        }
        else{
            return false
        }
    }
    show(type,displaymessage){
        let message=document.getElementById('message')
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message!</strong> ${displaymessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      setTimeout(() => {
          message.innerHTML=''
      }, 4000);

    }
}
let libraryform=document.getElementById('libraryform')
libraryform.addEventListener('submit',submitform)
function submitform(e){
    let name=document.getElementById('bookName').value
    let author=document.getElementById('author').value
    let fiction=document.getElementById('fiction')
    let cooking=document.getElementById('cooking')
    let programming=document.getElementById('programming')
    let type;
    if(fiction.checked){
        type='fiction'
    }
    else if(cooking.checked){
        type='cooking'
    }
   else if(programming.checked){
        type='programming'
    }
  
    let book =new library(name,author,type)
    let disp=new display()
    if (disp.validate(book)){
        disp.add(book)
        disp.clear()
        disp.show('success','your book added sucessfully.')
    }
    else{
        disp.show('danger','your book cannot be added.')
    }
    

    // console.log(book)
    e.preventDefault()

}


