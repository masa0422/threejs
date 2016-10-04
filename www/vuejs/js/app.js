(function() {

  Vue.component('data-table', {
    template: '#data-template',
    data: function () {
      return {
        columns: ['title', 'description'],
        data: [
          {'title': 'title1', 'description': 'description1'},
          {'title': 'title2', 'description': 'description2'},
          {'title': 'title3', 'description': 'description3'},
          {'title': 'title4', 'description': 'description4'}
        ]
      }
    }
  })

  // var advent = new Vue({
  //   el: "#vueadvent",
  //   data: {
  //     columns: ['title', 'description'],
  //     data: [
  //       {'title': 'title1', 'description': 'description1'},
  //       {'title': 'title2', 'description': 'description2'},
  //       {'title': 'title3', 'description': 'description3'},
  //       {'title': 'title4', 'description': 'description4'}
  //     ]
  //   },
  //   methods : {
  //     reflesh: function() {
  //       var self = this;
  //       alert('a');
  //       // $.ajax({
  //       //   url: '/todo',
  //       // }).done(function(data){
  //       //   self.gridData = data;
  //       // }).error(function(data) {
  //       //   console.log(data);
  //       // });
  //     }
  //   }
  // })
  // advent.reflesh();



  new Vue({
    el: '#example-2',
    methods: {
      say: function (msg) {
        alert(msg)
      }
    }
  })
  // return advent;
// }).call(this);
})();
