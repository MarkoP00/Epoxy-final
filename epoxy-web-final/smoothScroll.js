//Smooth scroll
const scrollElements = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry); //funkcija se non stop pokrece!
        if (entry.isIntersecting){
            entry.target.classList.add('show');

        } else{
            entry.target.classList.remove('show');
        }
    })
})

scrollElements.forEach((el)=> observer.observe(el));