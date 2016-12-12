var ExpenseListContainer = React.createClass({
    getInitialState: function() {
        return {
          expenses: [] 
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get('/api')
        .then(function (response) {
            self.setState({ 
                expenses: response.data 
            });
        });

    },

    handleRemoveItem: function(expense) {
          var self = this;
          return function() {
            axios.delete('/api/'+ expense.id).then(function(response) {
                console.log('item deleted');
                axios.get('/api')
                .then(function (response) {
                    self.setState({ 
                        expenses: response.data 
                    });
                });
            });
          };
        },
      
    render: function() {
        return <ExpenseListComponent expenses={this.state.expenses} onRemoveItem={this.handleRemoveItem}/>
  }
});

window.ExpenseListContainer = ExpenseListContainer;