/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', phone: 88885555,
    bookingTime: new Date(),
  },
  {
    id: 2, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
  },
];

const MAX_AVAILABLE_BOOKINGS = 10;

function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  return (
    <tr key={props.index}>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}

      <td>{props.item.id}</td>
      <td>{props.item.name}</td>
      <td>{props.item.phone}</td>
      <td>{props.item.bookingTime}</td>
    </tr>
  );
}

function Display(props) {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  return (
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        { 
          (Array.isArray(props) ? props : []).map((item, index) => {
            return TravellerRow({item, index})
          })

        }
      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInputRef = React.createRef();
    this.phoneInputRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    let {
      travellername: name,
      travellerphone: phone
    } = e.target;

    if (!name.value) {
      alert("Please enter a name");
      return;
    }

    if(!phone.value) {
      alert("Please enter a phone number")
      return;
    }

    let bookings = 0;
    try {
      let value = localStorage.getItem("travellers")
      if(value) {
        bookings = JSON.parse(value).length
      }
    } catch (err) {
      console.log(err)
    }

    if (bookings === MAX_AVAILABLE_BOOKINGS) {
      alert("No bookings created yet")
      return;
    }

    this.props.bookTraveller({
      name: name.value,
      phone: phone.value,
    });

    this.nameInputRef.current.value = "";
    this.phoneInputRef.current.value = "";
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" ref={this.nameInputRef} />
        <input style={{ marginLeft: "10px" }} type="text" name="travellerphone" placeholder="Phone Number" ref={this.phoneInputRef} />
        <button style={{ marginLeft: "10px" }}>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
    this.deleteTraveller = props.onDelete;
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    const targetName = e.target.travellername.value;
    const targetTraveller = this.props.travellers.find((t) => t.name === targetName);
    if (targetTraveller) {
      this.deleteTraveller(targetTraveller);
      this.inputRef.current.value = "";
    } else {
      alert("Nobody")
    }
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	      <input type="text" name="travellername" placeholder="Name" ref={this.inputRef}/>
        <button style={{ marginLeft: "10px" }}>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor(props) {
    super(props);
	}
	render(){
    return (
    <div>
      {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
      <h2>Book {this.props.travellers.length} seats</h2>
      <div style={{display: "flex"}}>
        {
          (Array.from({ length: MAX_AVAILABLE_BOOKINGS - this.props.travellers.length })).map((item, index) => {
            return (
              <div 
              key={index} 
              style={{width: "42px", height: "42px", border: "1px solid #000", marginRight: "10px", backgroundColor: "#fff", color: "#000", lineHeight: "42px", textAlign: "center"}}>
                { index + 1 }
              </div>
            )
          })
        }

        {
          this.props.travellers.map((item, index) => {
            return (
              <div 
              key={index} 
              style={{width: "42px", height: "42px", border: "1px solid #000", marginRight: "10px", backgroundColor: "#000", color: "#fff", lineHeight: "42px", textAlign: "center"}}>
                {item.name}
              </div>
            )
          })
        }

      </div>
    </div>);
	}
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({selector: +value})
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let data = initialTravellers
    try {
      let value = localStorage.getItem("travellers")
      if(value) {
        data = JSON.parse(value)
      } else {
        localStorage.setItem("travellers", JSON.stringify(data))
      }
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      this.setState({ travellers:  data});
    }, 500);
  }

  bookTraveller(passenger) { 
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
      let data = null
      let value = {
        name: passenger.name, 
        phone: passenger.phone,
        bookingTime: new Date(),
        
      }
      try {
        let val = localStorage.getItem("travellers")
        if(val) {
          data = JSON.parse(val)
          value.id = data.length + 1
          data.push(value)
          localStorage.setItem("travellers", JSON.stringify(data))
        } else {
          let data = initialTravellers
          value.id = data.length + 1
          data.push(value)
          localStorage.setItem("travellers", JSON.stringify(data))
        }
      } catch (err) {
        console.log(err)
      }
      this.loadData();
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    let data = null
    try {
      let value = localStorage.getItem("travellers")
      if(value) {
        data = JSON.parse(value)
        console.log(value, passenger)
        let index = data.findIndex(item => item.id === passenger.id)
        data.splice(index, 1)
        localStorage.setItem("travellers", JSON.stringify(data))
      } else {
        localStorage.setItem("travellers", JSON.stringify(initialTravellers))
      }
    } catch (err) {
      console.log(err)
    }
    this.loadData();
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<div>
    {/*  */}
	    {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
      <ul 
        style={{display: "flex", whiteSpace: "nowrap"}} 
        onClick={(e) => {
          if(e.target.tagName === "BUTTON") {
            this.setSelector(e.target.dataset.selector);
          }
        }}>
        <ol>
          <button data-selector="1">Home</button>
        </ol>
        <ol>
          <button data-selector="2">Create Booking</button>
        </ol>
        <ol>
          <button data-selector="3">Cancel Booking</button>
        </ol>
        <ol>
          <button data-selector="4">Display Booking List</button>
        </ol>
      </ul>
	</div>
	<div>
		{/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		{/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
		{/*Q3. Code to call component that Displays Travellers.*/}
		
		{/*Q4. Code to call the component that adds a traveller.*/}
		{/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}

    { 
      this.state.selector === 1 
       ? <Homepage travellers={this.state.travellers}/> 
       : this.state.selector === 2
        ? <Add bookTraveller={this.bookTraveller}/>
        : this.state.selector === 3
          ? <Delete 
          onDelete={this.deleteTraveller}
          travellers={this.state.travellers}/>
          : Display(this.state.travellers)
    }
    

	</div>
      </div>
    );
  }
}


const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
