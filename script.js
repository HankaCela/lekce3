/*
const hodinovka = 300
const pocetHodin = promt("Zadej pocet hodin zaměstnance", "160")
const premie = promt("Zadej mimoradnou odmenu v Kc")
const plat = hodinovka * pocetHodin

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.<p>"
*/ 

const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000" -> 10000
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"
