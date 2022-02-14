export default function hamburguer(boton, panel, link) {
    const d = document;

    d.addEventListener("click", e => {

        if (e.target.matches(boton)) {
            d.querySelector(panel).classList.toggle("is-active");
        }

        if (e.target.matches(link)) {
            d.querySelector(panel).classList.remove("is-active");
        }

    })

}