import React from 'react';

const Form = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;
         
        if(location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="enter city name" ref='location'/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

export default Form;