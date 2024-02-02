<script lang="ts">
export default {
    data() {
        return {
            birthday: new Date(2000, 2, 19) // March 19, 2000
        };
    },
    methods: {
        calculateAge(birthday: Date): number {
            const today = new Date();
            let age = today.getFullYear() - birthday.getFullYear();
            const monthDifference = today.getMonth() - birthday.getMonth();

            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
                age--;
            }

            return age;
        }
    },
    computed: {
        age(): number {
            return this.calculateAge(this.birthday);
        }
    }
}
</script>
<template>
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>About</h2>
                <p>Hello! I'm a Backend Developer mainly working with TypeScript. I've also used Java and PHP in my
                    projects. Now, I'm focusing on TypeScript Express and Typeorm for backend, and Vite Vue TypeScript for
                    frontend. I've worked with cloud platforms like Digital Ocean, Vultr, Linode, and AWS. Check out my
                    portfolio to see my work!</p>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <img src="../assets/img/profile-img.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Software &amp; Web Developer.</h3>
                    <p class="fst-italic">
                        I love backend coding because it's an exciting field.
                    </p>
                    <div class="row">
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>March 19,
                                        2000</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong>
                                    <span>marckevinsalagubang.vercel.app</span>
                                </li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+6393 5478 2937</span>
                                </li>
                                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lucena City, Quezon,
                                        Philippines</span></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{{ age }}</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Science in Information Technology</span></li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong>
                                    <span>kevinmarc.beetle@gmail.com</span>
                                </li>
                                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                    </p>
                </div>
            </div>

        </div>
    </section><!-- End About Section -->
</template>