define('app',["exports", "babel-runtime/core-js/promise", "babel-runtime/regenerator", "babel-runtime/helpers/asyncToGenerator", "babel-runtime/helpers/classCallCheck"], function (exports, _promise, _regenerator, _asyncToGenerator2, _classCallCheck2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _promise2 = _interopRequireDefault(_promise);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var App = exports.App = function () {
    function App() {
      (0, _classCallCheck3.default)(this, App);

      this.message = 'Hello World!';
    }

    App.prototype.doIt = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._doIt();

              case 2:
                result = _context.sent;

                this.message += result;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doIt() {
        return _ref.apply(this, arguments);
      }

      return doIt;
    }();

    App.prototype._doIt = function _doIt() {
      return _promise2.default.resolve("1122");
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <button type=\"button\" click.delegate=\"doIt()\">Do It</button>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map