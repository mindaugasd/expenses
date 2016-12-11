var NavigationContainer = React.createClass({
    
    handleLogout: function(e) {
        axios.get('/logout').then(function () {
            console.log('logged out');
          });
        return function() {
            this.props.history.push('/');
        }
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