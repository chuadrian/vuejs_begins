const app = Vue.createApp({
    data(){
     return{
        url : 'https://chruthblog.vercel.app/',
        showBooks : true,
        books : [
            {title: 'A Million To One', author: 'Tony Faggioli', img: 'images/download.jfif', isFav: true},
            {title: 'New World', author: 'Author Name', img: 'images/download (2).jfif', isFav: false},
            {title: 'Really Good Actually', author: 'Monica Heisy', img: 'images/download (1).jfif', isFav: true}
        ]
         
     }
    },
    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
 })
 
 app.mount('#app')