import React from "react"
import product from "../assets/product.svg"
import "./product.css"



const Product = () => {
    return (
        <>
            <nav>
                <img src={product} className="icon1"/>
            </nav>
            <section>
                <div>
                    <h1>Add Product</h1>
                    <div className="title-description">
                        <form>
                            <label htmlFor="title" className="title-name">Title</label>
                            <input type="text" className="title"/>
                            <label htmlFor="description" className="description-name">Description</label>
                            <input type="text" className="description"/>
                        </form>
                    </div>
                    <div className="media-box">
                        <h4>Media</h4>
                        <input type="file" className="media-input"/>
                    </div>
                    <div className="pricing-box">
                        <h4>Pricing</h4>
                        <form>
                            <label htmlFor="price" className="price-label">Price</label>
                            <input type="text" placeholder="$" className="price-box"/>
                            <label htmlFor="compare-price" className="compare-price-label">compare at-Price</label>
                            <input type="text" placeholder="$" className="compare-price-box"/>
                        </form>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    )
}

export default Product