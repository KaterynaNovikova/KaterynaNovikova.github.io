var app = new Vue({
    el: "#article",
    data: {
        products: [
            { id: 1, title: "Prod 1", shortText: "Соняшник1", image: "img/45.jpg", desc: "Full desc" },
            { id: 2, title: "Prod 2", shortText: "Соняшник2", image: "img/DSC_9707.jpg", desc: "Full desc" },
            { id: 3, title: "Prod 3", shortText: "Соняшник3", image: "img/images.jpg", desc: "Full desc" },
            { id: 4, title: "Prod 4", shortText: "Соняшник4", image: "img/large_D372B0D9-3DA3-4E6C-BC3F-625962855D9D.jpg", desc: "Full desc" },
            { id: 5, title: "Prod 5", shortText: "Соняшник5", image: "img/large_ф3.jpg", desc: "Full desc" }
        ]
    },
    mounted: function() {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function(id) {
            window.localStorage.setItem('prod', id);
        }
    }
});
methods: {
  getProduct: function() {
    if (window.location.hash) {
      var id = window.location.hash.replace('#', '');
      if (this.products && this.products.length > 0) {
        for (i in this.products) {
          if (this.products[i] && this.products[i].id && id==this.products[i].id) {
            this.product = this.products[i];
          }
        }
      }
    }
  }
}
