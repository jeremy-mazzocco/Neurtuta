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
                    store.myFood.dataAPI = response.data.hints[0].food.nutrients;
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
        <button @click="(searchFoodAPI)">
            Search
        </button>
    </section>
</template>