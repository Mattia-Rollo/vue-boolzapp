const contacts = [
    {
    id: 1,
    name: 'Michele',
    avatar: '_1',
    visible: true,
    messages: [
            {
            date: '202/01/10 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
        ],
    },
    {
    id: 2,
    name: 'Fabio',
    avatar: '_2',
    visible: true,
    messages: [
            {
            date: '20-03-2020T16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
        ],
    },
    {
    id: 3,
    name: 'Samuele',
    avatar: '_3',
    visible: true,
    messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
        ],
    },
    {
    id: 4,
    name: 'Alessandro B.',
    avatar: '_4',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
    },
    {
    id: 5,
    name: 'Alessandro L.',
    avatar: '_5',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
        ],
    },
    {
    id: 6,
    name: 'Claudia',
    avatar: '_6',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
        ],
    },
    {
    id: 7,
    name: 'Federico',
    avatar: '_7',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
        ],
    },
    {
    id: 8,
    name: 'Davide',
    avatar: '_8',
    visible: true,
    messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
        ],
    }
]    


const frasi = [
    'ciao vi vediamo da mario',
    'che bello vederti',
    'il cane è andato all\'ospedale',
    'la luna è bella oggi, ma tu di più',
    'hai detto che oggi si giocara a Rocket League?',
    'La droga fa male',
    'Alessandro non ammazzare nessuno, ci penso io',
    'domani guardo se ho le cose che mi mancano',
    'possiamo fare la spesa insieme?',
    'allora vengo io',
    'verso l\'infinito e oltre',
    'Lightyear a rapporto Signore',
    'Il gas costa troppo, userò la corrente',
    'Non cè due senza Pelè',
    'Sembra giusto',
    'A volte penso che dovrei cambiare paese',
    'La Terra non è perfettamente rotonda , e tipo un geoide. Con il termine geoide si indica la superficie equipotenziale del campo gravitazionale terrestre, che coincide con il livello medio del mare; si ottiene considerando una superficie sempre perpendicolare a un filo a piombo, cioè alla direzione della forza di gravità.'
]

let DateTime = luxon.DateTime;
// console.log(frasi.length);

const { createApp } = Vue;

createApp({
    data() {
        return{
            frasi,
            textSearch: '',
            date: DateTime.now().toLocaleString(DateTime.DATETIME_FULL ),
            text: '',
            activeIndex: 0,
            contacts
        }
    },
    computed: {
        formatDate() {
            
        },
        filtered(){
            return this.textSearch != '' 
            ? this.contacts.filter((obj) => obj.name.toLowerCase().includes(this.textSearch.toLowerCase()))
            : this.contacts;
             
           },
        lastMessageDate() {
            const msgReceived = this.contacts[this.activeIndex].messages.filter((x) =>{ return x.status === 'received';})
            if(msgReceived.length == 0){
                return null;
            }else{
            return msgReceived[msgReceived.length-1].date;
            }
        }
    },
    methods: {
        setChat(id) {
            this.activeIndex = this.contacts.findIndex((item) => item.id === id)
        },
        
        addMessage(obj){
            if(this.text.length > 0){
            obj.messages.push({
            date: this.date,
            message: this.text,
            status: 'sent'});
            let numberRand = Math.floor(Math.random() * this.frasi.length) ;
            // console.log(numberRand);
            setTimeout(()=>{
                obj.messages.push({
                    date: this.date,
                    message: this.frasi[numberRand],
                    status: 'received'})
            },2000)   
            this.text = '';
            }
        },
        getLastMessage(obj) {
            //mi ritorna un array con solo i messaggi ricevuti
            // prendendo solo l'ultimo messaggio di ogni chat
            const msg = obj.messages.filter((message)=>{
                
            return    message.status === 'received';
                
            })
            if(msg.length == 0){
                return
            }else{
            // console.log(msg);
            // console.log(msg[msg.length-1].message);
           
            return msg[msg.length-1].message;
            }
        },
        removeMessage(i){
            // console.log(i);
            this.contacts[this.activeIndex].messages.splice(i,1);
            // this.contacts[this.activeIndex].messages.splice(i,1);
        }
    }
}).mount('#app');



const dateL = contacts[0].messages[0].date
// console.log(DateTime.now());

const newDate = new Date(contacts[0].messages[0].date);
// console.log(newDate);


const now = DateTime.fromJSDate(newDate);;
// console.log(now);