let i = document.querySelector('input'),
    o = document.querySelector('output');
    
    o.innerHTML = i.value;
    
    // use 'change' instead to see the difference in response
    i.addEventListener('input', function () {
        o.innerHTML = i.value;
    }, false);