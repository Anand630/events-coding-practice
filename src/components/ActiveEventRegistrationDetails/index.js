import './index.css'

const regStatusConstants = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const getNoActiveView = () => (
    <div className="initial-start-up-reg-status-container">
      <p className="initial-start-up-reg-status">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const getRegisteredView = () => (
    <div className="registered-view-container">
      <img
        className="green-tick-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const getRegistrationsClosedView = () => (
    <div className="registrations-closed-view-container">
      <img
        className="registrations-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const getYetToRegisterView = () => (
    <div className="yet-to-register-view-container">
      <img
        className="yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )
  console.log(registrationStatus)
  switch (registrationStatus) {
    case regStatusConstants.initial:
      return getNoActiveView()
    case regStatusConstants.registered:
      return getRegisteredView()
    case regStatusConstants.registrationsClosed:
      return getRegistrationsClosedView()
    case regStatusConstants.yetToRegister:
      return getYetToRegisterView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
