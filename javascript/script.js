const input = document.querySelector('#input');
const addBtn = document.querySelector('.addBtn');

const list = document.querySelector('.list');
const ul = document.querySelector('ul');

counter = 0;
let full = 'List is full!'
let onlyDigit = 'Text contains only numbers!'

function addToDo() {
    for (let i = 0; i < 100; i++){
        if (input.value == ''*i) return
    }
    if (input.value == `${onlyDigit}`) return
    
    // counter += 1;
    // console.log(counter);

    let li = document.createElement('li');
    let para = document.createElement('p');
    para.textContent = input.value

    if (para.textContent.match(/^[0-9]+$/) != null){
        counter = counter
        input.value = `${onlyDigit}`;
        input.readOnly = true;
        return
    } else {
        counter += 1
        input.readOnly = false;
        li.appendChild(para);
    }
    // li.textContent = input.value;
    // li.appendChild(para);
    let remove = document.createElement('button');
    remove.textContent = '✖';
    remove.style = '-webkit-text-decoration-line: none; text-decoration-line: none;'
    if (counter % 2 == 1) {   // color-1 (light-purple)
        li.style = 'background: #F0EBF4';
        // remove.style = 'background: hsl(273, 19%, 74%);';
        remove.style = 'color: white';

        remove.addEventListener('mousemove', () => {
            remove.style = 'color: #F172A1';
        })
        remove.addEventListener('click', () => {
            remove.style = 'color: #E64398';
        })
        remove.addEventListener('mouseout', () => {
            remove.style = 'color: white';
        })

        ///
        let span = document.createElement('span');
        span.textContent = '✔ '
        span.style = 'display: none';
        para.prepend(span);
        ///

        let clickCount = 0;
        li.addEventListener('click', () => {
            clickCount += 1;
            let text = para.innerText;

            if (clickCount % 2 == 1){   
                span.style = 'display: inline';
            } else {
                span.style = 'display: none';
            }
        })

    } else { //color-2 (white)
        li.style = 'background: white';
        remove.style = 'color: #F0EBF4';
        // remove.style = 'background: #F172A1';

        remove.addEventListener('mousemove', () => {
            remove.style = 'color: #F172A1';
        })
        remove.addEventListener('mouseout', () => {
            remove.style = 'color: #F0EBF4';
        })

        ///
        let span = document.createElement('span');
        span.textContent = '✔ '
        span.style = 'display: none';
        para.prepend(span);
        ///

        let clickCount = 0;
        li.addEventListener('click', () => {
            clickCount += 1;
            let text = para.innerText;

            if (clickCount % 2 == 1){   
                span.style = 'display: inline';
                
            } else {
                span.style = 'display: none';
            }
        })

    }

    ul.appendChild(li);

    li.appendChild(remove);

    input.value = '';

    remove.addEventListener('click', () => {
        counter = counter - 1;
        ul.removeChild(li);
        li.removeChild(remove);
        if (input.value == `${full}` || input.value == `${onlyDigit}`) {
            input.value = '';
        }

        input.classList.add('purple');
        input.classList.add('white');

        if (document.querySelector('ul').children[0] == undefined){
            return
        }
        if (document.querySelector('ul').children[0].style.backgroundColor == "white") {
            input.style.backgroundColor = 'rgb(240, 235, 244)';
        } 
        if (document.querySelector('ul').children[0].style.backgroundColor == "rgb(240, 235, 244)") {
            input.style.backgroundColor = 'white';
        }

    })
}

addBtn.addEventListener('click', () => {
    if (counter >= 13) {
        input.value = `${full}`;
        input.readOnly = true;
    } else {
        input.readOnly = false;
        if (input.value == `${full}`){
            input.value = '';
        } else if (input.value == `${onlyDigit}`){
            input.value = '';
        } else {
            addToDo();
        }
    }
});


window.onkeydown = function(e) {
     let x = e.key;
     let btn;
     switch(x) {
        case 'Enter':
            btn = document.querySelector('.addBtn');
            btn.click();
            break
        default:
            return    
     }
}
