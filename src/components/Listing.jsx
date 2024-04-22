// import "../styles/index.css";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { gsap } from "gsap";

export function Listing() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const username = "flowershow";
        const password = "Ych9eUTlXNFB";

        fetch(`http://46.101.133.209/api/products?page=${page}`, {
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password),
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("La requête a échoué");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (page === 1) {
                    setProducts(data.data.items); // Only load products from the first page initially
                    setTotalPages(data.data.totalPages); // Update total number of pages after initial load
                } else {
                    setProducts(prevProducts => [...prevProducts, ...data.data.items]); // Add additional products

                }
            });
        // .catch(error => console.log("ERROR"));
    }, [page]);


    // button goes down
    const loadMoreProducts = () => {
        gsap.to(".card__loadingmore", {
            opacity: 0, y: 100, duration: .7, onComplete: () => {
                setPage(prevPage => prevPage + 1);
                gsap.to(".card__loadingmore", { opacity: 1, y: 0, duration: .1, delay: .4 }); // Fade in the "load more" button
            }
        });
    };

    const show = document.querySelector(".filters");
    const overlay = document.querySelector(".filters__overlay");

    const filters = () => {
        show.style.display = "block";
        gsap.from(show, { x: 300, duration: 1 });

        overlay.style.display = "block";
        gsap.from(overlay, { opacity: 0, duration: 1 });

    };

    const close = () => {
        
        show.style.display = "none";
        overlay.style.display = "none";

    };


    return (
        <React.Fragment>
            <div className="filter">
                <p className="filter__num-product">45 articles</p>
                <div className="filter__container" onClick={filters}>
                    <p className="filter__text">filtrer par</p>
                    <img src="src/assets/images/listing/arrow_down.png" alt="" className="filter__img" />
                </div>
            </div>
            <div className="filters">
                <h1 className="filters__title">filtrer par :</h1>
                <div className="filters__filterBy">
                    <h2 className="filters__filterBy-title">catégories</h2>
                    <ul className="filters__filterBy-list">
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox1" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox1" className="filters__filterBy-label">Option 1</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox2" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox2" className="filters__filterBy-label">Option 2</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox3" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox3" className="filters__filterBy-label">Option 3</label>
                        </li>
                    </ul>
                </div>

                <div className="filters__filterBy">
                    <h2 className="filters__filterBy-title">catégories</h2>
                    <ul className="filters__filterBy-list">
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox1" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox1" className="filters__filterBy-label">Option 1</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox2" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox2" className="filters__filterBy-label">Option 2</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox3" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox3" className="filters__filterBy-label">Option 3</label>
                        </li>
                    </ul>
                </div>

                <div className="filters__filterBy">
                    <h2 className="filters__filterBy-title">catégories</h2>
                    <ul className="filters__filterBy-list">
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox1" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox1" className="filters__filterBy-label">Option 1</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox2" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox2" className="filters__filterBy-label">Option 2</label>
                        </li>
                        <li className="filters__filterBy-item">
                            <input type="checkbox" id="checkbox3" className="filters__filterBy-checkbox" />
                            <label htmlFor="checkbox3" className="filters__filterBy-label">Option 3</label>
                        </li>
                    </ul>
                </div>


                <img src="src/assets/images/listing/close.png" alt="close filters" className="filters__img" onClick={close} />




            </div>

            <div className="filters__overlay"></div>

            <div className="card-container">
                {products.map((product, index) => (
                    <div className="card" key={index}>
                        <div className="card__img-container">
                            <img src={product.image} alt={product.name} className="card__img" />
                        </div>
                        <div className="card__text-container">
                            <h2 className="card__title">{product.name}</h2>
                            <h3 className="card__subtitle">{product.description}</h3>
                            <p className="card__price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card__loadingmore-container">
                {page < totalPages && <Button className="card__loadingmore" onClick={loadMoreProducts}>load more products</Button>}
            </div>
        </React.Fragment>
    );
}
