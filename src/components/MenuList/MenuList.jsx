import PropTypes from 'prop-types'
import MenuListItem from '../MenuListItem/MenuListItem'
import { DIFFICULTIES } from './constants'
import s from './style.module.css'

// Stateless
const MenuList = (props) => (
  <div className={s.container}>
    {DIFFICULTIES.map((difficulty) => (
      <MenuListItem
        key={difficulty}
        onClick={props.onItemClick}
        isSelected={props.difficulty === difficulty}
        difficulty={difficulty}
      />
    ))}
  </div>
)

export default MenuList

MenuList.propTypes = {
  onItemClick: PropTypes.func,
  difficulty: PropTypes.string,
}
