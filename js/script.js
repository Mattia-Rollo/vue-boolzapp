const contacts = [
    {
    id: 1,
    name: 'Michele',
    avatar: '_1',
    visible: true,
    messages: [
            {
            date: '10/01/2022 15:30:55',
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
            message: 'Ciao Claudia, hai novit???',
            status: 'sent',
            get provaUno () {
                return correctDate(this.date);
            }
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
            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
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
            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
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
    'Alcuni gatti non amano la solitudine e mostrano segni di ansia da separazione quando allontanati da qualcuno con il quale hanno un forte legame. Se il tuo gatto ti segue quando ti prepari ad uscire, piange o se la prende con gli oggetti dopo che lo hai lasciato da solo a casa, oppure se al tuo ritorno lo trovi sovraeccitato, allora pu?? voler dire che prova tristezza quando lo lasci.',
    'I gatti sono pulitissimi. Le operazioni di auto-pulizia li aiutano a mantenere pelle e pelo in buona salute, a regolare la temperatura corporea, aumentare la circolazione sanguigna oltre, naturalmente, a rimuovere sporco e peli morti.',
    'I gatti hanno una piccola ghiandola posta sotto al palato, subito dietro gli incisivi superiori, in prossimit?? del naso. Quando vogliono annusare per bene qualcosa, aprono la bocca e sembrano sorridere.',
    'la luna ?? bella oggi, ma tu di pi??',
    'All???et?? di 1 anno, un gatto raggiunge la maturit?? equivalente di un teenager di 15-17 anni. I gatti invecchiano di almeno 5 o 6 anni ogni 365 giorni. Ci?? significa che esemplari di 11-14 anni sono gi?? anziani, equiparabili a persone di 60-72 anni.',
    'Il gatto domestico ?? un piccolo mammifero carnivoro appartenente alla famiglia dei felidi. Dall???indole essenzialmente territoriale e crepuscolare, il gatto ?? un predatore di piccoli animali, specialmente roditori. Per comunicare utilizza vari vocalizzi, le fusa, le posizioni del corpo e i feromoni',
    'Alessandro non ammazzare nessuno, ci penso io',
    'Sapevi che i gatti possono ruotare le orecchie di 180 gradi per localizzare al meglio i suoni? E non solo, perch?? la forma conica delle loro orecchie consente loro addirittura di amplificare i rumori. Ci?? spiega perch?? il gatto medio sente 5 volte meglio di un essere umano adulto.',
    'Diversamente da quanto si pensi, quando un gatto miagola lo fa per comunicare con gli umani, non con i suoi simili. Se il tuo gatto miagola con te, lo fa probabilmente per attirare la tua attenzione. E per ogni essere umano ha un tipo di miagolio diverso!',
    'La Terra non ?? perfettamente rotonda , e tipo un geoide. Con il termine geoide si indica la superficie equipotenziale del campo gravitazionale terrestre, che coincide con il livello medio del mare; si ottiene considerando una superficie sempre perpendicolare a un filo a piombo, cio?? alla direzione della forza di gravit??.',
    'Il primo gatto di cui si conosca l???identit?? ha origini antichissime e pi?? che un felino ?? una divinit??: si tratta della dea Bastet, venerata dagli antichi egizi gi?? a partire dalla seconda dinastia (2890 a.C.) e poi diventata Ailuros nella mitologia greca.',
    'Pare che il gatto della regina Vittoria venisse trattato alla stregua dei reali inglesi e, come tale, accompagnava sempre la regine Vittoria, anche nelle sue cerimonie pi?? importanti.'
]

var DateTime = luxon.DateTime;
// console.log(frasi.length);
const dt = DateTime;

const { createApp } = Vue;
import Modal from './Modal.js'

createApp({
    components: {
        Modal
      },
    data() {
        return{
            showChat: false,
            // name: 'dropdown',
            indexMsgActive: null,
            show: false,
            showModal: true,
            light:true,
            dark: false,
            frasi,
            textSearch: '',
            idActive: 1,
            date: dt.now().toLocaleString({hour: '2-digit',minute:'numeric',second:'numeric' }),
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
        

    },
    methods: {
            onBeforeEnter(el) {
            el.style.opacity = 0
            el.style.height = 0
          },
          onEnter(el, done) {
            gsap.to(el, {
              opacity: 1,
              height: 80,
              delay: el.dataset.index * 0.10,
              onComplete: done
            })
          },
          onLeave(el, done) {
            gsap.to(el, {
              opacity: 0,
              height: 0,
              delay: el.dataset.index * 0.10,
              onComplete: done
            })
          },
        setChat(id) {
            this.activeIndex = this.contacts.findIndex((item) => item.id === id)
            this.idActive = id;
            this.showChat = !this.showChat
        },
        
        addMessage(obj){
            if(this.text.length > 0){
            obj.messages.push({
            date: this.date,
            message: this.text,
            status: 'sent'});
            this.date = dt.now().toLocaleString({hour: '2-digit',minute:'numeric',second:'numeric' });
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
        lastMessageDate(obj) {
            const msgReceived = obj.messages.filter((x) =>{ return x.status === 'received';})
            if(msgReceived.length == 0){
                return null;
            }else{
            return msgReceived[msgReceived.length-1].date;
            }
        },
        removeMessage(i){
            // console.log(i);
            this.contacts[this.activeIndex].messages.splice(i,1);
            this.show = !this.show
            // this.contacts[this.activeIndex].messages.splice(i,1);
        },
        showMenu(i){
            // this.indexMsgActive = 
            if(this.show == true && this.indexMsgActive == i){
                this.show = false;
                this.indexMsgActive = null;
            }else{
            this.show = true;
            this.indexMsgActive = i;
            // console.log(i);
            }
        },
        showReset() {
            this.show = false, 
            this.indexMsgActive = null
        },
        deleteChat(i){
            this.contacts.splice(i,1);
            this.activeIndex = 0;
            this.idActive = this.contacts[0].id;
        },
        deleteAllMsg(){
            this.contacts[this.activeIndex].messages = [];
        },
        

            handleBlur(e) {
        
             console.log('blur', e.target.placeholder)
        
            },
            closeDropdown(){
                this.show = !this.show
                this.indexMsgActive = null

            }
        
          
        // close (e) {
        //     if (!this.$refs.menu.contains(e.target)) {
        //       this.show = false;
        //     }
        //     console.log(this.$refs.menu);
        //   }



    },
    mounted() {
        // console.log(this.$refs.menu);
        // this.$refs.menu[0].addEventListener('click', this.close)
        // console.log(this.$refs.menu);
        // this.$refs.spunta[0].addEventListener('click', (event) => {
        //     this.$refs.spunta[0].classList.toggle('show');
        //   });
        //   console.log(this.$refs.spunta[0]);
        //   this.$refs.spunta[0].addEventListener('blur', (event) => {
        //     this.$refs.spunta[0].classList.remove('show');
        //   });
    },
    beforeDestroy () {
        // document.removeEventListener('click',this.close)
    }

}).mount('#app');


// console.log(contacts[5].messages[0].provaUno);
// console.log(correctDate(contacts[0].messages[0].date));



const newDate = new Date(correctDate(contacts[0].messages[0].date));
// console.log(newDate);




const FormatedDate = DateTime.fromJSDate(newDate);
// console.log(FormatedDate.toLocaleString({year:'numeric', month: 'long', day: 'numeric', hour: '2-digit',minute:'numeric' }));
