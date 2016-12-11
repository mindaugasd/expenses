var ExpenseListComponent = React.createClass({
    render: function() {
      var self = this;

      var expenseList = this.props.expenses.map( function( expense, index ) {
          
          var d = new Date(expense.expenseDate);
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
      
        return (
            
            <tr key={index}>
            <td>{fullDate}</td>
            <td>{expense.title}</td>
            <td>{expense.subtype}</td>
            <td>{expense.price}</td>
            <td>{expense.payer}</td>
            <td>{expense.belongs}</td>
            <td>{expense.company}</td>
            <td>{expense.product}</td>
            <td>{expense.comment}</td>
            <td><span className="glyphicon glyphicon-pencil"></span> 
            <button type="button" className="btn btn-default" onClick={self.props.onRemoveItem(expense)}>
            <span className="glyphicon glyphicon-remove"></span>
            </button></td>
            
            </tr>
        );
      });
      return (
              <div className="panel panel-default">
              <div className="panel-heading">Expenses</div>
              <table className="table table-hover">     
              <thead>  
              <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Sub-type</th>
                  <th>Paid</th>
                  <th>Who?</th>
                  <th>Whos?</th>
                  <th>Where?</th>
                  <th>What</th>
                  <th>Comment</th>
                  <th>Edit/Remove</th>
                </tr>
                  </thead>
                  <tbody>
                  {expenseList}
              
                     </tbody>
              </table>
            </div>
              )
    }
  });

ExpenseListComponent.propTypes = {
    expenses: React.PropTypes.array.isRequired,
    onRemoveItem: React.PropTypes.func.isRequired
  };

window.ExpenseListComponent = ExpenseListComponent;