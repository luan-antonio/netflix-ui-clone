import React, { useEffect, useState } from 'react';
import './App.css';

import Tmdb from "./Tmdb";

import MovieRow from './components/MovieRow'
import Featured from './components/Featured';
import Header from './components/Header';

export default () => {
    const tmdb = new Tmdb();

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async () => {
            const list = await tmdb.getHomeList();
            setMovieList(list);

            const originals = list.filter(i=>i.slug === 'originals');
            const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            const chosen = originals[0].items.results[randomChosen];
            const chosenInfo = await tmdb.getTVShowInfo(chosen.id);
            setFeaturedData(chosenInfo);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <div className="page">
            <Header black={blackHeader}/>

            {featuredData && 
                <Featured item={featuredData}/>
            }
            <section className="lists">
                {movieList.map((item, key)=> {
                    return <MovieRow key={key} title={item.title} items={item.items}/>
                })}
            </section>

            <footer>
                Projeto de estudo de Luan Barreira Antonio<br />
                Dados de <span><a href='https://www.themoviedb.org/'>https://www.themoviedb.org/</a></span><br />
            </footer>
        </div>
    );
}