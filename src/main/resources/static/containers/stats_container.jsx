var StatsContainer = React.createClass({

    
    getInitialState: function() {
        return {
          sum: 0 
          
        };
    },

    componentWillMount: function() {
        var self = this;
        axios.get('http://localhost:8080/sum')
        .then(function (response) {
            self.setState({ sum: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    
    
    render: function() {
        return <StatsComponent totalAmount={this.state.sum}/>
  }
    
});

window.StatsContainer = StatsContainer;