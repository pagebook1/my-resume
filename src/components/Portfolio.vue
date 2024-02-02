<template>
    <div id="portfolio" class="container">
        <section id="portfolio" class="portfolio section-bg">
            <div class="container aos-init aos-animate" data-aos="fade-up">

                <div class="section-title">
                    <h2>Portfolio</h2>
                    <p>As a versatile developer, I've honed my skills in various languages and frameworks, including
                        TypeScript, Flutter, and more. This portfolio showcases my diverse range of projects, reflecting my
                        adaptability and commitment to creating efficient, robust solutions. Dive in to explore my work and
                        see how I leverage these tools to bring ideas to life!</p>
                </div>

                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center aos-init aos-animate" data-aos="fade-up"
                        data-aos-delay="100">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-windows">Windows</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div class="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"
                    style="position: relative;height: 4330.62px;">
                    <div v-for="(portfolio,index) in portfolios">
                        <div class="col-lg-4 col-md-6 portfolio-item" :class="portfolio.type"
                            style="position: absolute; left: 0px;" :style="{ top: (index * 500) + 'px' }">
                            <div class="portfolio-wrap">
                                <img :src="portfolio.image" class="img-fluid" alt="">
                                <div class="portfolio-info">
                                    <h4>{{ portfolio.title }}</h4>
                                    <p>{{ portfolio.type }}</p>
                                    <div class="portfolio-links">
                                        <a :href="portfolio.link" data-gallery="portfolioGallery" class="portfolio-lightbox"
                                            title="App 1"><i class="bx bx-plus"></i></a>
                                        <a href="#" class="portfolio-details-lightbox" data-glightbox="type: external"
                                            title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script lang= "ts">
let height = 500;
export default {

    data() {
        return {
            portfolios: [
                {
                    id: 1,
                    title: "Project 1",
                    link: "#",
                    type: "filter-app",
                    image: "src/assets/img/portfolio/portfolio-1.jpg",
                },
                {
                    id: 2,
                    title: "Project 2",
                    link: "#",
                    type: "filter-web",
                    image: "src/assets/img/portfolio/portfolio-2.jpg",
                }, {
                    id: 3,
                    title: "Project 3",
                    link: "#",
                    type: "filter-app",
                    image: "src/assets/img/portfolio/portfolio-1.jpg",
                }, {
                    id: 4,
                    title: "Project 4",
                    link: "#",
                    type: "filter-app",
                    image: "src/assets/img/portfolio/portfolio-1.jpg",
                },
            ],
            height

        };
    },
};
</script>

<style>
/* Add your custom styles here */
</style>
