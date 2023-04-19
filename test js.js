let licznik = true;

function kolorzmiana(){
    const lewygorny = document.querySelector('#lewygorny');
    
    if (lewygorny.style.backgroundColor == 'red') {
      lewygorny.style.backgroundColor = 'green';
    } else {
      lewygorny.style.backgroundColor = 'red';
    }
}
    
function zmniejszenie() {
    const prawygorny = document.getElementById('prawygorny');
    //prawygorny.setAttribute("onclick", reset())
    if(licznik){
      prawygorny.style.width = "200px";
    prawygorny.style.height = "200px";
    }
    else{
      prawygorny.style.width = "400px";
      prawygorny.style.height = "400px";
    }
    licznik = !licznik;
}
function siema(){
  const lewydolny = document.querySelector('#lewydolny');
  lewydolny.innerHTML = "siema tu lewy";
}
function kwadrat(){
  let liczba =prompt("podaj liczbę");
  liczba = liczba * liczba;
  console.log(liczba);
  alert(liczba);
}
function divy(){

}