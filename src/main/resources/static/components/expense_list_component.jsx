var PropTypes = React.PropTypes;

console.log('test-expense');

var ExpenseListComponent = function( props ) {
    var expenseList = props.expenses.map( function( expense, index ) {
        
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
                <SingleExpenseComponent
                key={index}
                expenseId={expense.id}
                expenseDate={fullDate}
                title={expense.title}
                subtype={expense.subtype}
                price={expense.price}
                payer={expense.payer}
                belongs={expense.belongs}
                company={expense.company}
                product={expense.product}
                comment={expense.comment}
                />
                
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
    );
};

ExpenseListComponent.propTypes = {
        expenses: React.PropTypes.array.isRequired
};

window.ExpenseListComponent = ExpenseListComponent;