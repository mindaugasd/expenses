console.log('testsingle');
var SingleExpenseComponent = React.createClass({
    
    render: function() {
        return (
                <tr>
                <td>{this.props.expenseDate}</td>
                <td>{this.props.title}</td>
                <td>{this.props.subtype}</td>
                <td>{this.props.price}</td>
                <td>{this.props.payer}</td>
                <td>{this.props.belongs}</td>
                <td>{this.props.company}</td>
                <td>{this.props.product}</td>
                <td>{this.props.comment}</td>
                <td><span className="glyphicon glyphicon-pencil"></span> 
                <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-remove"></span>
                </button></td>
                
                </tr>
        );
    }
});



window.SingleExpenseComponent = SingleExpenseComponent;