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

    
      
    render: function() {
        return <ExpenseListComponent expenses={this.state.expenses} />
  }
});

window.ExpenseListContainer = ExpenseListContainer;