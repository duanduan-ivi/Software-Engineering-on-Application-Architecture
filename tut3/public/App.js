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

/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
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
var MAX_AVAILABLE_BOOKINGS = 10;

function TravellerRow(props) {
  {
    /*Q3. Placeholder to initialize local variable based on traveller prop.*/
  }
  return /*#__PURE__*/React.createElement("tr", {
    key: props.index
  }, /*#__PURE__*/React.createElement("td", null, props.item.id), /*#__PURE__*/React.createElement("td", null, props.item.name), /*#__PURE__*/React.createElement("td", null, props.item.phone), /*#__PURE__*/React.createElement("td", null, props.item.bookingTime));
}

function Display(props) {
  /*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Booking Time"))), /*#__PURE__*/React.createElement("tbody", null, (Array.isArray(props) ? props : []).map(function (item, index) {
    return TravellerRow({
      item: item,
      index: index
    });
  })));
}

var Add = /*#__PURE__*/function (_React$Component) {
  _inherits(Add, _React$Component);

  var _super = _createSuper(Add);

  function Add() {
    var _this;

    _classCallCheck(this, Add);

    _this = _super.call(this);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.nameInputRef = React.createRef();
    _this.phoneInputRef = React.createRef();
    return _this;
  }

  _createClass(Add, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/

      var _e$target = e.target,
          name = _e$target.travellername,
          phone = _e$target.travellerphone;

      if (!name.value) {
        alert("Please enter a name");
        return;
      }

      if (!phone.value) {
        alert("Please enter a phone number");
        return;
      }

      var bookings = 0;

      try {
        var value = localStorage.getItem("travellers");

        if (value) {
          bookings = JSON.parse(value).length;
        }
      } catch (err) {
        console.log(err);
      }

      if (bookings === MAX_AVAILABLE_BOOKINGS) {
        alert("No bookings created yet");
        return;
      }

      this.props.bookTraveller({
        name: name.value,
        phone: phone.value
      });
      this.nameInputRef.current.value = "";
      this.phoneInputRef.current.value = "";
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
        placeholder: "Name",
        ref: this.nameInputRef
      }), /*#__PURE__*/React.createElement("input", {
        style: {
          marginLeft: "10px"
        },
        type: "text",
        name: "travellerphone",
        placeholder: "Phone Number",
        ref: this.phoneInputRef
      }), /*#__PURE__*/React.createElement("button", {
        style: {
          marginLeft: "10px"
        }
      }, "Add"));
    }
  }]);

  return Add;
}(React.Component);

var Delete = /*#__PURE__*/function (_React$Component2) {
  _inherits(Delete, _React$Component2);

  var _super2 = _createSuper(Delete);

  function Delete(props) {
    var _this2;

    _classCallCheck(this, Delete);

    _this2 = _super2.call(this, props);
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    _this2.inputRef = React.createRef();
    _this2.deleteTraveller = props.onDelete;
    return _this2;
  }

  _createClass(Delete, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/

      var targetName = e.target.travellername.value;
      var targetTraveller = this.props.travellers.find(function (t) {
        return t.name === targetName;
      });

      if (targetTraveller) {
        this.deleteTraveller(targetTraveller);
        this.inputRef.current.value = "";
      } else {
        alert("Nobody");
      }
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
        placeholder: "Name",
        ref: this.inputRef
      }), /*#__PURE__*/React.createElement("button", {
        style: {
          marginLeft: "10px"
        }
      }, "Delete"));
    }
  }]);

  return Delete;
}(React.Component);

var Homepage = /*#__PURE__*/function (_React$Component3) {
  _inherits(Homepage, _React$Component3);

  var _super3 = _createSuper(Homepage);

  function Homepage(props) {
    _classCallCheck(this, Homepage);

    return _super3.call(this, props);
  }

  _createClass(Homepage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Book ", this.props.travellers.length, " seats"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex"
        }
      }, Array.from({
        length: MAX_AVAILABLE_BOOKINGS - this.props.travellers.length
      }).map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          style: {
            width: "42px",
            height: "42px",
            border: "1px solid #000",
            marginRight: "10px",
            backgroundColor: "#fff",
            color: "#000",
            lineHeight: "42px",
            textAlign: "center"
          }
        }, index + 1);
      }), this.props.travellers.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          style: {
            width: "42px",
            height: "42px",
            border: "1px solid #000",
            marginRight: "10px",
            backgroundColor: "#000",
            color: "#fff",
            lineHeight: "42px",
            textAlign: "center"
          }
        }, item.name);
      })));
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
      /*Q2. Function to set the value of component selector variable based on user's button click.*/
      this.setState({
        selector: +value
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

      var data = initialTravellers;

      try {
        var value = localStorage.getItem("travellers");

        if (value) {
          data = JSON.parse(value);
        } else {
          localStorage.setItem("travellers", JSON.stringify(data));
        }
      } catch (err) {
        console.log(err);
      }

      setTimeout(function () {
        _this4.setState({
          travellers: data
        });
      }, 500);
    }
  }, {
    key: "bookTraveller",
    value: function bookTraveller(passenger) {
      /*Q4. Write code to add a passenger to the traveller state variable.*/
      var data = null;
      var value = {
        name: passenger.name,
        phone: passenger.phone,
        bookingTime: new Date()
      };

      try {
        var val = localStorage.getItem("travellers");

        if (val) {
          data = JSON.parse(val);
          value.id = data.length + 1;
          data.push(value);
          localStorage.setItem("travellers", JSON.stringify(data));
        } else {
          var _data = initialTravellers;
          value.id = _data.length + 1;

          _data.push(value);

          localStorage.setItem("travellers", JSON.stringify(_data));
        }
      } catch (err) {
        console.log(err);
      }

      this.loadData();
    }
  }, {
    key: "deleteTraveller",
    value: function deleteTraveller(passenger) {
      /*Q5. Write code to delete a passenger from the traveller state variable.*/
      var data = null;

      try {
        var value = localStorage.getItem("travellers");

        if (value) {
          data = JSON.parse(value);
          console.log(value, passenger);
          var index = data.findIndex(function (item) {
            return item.id === passenger.id;
          });
          data.splice(index, 1);
          localStorage.setItem("travellers", JSON.stringify(data));
        } else {
          localStorage.setItem("travellers", JSON.stringify(initialTravellers));
        }
      } catch (err) {
        console.log(err);
      }

      this.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ticket To Ride"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
        style: {
          display: "flex",
          whiteSpace: "nowrap"
        },
        onClick: function onClick(e) {
          if (e.target.tagName === "BUTTON") {
            _this5.setSelector(e.target.dataset.selector);
          }
        }
      }, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("button", {
        "data-selector": "1"
      }, "Home")), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("button", {
        "data-selector": "2"
      }, "Create Booking")), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("button", {
        "data-selector": "3"
      }, "Cancel Booking")), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("button", {
        "data-selector": "4"
      }, "Display Booking List")))), /*#__PURE__*/React.createElement("div", null, this.state.selector === 1 ? /*#__PURE__*/React.createElement(Homepage, {
        travellers: this.state.travellers
      }) : this.state.selector === 2 ? /*#__PURE__*/React.createElement(Add, {
        bookTraveller: this.bookTraveller
      }) : this.state.selector === 3 ? /*#__PURE__*/React.createElement(Delete, {
        onDelete: this.deleteTraveller,
        travellers: this.state.travellers
      }) : Display(this.state.travellers)));
    }
  }]);

  return TicketToRide;
}(React.Component);

var element = /*#__PURE__*/React.createElement(TicketToRide, null);
ReactDOM.render(element, document.getElementById('contents'));