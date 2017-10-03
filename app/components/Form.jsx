var React = require('react');

var Form = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <input type="text" placeholder="enter city name"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = Form;