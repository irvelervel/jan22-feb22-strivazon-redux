import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

// mapStateToProps is a function that returns an object

const mapStateToProps = (state) => {
  return {
    // always return an OBJECT from mapStateToProps
    // every PROPERTY of this OBJECT will be a new PROP for CartIndicator
    cartLength: state.cart.content.length,
  }
}

const CartIndicator = ({ cartLength }) => {
  const navigate = useNavigate()

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default connect(mapStateToProps)(CartIndicator)
// we're ENRICHING the export of CartIndicator through connect

// connect()() -> is creating a HOC <- Higher Order Component --> ?? it's a component with MORE PROPS than the ones he started with

// the connect function connects a component to the Redux Store in order to read its value or in order to dispatch an
// action that will trigger a change

// we need to tell CartIndicator:
// a) which properties to READ from the redux store <-- mapStateToProps
// b) and which ACTIONS to dispatch <-- mapDispatchToProps

// mapStateToProps MAPS some Redux store value to our PROPS
// mapDispatchToProps MAPS some dispatching abilities to our PROPS

// in CartIndicator we're just interested in READING properties from the redux store! we just need a)
