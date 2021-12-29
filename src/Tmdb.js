export default class Tmdb{
    constructor() {
        this.API_KEY = '88ad13e5301d42a45c5c8e04b8205634';
        this.API_BASE = 'https://api.themoviedb.org/3'
    }

    async basicFetch(endpoint) {
        const req = await fetch(`${this.API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    }

    async getHomeList() {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await this.basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await this.basicFetch(`/trending/all/week?language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await this.basicFetch(`/movie/top_rated?language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await this.basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await this.basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await this.basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await this.basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${this.API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await this.basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${this.API_KEY}`),
            },

        ]
    }

    async getMovieInfo(id) {
        let info = null;
        if(id) {
            info = await this.basicFetch(`/movie/${id}?language=pt-BR&api_key=${this.API_KEY}`);
        }
        return info;
    }

    async getTVShowInfo(id) {
        let info = null;
        if(id) {
            info = await this.basicFetch(`/tv/${id}?language=pt-BR&api_key=${this.API_KEY}`);
        }
        return info;
    }
}