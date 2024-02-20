//Nejdříve nechte uživatele zadat všechny hodnoty,
//tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.

const jmeno = String (prompt ("Zadejte jméno: "))
const vek = Number(prompt ("Zadejte věk:"))
const heslo = (prompt ("Zadejte heslo: "))

console.log (jmeno, vek, heslo)

//Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, 
//vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.

const zprava = vek >= 65 ? "věk v pořádku" : "nízký věk"
document.body.innerHTML += zprava

//Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků.
//Pokud není, vypište „slabé heslo“. 
//Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).

console.log (heslo.length)
if (vek >= 65) {
    if (heslo.length >= 8) {
        console.log ("heslo ok")
    } else {
        document.body.innerHTML += `<p> slabé heslo </p>`
        console.log ("vek ok, ale heslo kratsi 8 znaku")
    }}   
    
else {
console.log ("vek nesplnuje, netreba kontrolovat heslo")
}
