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
                  <p>Food: $190.55</p>
                  <p>Transport: $61.30</p>
                  <p>Alcohol: $35.89</p>
                  <p>Taxes: $100.40</p>
                  
                  
                </div>
              </div>
        )
    }
});

window.StatsComponent = StatsComponent;