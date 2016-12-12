var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        var fullDate = year + '-' + month + '-' + date;


var AddContainer = React.createClass( {
    getInitialState: function() {
        return {
            expense: {
                expenseDate: fullDate,
                title: '',
                price: '0.00',
                payer: '',
                belongs: '',
                company: '',
                product: '',
                comment: ''
            }
        }
    },
    
    handleSaveClick: function(e) {
        e.preventDefault();
        var self = this;
        axios.post('/api', this.state.expense).then(function () {
            console.log('item added');
            self.setState({
                   expense: {
                       expenseDate: fullDate,
                       title: '',
                       price: '0.00',
                       payer: '',
                       belongs: '',
                       company: '',
                       product: '',
                       comment: ''
                   }
            });
          });
      },
    
    handleFieldChange: function(fieldName) {
        var self = this;
        return function(e) {
          var expense = self.state.expense;
          expense[fieldName] = e.target.value;
          self.setState({ expense: expense });
        };
    },
      
    render: function() {
        return (
            <AddComponent
                expense={this.state.expense}
                onSaveClick={this.handleSaveClick}
                onFieldChange={this.handleFieldChange}
                />
        );
    }

});

window.AddContainer = AddContainer;