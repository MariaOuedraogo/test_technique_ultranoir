import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { gsap } from "gsap";

export function Listing() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filterData, setFilterData] = useState({
        categories: { label: "", items: [] },
        collections: { label: "", items: [] },
        capacities: { label: "", items: [] }
    });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedFilters, setSelectedFilters] = useState({});

    useEffect(() => {
        const username = "flowershow";
        const password = "Ych9eUTlXNFB";

        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://46.101.133.209/api/products?page=${page}`, {
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password),
                    }
                });
                if (!response.ok) {
                    throw new Error("La requête a échoué");
                }
                const data = await response.json();
                if (page === 1) {
                    setProducts(data.data.items);
                    setTotalPages(data.data.totalPages);
                } else {
                    setProducts(prevProducts => [...prevProducts, ...data.data.items]);
                }
                filterAllProducts(); // Filtrer tous les produits après chargement de nouveaux produits
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        const fetchFilters = async () => {
            try {
                const response = await fetch("http://46.101.133.209/api/filters", {
                    headers: {
                        "Authorization": "Basic " + btoa(username + ":" + password),
                    }
                });
                if (!response.ok) {
                    throw new Error("La requête des filtres a échoué");
                }
                const data = await response.json();
                setFilterData(data.data);
            } catch (error) {
                console.error("Error fetching filters:", error);
            }
        };

        fetchProducts();
        fetchFilters();
    }, [page]);

    useEffect(() => {
        filterAllProducts(); // Filtrer tous les produits lorsque les filtres sélectionnés changent
    }, [selectedFilters]);

    const filterAllProducts = () => {
        let filtered = [...products]; // Commence avec tous les produits chargés
        Object.entries(selectedFilters).forEach(([filterType, filter]) => {
            switch (filterType) {
                case "categories":
                    filtered = filtered.filter(product => product.category === filter.id);
                    break;
                case "collections":
                    filtered = filtered.filter(product => product.collection === filter.id);
                    break;
                case "capacities":
                    filtered = filtered.filter(product => product.capacity === filter.id);
                    break;
                default:
                    break;
            }
        });
        setFilteredProducts(filtered);
    };

    const loadMoreProducts = () => {
        gsap.to(".card__loadingmore", {
            opacity: 0, y: 100, duration: .7, onComplete: () => {
                setPage(prevPage => prevPage + 1);
                gsap.to(".card__loadingmore", { opacity: 1, y: 0, duration: .1, delay: .4 });
            }
        });
    };

    const handleFilterChange = (filterType, itemId, itemLabel) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: { id: itemId, label: itemLabel }
        }));
    };

    const filters = () => {
        const show = document.querySelector(".filters");
        const overlay = document.querySelector(".filters__overlay");
        const body = document.querySelector("body");

        show.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";

        gsap.set(show, { x: 0 });
        gsap.from(show, { x: 300, duration: .5 });

        gsap.set(overlay, { opacity: .6 });
        gsap.from(overlay, { opacity: 0, duration: .5 });
    };

    const close = () => {
        const show = document.querySelector(".filters");
        const overlay = document.querySelector(".filters__overlay");
        const body = document.querySelector("body");

        gsap.to(show, {
            x: 1000, duration: .5, onComplete: () => {
                show.style.display = "none";
            }
        });

        gsap.to(overlay, {
            opacity: 0, duration: .5, onComplete: () => {
                overlay.style.display = "none";
            }
        });

        body.style.overflowY = "visible";
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
                {Object.keys(filterData).map((filterType, index) => (
                    <div key={index} className="filters__filterBy">
                        <h2 className="filters__filterBy-title">{filterData[filterType].label}</h2>
                        <ul className="filters__filterBy-list">
                            {Array.isArray(filterData[filterType].items) && filterData[filterType].items.map((item, idx) => (
                                <li key={idx} className="filters__filterBy-item">
                                    <input 
                                        type="checkbox" 
                                        id={`${filterType}-${item.id}`} 
                                        className="filters__filterBy-checkbox" 
                                        onChange={() => handleFilterChange(filterType, item.id, item.label)} 
                                    />
                                    <label htmlFor={`${filterType}-${item.id}`} className="filters__filterBy-label">{item.label}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <img src="src/assets/images/listing/close.png" alt="close filters" className="filters__img" onClick={close} />
            </div>
            <div className="filters__overlay"></div>
            <div className="card-container">
                {selectedFilters && Object.keys(selectedFilters).length === 0 ? ( // Affiche la pagination normale si aucun filtre n'est sélectionné
                    products.map((product, index) => (
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
                    ))
                ) : (
                    filteredProducts.map((product, index) => ( // Affiche les produits filtrés si des filtres sont sélectionnés
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
                    ))
                )}
            </div>
            <div className="card__loadingmore-container">
                {page < totalPages && <Button className="card__loadingmore" onClick={loadMoreProducts}>load more products</Button>}
            </div>
        </React.Fragment>
    );
}
