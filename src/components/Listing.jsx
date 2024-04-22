import "../styles/index.css";
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



    return (
        <React.Fragment>
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
