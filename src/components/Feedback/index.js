import {Component} from 'react'

import './index.css'

const Emojies = props => {
  const {details, clickBtn} = props
  const {name, imageUrl} = details

  const onTapBtn = () => {
    clickBtn()
  }

  return (
    <li className="emoji-detail">
      <img src={imageUrl} alt={name} className="image" onClick={onTapBtn} />
      <p className="para">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isFeedbackStatus: false}

  clickBtn = () => {
    this.setState(prevState => ({
      isFeedbackStatus: !prevState.isFeedbackStatus,
    }))
  }

  comeBackPage = () => {
    this.setState(prevState => ({
      isFeedbackStatus: !prevState.isFeedbackStatus,
    }))
  }

  render() {
    const {isFeedbackStatus} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {!isFeedbackStatus && (
          <div className="emoji-container">
            <h1 className="heading">
              How satisfied are you with our <br />
              customer support performance
            </h1>
            <ul className="emojies">
              {emojis.map(each => (
                <Emojies
                  details={each}
                  key={each.id}
                  clickBtn={this.clickBtn}
                />
              ))}
            </ul>
          </div>
        )}
        {isFeedbackStatus && (
          <div className="feedback-container">
            <img
              src="https://icon-library.com/images/decline-icon/decline-icon-28.jpg"
              className="cross-icon"
              alt="cross"
              onClick={this.comeBackPage}
            />
            <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
            <h1 className="thank-heading">Thank You</h1>
            <p className="para">
              We will use your feedback to improve our customer support <br />
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
