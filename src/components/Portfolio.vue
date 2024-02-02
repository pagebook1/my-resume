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
                    style="position: relative; height: 1267.11px;">

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app"
                        style="position: absolute; left: 0px; top: 0px;">
                        <div class="portfolio-wrap">
                            <img src="../assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div class="portfolio-links">
                                    <a href="../assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery"
                                        class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                                    <a href="#" class="portfolio-details-lightbox" data-glightbox="type: external"
                                        title="Portfolio Details"><i class="bx bx-link"></i></a>
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
export default {
    data() {
        return {
            portfolios: [
                {
                    id: 1,
                    title: "Project 1",
                    description: "This is the description for Project 1.",
                },
                {
                    id: 2,
                    title: "Project 2",
                    description: "This is the description for Project 2.",
                },
                {
                    id: 3,
                    title: "Project 3",
                    description: "This is the description for Project 3.",
                },
            ],
        };
    },
};
</script>

<style>/* Add your custom styles here */</style>
