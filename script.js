/*
const hodinovka = 300
const pocetHodin = promt("Zadej pocet hodin zaměstnance", "160")
const premie = promt("Zadej mimoradnou odmenu v Kc")
const plat = hodinovka * pocetHodin

document.body.innerHTML += "<p>Pepa Novak si vydelal: " + plat + " Kc.<p>"


const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance"))
const premie = Number(prompt("Zadej mimoradnou odmenu v Kc")) // "10000" -> 10000
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML += "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"


//Očkování
const jmeno = prompt("Zadejte vaše jméno:");
const vek = Number(prompt("Zadejte váš věk:"));

        
document.body.innerHTML += `<h1>Registrace na očkování</h1>
                            <p>${jmeno}, věk: ${vek}</p>`;

//Výplata jako stránka
const hodinovaSazba = Number(prompt("Zadejte vaši hodinovou sazbu (v Kč):"));
const pocetHodinDenne = Number(prompt("Zadejte počet hodin, které pracujete denně:"));
const pocetDniVmesici = Number(prompt("Zadejte počet pracovních dní v měsíci:"));
const hrubaMzda = hodinovaSazba * pocetHodinDenne * pocetDniVmesici;

document.body.innerHTML += `<h1>Výpočet vaší hrubé mzdy</h1>
                            <p>Pokud máte hodinovou sazbu ${hodinovaSazba} Kč, pracujete ${pocetHodinDenne} hodin denně po dobu ${pocetDniVmesici} dní v měsíci, vaše hrubá mzda bude ${hrubaMzda} Kč.</p>`;



const nazev = "Kniha 1"
const autor = "Hanka Cela"
const cena = 450
const naSklade = true

const kniha = {
    nazev: "Kniha 1",
    autor: "Hanka Cela",
    cena: 450,
    naSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Hanka Cela",
    cena: 450,
    naSklade: true,
}

kniha.autor = "Petra"
kniha.jazyk = "cestina"

document.body.innerHTML += "<p>Kniha: " + nazev + ",autor: " + autor + "<p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ",autor: " + kniha.autor + "<p>"
*/ 

// Objekt apartment
    const apartment = {
          type: 'rent',
          disposition: '3+1',
          area: {
            floorage: 100,
            balcony: 2,
            units: 'sqm',
          },
          city: 'Prague',
          district: 'Old Town',
          price: {
            rent: 28000,
            fees: {
              water: 1000,
              energy: 2500,
              services: 560,
            },
            currency: 'czk',
          },
          ownership: 'personal',
          condition: 'renovated',
          status: 'free',
          floor: 3,
        };

        const dispoziceBytu = apartment.disposition;
        const cistyNajem = apartment.price.rent;
        const vymeryBytu = apartment.area;
        const mesto = apartment.city;
        const mestskaCast = apartment.district;
        apartment.status = 'taken';
        document.body.innerHTML += `
            <h1>Informace o bytu</h1>
            <p><strong>Dispozice bytu:</strong> ${dispoziceBytu}</p>
            <p><strong>Čistý nájem (bez poplatků):</strong> ${cistyNajem} ${apartment.price.currency}</p>
            <p><strong>Výměry bytu:</strong> 
                <pre>${JSON.stringify(vymeryBytu, null, 2)}</pre>
            </p>
            <p><strong>Město:</strong> ${mesto}, <strong>Městská část:</strong> ${mestskaCast}</p>
            <p><strong>Stav inzerátu:</strong> ${apartment.status}</p>`;


//Knihovna            
// Objekt pro první knihu
                  const book1 = {
                        title: "Hobit",
                        author: "J.R.R. Tolkien",
                        pages: 310,
                        genre: "Fantasy",
                        publishedYear: 1937,
                        publisher: {
                            name: "Allen & Unwin",
                            location: "Londýn",
                        },
                        available: true
                    };
            
                    // Objekt pro druhou knihu
                    const book2 = {
                        title: "1984",
                        author: "George Orwell",
                        pages: 328,
                        genre: "Dystopie",
                        publishedYear: 1949,
                        publisher: {
                            name: "Secker & Warburg",
                            location: "Londýn",
                        },
                        available: false
                    };
            
                    document.body.innerHTML += `
                        <h1>Knihovna</h1>
                        <h2>Kniha 1:</h2>
                        <pre>${JSON.stringify(book1, null, 2)}</pre>
                        <h2>Kniha 2:</h2>
                        <pre>${JSON.stringify(book2, null, 2)}</pre>`;



//Očkování – objekty
                        
const name = prompt("Zadejte vaše jméno:");
const age = Number(prompt("Zadejte váš věk:"));
const language = window.navigator.language;
const person = {
            name: name,
            age: age,
            language: language
            };
                        
document.body.innerHTML += `<h1>Registrace na očkování</h1>
                            <p><strong>Jméno:</strong> ${person.name}</p>
                            <p><strong>Věk:</strong> ${person.age}</p>
                            <p><strong>Preferovaný jazyk komunikace:</strong> ${person.language}</p>`;