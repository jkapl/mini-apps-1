
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       step: 'F'
      }

    this.formOne = this.formOne.bind(this);
    this.formTwo = this.formTwo.bind(this);
    this.formThree = this.formThree.bind(this);
  }
  
  home () {
    this.setState({step:'F'})
  }

  formOne () {
    this.setState({step:'F1'})
  }

  formTwo () {
    this.setState({step:'F2'})
  }

  formThree () {
    this.setState({step:'F3'})
  }

  render() {
    switch (this.state.step) {
      case 'F' :
        return ( 
          <>
            <h1>Buy your stuff</h1> 
            <button onClick={this.formOne}>Go to Checkout</button>
          </>
      )
      case 'F1' :
        return (
          <>
            <form>
              <label>
                Name:
                <input type="text"></input>
              </label>
              <label>
                Email:
                <input type="text"></input>
              </label>
              <label>
                Password:
                <input type="text"></input>
              </label>
              <input onClick={this.formTwo} type="submit" value="Submit"></input>
            </form>
          </>
        )
      case 'F2' :
        return (
          <>
            <form>
              <label>
                Address Line 1
                <input type="text"></input>
              </label>
              <label>
                Address Line 2
                <input type="text"></input>
              </label>
              <label>
                City
                <input type="text"></input>
              </label>
              <label>
                State
                <input type="text"></input>
              </label>
              <label>
                Zip
                <input type="text"></input>
              </label>
              <label>
                Phone
                <input type="text"></input>
              </label>
              <input onClick={this.formThree} type="submit" value="Submit"></input>
            </form>
          </>
        )
      case 'F3' :
        return (
          <>
            <form>
              <label>
                Credit Card No.
                <input type="text"></input>
              </label>
              <label>
                Expiration Date
                <input type="text"></input>
              </label>
              <label>
                CVV
                <input type="text"></input>
              </label>
              <label>
                Billing Zip
                <input type="text"></input>
              </label>
              <input onClick={this.home} type="submit" value="Submit"></input>
            </form>
          </>
        )
    }
  }
}


export default App;