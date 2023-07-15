<script>

export default {
    name: "AppHeader",
}

</script>

<template>
    <header>
        <section>

            <div class="logo">
                <h1>
                    Neurtuta
                </h1>
                <h4>
                    you're personal mesures
                </h4>
            </div>

            <nav>
                <ul>
                    <a href="#">
                        <li>You</li>
                    </a>
                    <a href="#">
                        <li>Food</li>
                    </a>
                    <a href="#">
                        <li>Data</li>
                    </a>
                </ul>
            </nav>

        </section>
    </header>
</template>


<style lang="scss" scoped>
header {
    height: 100px;
    display: flex;
    align-items: center;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: rgb(143, 98, 150);
        }

        h4 {
            color: rgb(187, 115, 26);
        }

        nav {
            width: 12rem;

            ul {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>