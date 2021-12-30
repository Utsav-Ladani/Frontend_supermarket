import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartCard from '../components/CartCard'
import { Alert, Button, Snackbar } from '@mui/material';

import { inventory as data } from "../data"

function Cart() {
    const [payment, setPayment] = useState(1500);
    const [open, setOpen] = useState(false);

    const makePayment = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className='mt-10 grid place-items-center'>
                <Button
                    variant='contained'
                    size='large'
                    onClick={makePayment}
                >
                    Pay {payment} &#x20B9;
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert variant='filled' severity="success" sx={{ width: '100%' }} onClose={handleClose}>
                        Payment successfully
                    </Alert>
                </Snackbar>
            </div>
            <div className="min-h-screen p-16 flex flex-col gap-6 items-center">
                {data.map(({ category, ...details }, index) =>
                    <CartCard
                        key={index}
                        details={details}
                    />
                )}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Cart;
