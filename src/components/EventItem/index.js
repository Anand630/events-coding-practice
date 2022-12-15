import './index.css'

const EventItem = props => {
  const {eventDetails, isClicked, getImageIdAndRegistrationStatus} = props
  const {id, imageUrl, registrationStatus} = eventDetails
  const onImageClick = () => {
    getImageIdAndRegistrationStatus(id, registrationStatus)
  }

  const buttonClassName = isClicked
    ? 'event-image-button-on'
    : 'event-image-button-off'
  return (
    <button onClick={onImageClick} className={buttonClassName} type="button">
      <img className="event-image" src={imageUrl} alt="event" />
    </button>
  )
}

export default EventItem
