let containers = document.getElementsByClassName('container');
let content = document.querySelectorAll('content');

for (i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', function () {
            this.classList.toggle('active');
    })
}



