const razones = [
    "Me encanta cómo iluminas cada lugar con tu presencia.",
    "Porque cada día me enseñas algo nuevo.",
    "Amo cuando entrelazas tus dedos con los míos sin decir nada.",
    "Porque conviertes cualquier momento en algo especial.",
    "Porque haces que cada estación del año tenga más sentido.",
    "Amo cuando tarareas canciones sin darte cuenta.",
    "Porque tienes una forma única de ver el mundo.",
    "Porque cada despedida tuya me deja con ganas de verte otra vez.",
    "Amo cuando hablas con pasión sobre lo que amas.",
    "Porque cada mensaje tuyo me hace sonreír.",
    "Me encanta cómo logras sacarme de mi zona de confort.",
    "Porque siempre encuentras algo positivo en cada situación.",
    "Amo cuando me das ese beso en la frente que me tranquiliza.",
    "Porque disfrutas las cosas simples de la vida.",
    "Porque haces que cada comida juntos sea especial.",
    "Me encanta que me inspires a ser mejor cada día.",
    "Porque tienes la risa más contagiosa del mundo.",
    "Amo cuando me susurras cosas lindas sin razón.",
    "Porque haces que incluso los días nublados sean brillantes.",
    "Porque me encanta cómo sostienes la taza de café por las mañanas.",
    "Amo cómo logras calmarme con solo mirarme.",
    "Porque haces que los silencios entre nosotros sean cómodos.",
    "Porque tu manera de soñar en grande me motiva.",
    "Me encanta cuando me enseñas algo que no sabía.",
    "Porque cada abrazo tuyo me llena de paz.",
    "Amo cuando inclinas la cabeza mientras intentas entender algo.",
    "Porque cada palabra tuya tiene un impacto en mí.",
    "Amo cuando juegas con mi ropa cuando estás distraída.",
    "Porque contigo nunca hay momentos aburridos.",
    "Amo cómo te emocionas con cosas pequeñas.",
    "Porque siempre haces que los días sean memorables.",
    "Porque incluso nuestras conversaciones más simples son especiales.",
    "Me encanta cuando intentas sorprenderme con algo.",
    "Porque cada gesto tuyo me enamora más.",
    "Amo cuando me haces cosquillas sin previo aviso.",
    "Porque me encanta cómo frunces la nariz cuando piensas.",
    "Amo cuando me buscas con la mirada en una multitud.",
    "Porque me haces sentir comprendido sin necesidad de palabras.",
    "Amo la forma en que acaricias mi rostro sin darte cuenta.",
    "Porque cada noche contigo es única.",
    "Me encanta cuando dices mi nombre con dulzura.",
    "Porque contigo todo se siente más ligero.",
    "Amo cuando te emocionas contando una historia.",
    "Porque haces que incluso los momentos más sencillos sean mágicos.",
    "Me encanta cuando me tomas la mano bajo la mesa en secreto.",
    "Porque cada llamada tuya mejora mi día.",
    "Amo cuando me dejas notas sin esperarlo.",
    "Porque tienes una forma única de ver la vida.",
    "Me encanta cómo suenan nuestras risas juntas.",
    "Porque tu piel es increíblemente suave.",
    "Amo cuando me imitas solo para hacerme reír.",
    "Porque eres mi lugar seguro.",
    "Me encanta cuando te cubres con la manta y pareces un burrito.",
    "Porque cada beso tuyo me deja sin palabras.",
    "Amo cómo juegas con mi cabello cuando estamos acostados.",
    "Porque nunca dejas de sorprenderme.",
    "Amo cuando me das un abrazo de la nada.",
    "Porque haces que mi corazón lata más fuerte.",
    "Porque eras, eres y serás, mi gran amor 🫶🏻"
];

let indicePagina = 0;

function abrirCuaderno() {
    document.querySelector('.portada').style.display = 'none';
    mostrarPagina();
}

function mostrarPagina() {
    const container = document.getElementById('paginas-container');
    container.innerHTML = <div class="pagina">${razones[indicePagina]}</div>;
    document.querySelector('.boton-pasar').style.display = 'block';
}

function pasarPagina() {
    if (indicePagina < razones.length - 1) {
        indicePagina++;
        mostrarPagina();
    } else {
        alert("Has llegado a la última razón ❤");
    }
}