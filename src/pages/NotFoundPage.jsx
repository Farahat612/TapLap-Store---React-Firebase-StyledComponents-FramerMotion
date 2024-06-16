/* eslint-disable react-refresh/only-export-components */
import PageTransition from '../components/PageTransition.jsx';

import { NotFound, BackToHome } from "../styles/pages/NotFound.styled"

const NotFoundPage = () => {
  return (
    <>
      <NotFound>
        <h1>404</h1>
        <p>Page not found</p>
        <BackToHome to="/">Back to Home</BackToHome>
      </NotFound>
    </>
  )
}

export default PageTransition(NotFoundPage)
