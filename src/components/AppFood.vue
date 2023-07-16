<script>
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend

} from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { store } from "../store";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: "AppFood",
    components: {
        Doughnut
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        searchFoodAPI() {
            axios.get(`http://api.edamam.com/api/food-database/v2/parser?app_id=663fa592&app_key=dd7f0a5ba437a993dcd7b477a059209f&ingr=${store.searchValue}&nutrition-type=cooking`)
                .then(response => {
                    store.myFood.dataAPI = response.data.hints[0].food;
                    console.log(store.myFood.dataAPI = response.data.hints[0].food);

                })
                .catch(err => {
                    console.log(err);
                });
        },
        calculateCaloriesFood() {
            store.calculatedFoodCalories = Math.floor(store.foodQuantity / 100 * store.myFood.dataAPI.nutrients.ENERC_KCAL)
        },
        calculateGramsFood() {
            store.calculatedFoodGrams = Math.floor((100 * store.caloriesQuantity) / store.myFood.dataAPI.nutrients.ENERC_KCAL)
        },
        add1grams() {
            store.foodQuantity = parseInt(store.foodQuantity) + 1;
        },
        add10grams() {
            store.foodQuantity = parseInt(store.foodQuantity) + 10;
        },
        add100grams() {
            store.foodQuantity = parseInt(store.foodQuantity) + 100;
        },
        add1kcal() {
            store.caloriesQuantity = parseInt(store.caloriesQuantity) + 1;
        },
        add10kcal() {
            store.caloriesQuantity = parseInt(store.caloriesQuantity) + 10;
        },
        add100kcal() {
            store.caloriesQuantity = parseInt(store.caloriesQuantity) + 100;
        },

    },
    computed: {
        // chart in calories
        chartDataCal() {
            return {
                labels: ['Kcal Carbo', 'Kcal Protein', 'Kcal Fats'],
                datasets: [
                    {
                        label: 'Calories:',
                        backgroundColor: ['#41B883', '#c9c948', '#6272ef'],
                        borderColor: 'rgb(255, 255, 255, 0.2)',
                        data: [(store.myFood.dataAPI.nutrients.CHOCDF * 4), (store.myFood.dataAPI.nutrients.PROCNT * 9), (store.myFood.dataAPI.nutrients.FAT * 9)]
                    }
                ]
            }
        },
        chartOptionsCal() {
            return {
                responsive: true,
                maintainAspectRatio: false
            }
        },
    },
}
</script>

<template>
    <section>

        <div class="row">
            <div class="text">
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
            <div class="graph">
                <Doughnut :data="chartDataCal" :options="chartOptionsCal" />
            </div>
        </div>
        <div>
            <h5>Insert the food you want</h5>
            <input type="text" v-model="store.searchValue" @keyup.enter="searchFoodAPI" placeholder="insert the food">
            <button @click="(searchFoodAPI)">
                Search
            </button>
        </div>
        <div>
            <h5>Insert the grams to se the kcal</h5>
            <input type="text" v-model="store.foodQuantity" @keyup.enter="calculateCaloriesFood">
            <button @click="(calculateCaloriesFood)">
                Search
            </button>
            <button @click="(add1grams)">
                +1
            </button>
            <button @click="(add10grams)">
                +10
            </button>
            <button @click="(add100grams)">
                +100
            </button>
            <div>
                {{ store.calculatedFoodCalories }} Kcal
            </div>
        </div>
        <div>
            <h5>Insert the kcal to see the grams</h5>
            <input type="text" v-model="store.caloriesQuantity" @keyup.enter="calculateGramsFood">
            <button @click="(calculateGramsFood)">
                Search
            </button>
            <button @click="(add1kcal)">
                +1
            </button>
            <button @click="(add10kcal)">
                +10
            </button>
            <button @click="(add100kcal)">
                +100
            </button>
            <div>
                {{ store.calculatedFoodGrams }} grams
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
section {
    border: 1px solid salmon;
}

.row {
    display: flex;
}

.text {
    width: 50%;
}

.graph {
    width: 50%;
}
</style>