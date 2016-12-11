var AddComponent = React.createClass( {
    render: function() {
        return (
            <form>
                <h3>Add new item</h3>
                <label>Date:</label><br />
                <input className="form-control" type="date" value={this.props.expense.expenseDate} onChange={this.props.onFieldChange('expenseDate')} /><br />
                <label>Type:</label><br />
                <input className="form-control" type="text" value={this.props.expense.title} onChange={this.props.onFieldChange('title')} /><br />
                <label>Subtype:</label><br />
                    <input className="form-control" id="disabledInput" type="text" placeholder="Eat out..." disabled /><br />  
                <label>Where?</label><br />
                <input className="form-control" type="text" value={this.props.expense.company} onChange={this.props.onFieldChange('company')} /><br /> 
                <label>What?</label><br />
                <input className="form-control" type="text" value={this.props.expense.product} onChange={this.props.onFieldChange('product')} /><br />
                <label>Who payed?</label><br />

                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="E" onChange={this.props.onFieldChange('payer')} /> E
                </label>
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="M" onChange={this.props.onFieldChange('payer')}/> M
                </label><br /><br />

                <label>Who's?</label><br />
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="B" onChange={this.props.onFieldChange('belongs')} /> B
                    </label>
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="E" onChange={this.props.onFieldChange('belongs')}/> E
                    </label>
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions2" id="inlineRadio3" value="M" onChange={this.props.onFieldChange('belongs')}/> M
                    </label><br /><br />
                
                
                
                    <label>Price:</label>
                <input className="form-control" type="number" value={this.props.expense.price} onChange={this.props.onFieldChange('price')}/><br />
                <label>Comment:</label><br />
                <textarea className="form-control" rows="3" value={this.props.expense.comment} onChange={this.props.onFieldChange('comment')}></textarea><br />
                <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}  >Add</button>
            </form>
        )
    }
});


AddComponent.propTypes = {
    expense: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired
};

window.AddComponent = AddComponent;