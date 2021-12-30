import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import CategoryCard from "../components/CategoryCard";

import { home as data } from '../data'

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="p-8 flex flex-wrap justify-items-center justify-center gap-6">
                {data.map(({ img, category, rating }, index) =>
                    <CategoryCard
                        key={index}
                        url={img}
                        category={category}
                        rating={rating}
                    />
                )}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Home;
