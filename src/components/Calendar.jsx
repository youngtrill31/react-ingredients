var React = require('react');
var DatePicker = require('react-datepicker');
var Moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');

var Calendar = React.createClass({
    displayName: 'NBA Calendar',

    getInitialState: function() {
      return {
        startDate: Moment()
      };
    },
    handleChange: function(date) {
      this.setState({
        startDate: date
      });
    },

    render: function() {
      return <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange} />;
    }

});

module.exports = Calendar;
