import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { gsap } from "gsap";

export function Listing() {
    const [products, setProducts] = useState([]);
    const [filterData, setFilterData] = useState({
        categories: { label: "", items: [] },
        collections: { label: "", items: [] },
        capacities: { label: "", items: [] }
    });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    

    useEffect(() => {
        const username = "flowershow";
        const password = "Ych9eUTlXNFB";

        // Fetch products
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
            })
            .catch(error => console.error("Error fetching products:", error));

        // Fetch filters
        fetch("http://46.101.133.209/api/filters", {
            headers: {
                "Authorization": "Basic " + btoa(username + ":" + password),
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("La requête des filtres a échoué");
                }
                return response.json();
            })
            .then(data => {
                setFilterData(data.data); // Set fetched filters data
            })
            .catch(error => console.error("Error fetching filters:", error));


            fetch("http://46.101.133.209/api/products", {
                headers: {
                    "Authorization": "Basic " + btoa(username + ":" + password),
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("La requête des filtres a échoué");
                    }
                    return response.json();
                })
                .then(data => {
                    setTotalItems(data.data.totalItems); // Mettre à jour le nombre total d'articles
                })
                .catch(error => console.error("Error fetching total items:", error));
            
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
    const body = document.querySelector("body");
    let initialX = 0;
    let initialOverlayOpacity = .6;

    const filters = () => {
        show.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";

        gsap.set(show, { x: initialX });
        gsap.from(show, { x: 300, duration: .5 });

        gsap.set(overlay, { opacity: initialOverlayOpacity });
        gsap.from(overlay, { opacity: 0, duration: .5 });
    };

    const close = () => {
        gsap.to(show, {
            x: 1000, duration: 1, onComplete: () => {
                show.style.display = "none";
            }
        });

        gsap.to(overlay, {
            opacity: 0, duration: 1, onComplete: () => {
                overlay.style.display = "none";
            }
        });

        body.style.overflowY = "visible";
    };

    return (
        <React.Fragment>
            <div className="filter">
                <p className="filter__num-product">{totalItems} articles</p>
                <div className="filter__container" onClick={filters}>
                    <p className="filter__text">filtrer par</p>
                    <img src="src/assets/images/listing/arrow_down.png" alt="" className="filter__img" />
                </div>
            </div>
            <div className="filters">
                <h1 className="filters__title">filtrer par :</h1>
                {Object.keys(filterData).map((filterType, index) => (
                    <div key={index} className="filters__filterBy">
                        <h2 className="filters__filterBy-title">{filterData[filterType].label}</h2>
                        <ul className="filters__filterBy-list">
                            {Array.isArray(filterData[filterType].items) && filterData[filterType].items.map((item, idx) => (
                                <li key={idx} className="filters__filterBy-item">
                                    <p htmlFor={`${filterType}-${item.id}`} className="filters__filterBy-name">{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
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
