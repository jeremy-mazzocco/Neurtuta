<script>
import { store } from "../store";
import axios from "axios";

export default {
    name: "AppFood",
    data() {
        return {
            store,
        }
    },
    methods: {
        searchFoodAPI() {
            axios.get('http://api.edamam.com/api/food-database/v2/parser?app_id=663fa592&app_key=dd7f0a5ba437a993dcd7b477a059209f&ingr=onion&nutrition-type=cooking')
                .then(response => {
                    store.myFood.dataAPI = response.data.hints[0].food;

                    console.log(store.myFood.dataAPI);

                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}
</script>

<template>
    <section>
        <div>
            FOOD API
        </div>
        <pre>
            {{ store.myFood.dataAPI }}
        </pre>

        <div>
            <h2>
                {{ store.myFood.dataAPI.label }}
            </h2>
            <p>value for 100gr</p>
            <ul>
                <li>{{ store.myFood.dataAPI.nutrients.ENERC_KCAL }} kcal</li>
                <li>{{ store.myFood.dataAPI.nutrients.CHOCDF }}gr Carbo </li>
                <li>{{ store.myFood.dataAPI.nutrients.PROCNT }}gr Protein</li>
                <li>{{ store.myFood.dataAPI.nutrients.FAT }}gr Fats</li>
                <li>{{ store.myFood.dataAPI.nutrients.FIBTG }}gr Fibres</li>
            </ul>

        </div>
        <div>

        </div>
        <button @click="(searchFoodAPI)">
            Search
        </button>
    </section>
</template>

<style lang="scss" scoped>
section {
    border: 1px solid salmon;
}
</style>