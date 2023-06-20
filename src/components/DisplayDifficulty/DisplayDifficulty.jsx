import PropTypes from 'prop-types'
import s from './style.module.css'

const DisplayDifficulty = (props) => (
  <div className={s.container}>
    {props.difficulty
      ? `Difficulty set to ${props.difficulty}`
      : 'No difficulty set'}
  </div>
)

export default DisplayDifficulty

DisplayDifficulty.propTypes = {
  difficulty: PropTypes.string,
}
