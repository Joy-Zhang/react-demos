define(['react'], function (React) {
    var Demo = React.createClass({
        getInitialState: function () {
            var self = this;
            return {
                list: []
            }
        },
        componentDidMount: function () {
            var self = this;
            self.interval = setInterval(function () {
                var list = self.state.list;
                list.push(Math.random());
                self.setState({list: list});
            }, 1000);
        },
        componentWillUnmount: function () {
            var self = this;
            clearInterval(self.interval);
        },
        render: function () {
            var self = this;
            return (
                <ul>
                    {
                        self.state.list.map(function (item) {
                            return (
                                <li>{item}</li>
                            );
                        })
                    }
                </ul>
            );
        }
    });
    return Demo;
});