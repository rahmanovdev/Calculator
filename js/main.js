const out = document.querySelector('.calc-screen p')
const buttons = Array.from(document.querySelectorAll('.btn'))


buttons.map((btn)=> {
    btn.addEventListener('click', (e)=> {
        switch(e.target.innerHTML) {
            case 'ac': 
            out.innerHTML = '0'
            break;

            case '=':
               try {
                out.innerHTML = eval(out.innerHTML)
               }catch (e) {
                out.innerHTML = 'Error!'
               }
                break;

            case '%':  
               let passedText = out.innerHTML + '/100'
               out.innerHTML = eval(passedText)
               break;

               case '+/-':  
               out.innerHTML = '-'
               break;

            default: 
            if(out.innerHTML === '0' && e.target.innerHTML !== '.'){
                out.innerHTML = e.target.innerHTML
            }else {
                out.innerHTML += e.target.innerHTML
            }
          
        }
    })
})