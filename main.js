 var nombre_alumno_array = [];

 function submit(){
     var nombre = document.getElementById("nombre-alumno").value;

     nombre_alumno_array.push(nombre)    

     document.getElementById("ver-nombre").innerHTML = nombre_alumno_array;
     }

     function sorting(){
         nombre_alumno_array.sort();
         document.getElementById("ver-nombre").innerHTML = nombre_alumno_array;
         
     }

    