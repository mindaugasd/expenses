var NavigationContainer = React.createClass({
    
    handleLogout: function(e) {
        var self = this;
        axios.get('/login?logout').then(function () {
            console.log('logged out');

          });
    },
      
    render: function() {
        return (
            <NavigationComponent
                onLogoutClick={this.handleLogout}
                />
        );
    }
    
    
    
    
    
});

window.NavigationContainer = NavigationContainer;