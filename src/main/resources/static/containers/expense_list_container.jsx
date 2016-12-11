console.log('testlistconainer');
var ExpenseListContainer = React.createClass({
    getInitialState: function() {
        return {
          expenses: [] 
          
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get('http://localhost:8080/api')
        .then(function (response) {
            self.setState({ expenses: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    },

    handleRemoveItem: function(e) {
        var self = this;
        axios.delete('/api/'+ e.id).then(function () {
            console.log('item deleted');

          });
    },
    
      
    render: function() {
        return <ExpenseListComponent expenses={this.state.expenses} onRemoveItem={this.handleRemoveItem}/>
  }
});

window.ExpenseListContainer = ExpenseListContainer;