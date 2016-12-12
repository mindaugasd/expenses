var StatsComponent = React.createClass({
    render: function() {
        return (
                <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Statistics</h3>
                </div>
                <div className="panel-body">
                  <p>Month: November</p>
                  <p>Sum: ${this.props.totalAmount}</p>
                  <p>Food: $...</p>
                  <p>Transport: $...</p>
                  <p>Alcohol: $...</p>
                  <p>Taxes: $...</p>  
                </div>
              </div>
        )
    }
});

window.StatsComponent = StatsComponent;