function tocaSomPom(){
 document.querySelector('#som_tecla_pom') .play('')
}

const listaDeTeclas = document.querySelector(`.tecla´)


listaDeTeclas[0].onclick = tocaSomPom;


for(contador = 0; contador <listaDeTeclas.legth; contador++){
  const instrumento = listaDeTeclas[contador].classList[1];

   const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}´;
    tecla.onclick = function(){
          tocaSomPom(idAudio);
    };

   tecla.onkeydown = function(){ 

   }
}
