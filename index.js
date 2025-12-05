alert ("Coucou Clarisse ça va ?");
document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("contactForm");
    const message = document.getElementById("message");
    form.addEventListener("submit", (e)=>{ 
        e.preventDefault();
        const nom = form.nom.value.trim();
        if (nom!==""&& ElementInternals.includes("@")){
            message.textContent="Votre demande est bien envoyée !";
            message.style.color = "Black";
        }else{ 
            message.textContent="Vos informations ne sont pas correctes"
        } message.style.display="block"
    });
});
