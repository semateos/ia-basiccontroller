(function (Controller, _) {
    "use strict";

    Controller.BasicController = function (parameters) {
        var self = this,
            paramKeys = _.keys(parameters);

        this.matchParams = function (match) {
            if (!match) {
                return false;
            }
            return _.every(paramKeys, function (c) {
                return parameters[c] === match.getParam(c);
            });
        };

        this.canDispatch = function (match) {
            return self.matchParams(match);
        };

        this.destroy = function () {};
    };
}(Controller, _));
