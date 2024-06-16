/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */

// importing other components
import Footer from '../components/Footer.jsx'
import PageTransition from '../components/PageTransition.jsx'
import Alert from '../components/Alert.jsx'

// importing styled components
import { Container } from '../styles/utilities/layout-utilities.styles'
import {
  Wrapper,
  Heading,
  Item,
  ItemsList,
  Layout,
  Summary,
  ActionBtn,
  FooterAbsolute,
} from '../styles/pages/CartAndSaved.styled.js'

// importing the useSaved hook from the cartContext
import { useSaved } from '../contexts/favoritesContext'
// importing the useCart hook from the cartContext
import { useCart } from '../contexts/cartContext.jsx'
// importing the useAlert hook from the alertContext
import { useAlert } from '../contexts/alertContext.jsx'

// defining the uniqueItemsPage component
const uniqueItemsPage = () => {
  // using the useSaved hook to access the saved items state
  const { state, dispatch } = useSaved()
  const { savedItems } = state
  // filtering the unique items from the saved items
  const uniqueItems = savedItems.filter((item, index, self) => {
    return index === self.findIndex((t) => t.id === item.id)
  })

  // using the useAlert hook to access the alert state
  const showAlert = useAlert()
  // handling the clear saved items functionality
  const handleClearSaved = () => {
    dispatch({ type: 'CLEAR_SAVED' })
    showAlert('Saved items cleared', 'success')
  }

  // handling the remove item functionality
  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_FROM_SAVED', payload: item })
    showAlert('Item removed from the saved items', 'success')
  }

  // Adding items to the cart using the useCart hook dispatch
  const { dispatch: cartDispatch } = useCart()
  const addToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item })
    showAlert('Item added to the cart', 'success')
  }

  return (
    <Container>
      <Wrapper>
        <Alert />
        <Heading>Your Saved Items</Heading>
        <Layout>
          <ItemsList>
            {
              // mapping through the unique items and displaying them in the saved items
              uniqueItems.length > 0 ? (
                // if there are items in the saved items, display them
                uniqueItems.map((item) => (
                  <Item key={item.id}>
                    <div className='img-wrapper'>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className='info'>
                      <p className='title'>{item.title}</p>
                      <p className='price'>Price: {item.price} $</p>
                      <div className='buttons-wrapper'>
                        <ActionBtn
                          className='remove-saved'
                          onClick={() => addToCart(item)}
                        >
                          Add To Cart
                        </ActionBtn>
                        <ActionBtn
                          className='remove-saved'
                          onClick={() => handleRemoveItem(item)}
                        >
                          Remove
                        </ActionBtn>
                      </div>
                    </div>
                  </Item>
                ))
              ) : (
                // if the saved items is empty, display a message
                <p>Your saved is empty</p>
              )
            }
          </ItemsList>
          <Summary>
            <h2 className='summary-title'>Saved Items Summary</h2>
            <div className='summary-content'>
              <p className='total'>
                {/* calculating the total price of the items in the saved list */}
                Total: {uniqueItems.reduce((acc, item) => acc + item.price, 0)}{' '}
                $
              </p>
              <p className='total'>Items: {uniqueItems.length}</p>
            </div>

            <div className='summary-buttons'>
              <ActionBtn className='clear-saved' onClick={handleClearSaved}>
                Clear Saved Items
              </ActionBtn>
            </div>
          </Summary>
        </Layout>
        <FooterAbsolute>
          <Footer />
        </FooterAbsolute>
      </Wrapper>
    </Container>
  )
}

export default PageTransition(uniqueItemsPage)
