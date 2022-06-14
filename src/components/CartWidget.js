import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import ShopIcon from '@material-ui/icons/Room';
import { Badge } from '@mui/material'

const CartWidget = () => {
const test = useContext(CartContext);

<Badge badgeContext={test.calcItemsQty()}>
    <ShopIcon/>
</Badge>

}

export default CartWidget