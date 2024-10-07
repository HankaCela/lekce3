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


//Očkování
const jmeno = prompt("Zadejte vaše jméno:");
const vek = Number(prompt("Zadejte váš věk:"));

        
document.body.innerHTML = `
            <h1>Registrace na očkování</h1>
            <p>${jmeno}, věk: ${vek}</p>`;

//Výplata jako stránka
const hodinovaSazba = Number(prompt("Zadejte vaši hodinovou sazbu (v Kč):"));
const pocetHodinDenne = Number(prompt("Zadejte počet hodin, které pracujete denně:"));
const pocetDniVmesici = Number(prompt("Zadejte počet pracovních dní v měsíci:"));
const hrubaMzda = hodinovaSazba * pocetHodinDenne * pocetDniVmesici;

document.body.innerHTML = `
    <h1>Výpočet vaší hrubé mzdy</h1>
    <p>Pokud máte hodinovou sazbu ${hodinovaSazba} Kč, pracujete ${pocetHodinDenne} hodin denně po dobu ${pocetDniVmesici} dní v měsíci, vaše hrubá mzda bude ${hrubaMzda} Kč.</p>
        `;
