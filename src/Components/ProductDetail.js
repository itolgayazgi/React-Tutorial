import React from 'react'

function ProductDetail(props) {



    return (
        <>
            <ul>
                {
                    props.ozellikler.map((item, key) => (<li>{item}</li>))
                }

            </ul>
        </>
    )
}

export default ProductDetail