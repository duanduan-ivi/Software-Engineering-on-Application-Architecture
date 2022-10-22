"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var initialTravellers = [{
  id: 1,
  name: 'Jack',
  phone: 88885555,
  bookingTime: new Date()
}, {
  id: 2,
  name: 'Rose',
  phone: 88884444,
  bookingTime: new Date()
}];

function TravellerRow(props) {
  var traveller = props.traveller;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, traveller.id), /*#__PURE__*/React.createElement("td", null, traveller.name), /*#__PURE__*/React.createElement("td", null, traveller.phone), /*#__PURE__*/React.createElement("td", null, traveller.bookingTime.toDateString()));
}

function Display(props) {
  var travellerRows = props.travellers.map(function (i) {
    return /*#__PURE__*/React.createElement(TravellerRow, {
      key: i.id,
      traveller: i
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Booking Time"))), /*#__PURE__*/React.createElement("tbody", null, travellerRows));
}

var Add = /*#__PURE__*/function (_React$Component) {
  _inherits(Add, _React$Component);

  var _super = _createSuper(Add);

  function Add() {
    var _this;

    _classCallCheck(this, Add);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Add, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.addTraveller;
      var passenger = {
        name: form.travellername.value,
        phone: form.travellerphone.value
      };
      this.props.bookTraveller(passenger);
      form.travellername.value = "";
      form.travellerphone.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "addTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "travellername",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "travellerphone",
        placeholder: "Phone Number"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return Add;
}(React.Component);

var Delete = /*#__PURE__*/function (_React$Component2) {
  _inherits(Delete, _React$Component2);

  var _super2 = _createSuper(Delete);

  function Delete() {
    var _this2;

    _classCallCheck(this, Delete);

    _this2 = _super2.call(this);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Delete, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.deleteTraveller;
      var passenger = {
        name: form.travellername.value
      };
      this.props.deleteTraveller(passenger);
      form.travellername.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "deleteTraveller",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "travellername",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("button", null, "Delete"));
    }
  }]);

  return Delete;
}(React.Component);

var Homepage = /*#__PURE__*/function (_React$Component3) {
  _inherits(Homepage, _React$Component3);

  var _super3 = _createSuper(Homepage);

  function Homepage() {
    _classCallCheck(this, Homepage);

    return _super3.call(this);
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Placeholder for Homepage"));
    }
  }]);

  return Homepage;
}(React.Component);

var TicketToRide = /*#__PURE__*/function (_React$Component4) {
  _inherits(TicketToRide, _React$Component4);

  var _super4 = _createSuper(TicketToRide);

  function TicketToRide() {
    var _this3;

    _classCallCheck(this, TicketToRide);

    _this3 = _super4.call(this);
    _this3.state = {
      travellers: [],
      selector: 1
    };
    _this3.bookTraveller = _this3.bookTraveller.bind(_assertThisInitialized(_this3));
    _this3.deleteTraveller = _this3.deleteTraveller.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(TicketToRide, [{
    key: "setSelector",
    value: function setSelector(value) {
      this.setState({
        selector: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          travellers: initialTravellers
        });
      }, 500);
    }
  }, {
    key: "bookTraveller",
    value: function bookTraveller(passenger) {
      passenger.id = this.state.travellers.length + 1;
      passenger.bookingTime = new Date();
      var newTravellersList = this.state.travellers.slice();
      newTravellersList.push(passenger);
      this.setState({
        travellers: newTravellersList
      });
    }
  }, {
    key: "deleteTraveller",
    value: function deleteTraveller(passenger) {
      var newTravellersList = this.state.travellers.slice();
      var target = this.state.travellers.find(function (x) {
        return x.name === passenger.name;
      });
      var index = newTravellersList.indexOf(target);

      if (index > -1) {
        newTravellersList.splice(index, 1);
      }

      this.setState({
        travellers: newTravellersList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ticket To Ride"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(1);
        }
      }, "Homepage"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(2);
        }
      }, "Display Travellers"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(3);
        }
      }, "Add Traveller"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this5.setSelector(4);
        }
      }, "Delete Traveller")), this.state.selector === 1 ? /*#__PURE__*/React.createElement(Homepage, null) : /*#__PURE__*/React.createElement("hr", null), this.state.selector === 2 ? /*#__PURE__*/React.createElement(Display, {
        travellers: this.state.travellers
      }) : /*#__PURE__*/React.createElement("hr", null), this.state.selector === 3 ? /*#__PURE__*/React.createElement(Add, {
        bookTraveller: this.bookTraveller
      }) : /*#__PURE__*/React.createElement("hr", null), this.state.selector === 4 ? /*#__PURE__*/React.createElement(Delete, {
        deleteTraveller: this.deleteTraveller
      }) : /*#__PURE__*/React.createElement("hr", null));
    }
  }]);

  return TicketToRide;
}(React.Component);

var element = /*#__PURE__*/React.createElement(TicketToRide, null);
ReactDOM.render(element, document.getElementById('contents'));