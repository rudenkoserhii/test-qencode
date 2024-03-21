import { useEffect } from 'react'
import Notiflix from 'notiflix'
import PropTypes from 'prop-types'
import theme from 'styles/theme'

export const Loading = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      Notiflix.Loading.init({
        svgColor: theme.colors.linkText,
      })
      Notiflix.Loading.circle()
    } else {
      Notiflix.Loading.remove()
    }

    return () => {
      Notiflix.Loading.remove()
    }
  }, [isVisible])

  return null
}

Loading.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}
