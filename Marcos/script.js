var input=  document.getElementById('numero');
input.addEventListener('input',function(){
    if (this.value.length > 9) 
    this.value = this.value.slice(0,9); 
})