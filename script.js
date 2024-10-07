const hodinovka = 300
const pocetHodin = promt("Zadej pocet hodin zaměstnance", "160")
const premie = promt("Zadej mimoradnou odmenu v Kc")
const plat = hodinovka * pocetHodin

document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.<p>"
