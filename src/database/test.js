const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db){
    //inserir dados na tabela
    
    await saveOrphanage(db,{
        //inserir dados na tabela
        //dado que vão para tabela

        lat: "-29.9606915",
        lng: "-51.7344509",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "995876522",
        images: [
            "https://images.unsplash.com/photo-1602426732653-e7334fa0249d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1601996113761-ba790ec7069d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        intructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas das 8h até 18h",
        open_on_weekends: "0"

    } )
    //consultar dados da tabela

const selectedOrphanages = await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanages)

//consultar pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
console.log(orphanage)
})