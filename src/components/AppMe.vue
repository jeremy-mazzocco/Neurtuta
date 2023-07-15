<script>
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    methods: {
        newCaloriesCalculation() {

            // Calculate caloriesBMI
            let caloriesBMI = 0;
            if (store.myData.gender === 'male') {
                caloriesBMI = (10 * store.myData.weight + 6.25 * store.myData.height - 5 * store.myData.age + 5) * 1.1;

            } else if (store.myData.gender === 'female') {
                caloriesBMI = (10 * store.myData.weight + 6.25 * store.myData.height - 5 * store.myData.age - 161) * 1.1;
            };
            store.myData.caloriesBMI = Math.round(caloriesBMI);

            // Calculate caloriesWithWO
            const caloriesWithWO = caloriesBMI * parseFloat(store.myData.numberWorkouts);
            store.myData.caloriesWithWO = Math.round(caloriesWithWO);

            // Calculate caloriesCut
            let caloriesCutted = Number(store.myData.caloriesCut);
            // p/day
            store.myData.caloriesDay = Math.floor(store.myData.caloriesWithWO * caloriesCutted);
            // p/week
            store.myData.caloriesWeek = store.myData.caloriesDay * 7;

            // Calculate protein and fats grams
            store.myData.proteinDay = Math.floor(store.myData.leanMass * store.myData.proteinKilo);
            store.myData.fatsDay = Math.floor(store.myData.leanMass * store.myData.fatsKilo);

            // Calculate protein and fats calories
            store.myData.proteinDayCalories = store.myData.proteinDay * 4;
            store.myData.fatsDayCalories = store.myData.fatsDay * 9;

            // Calculate carbs grams and calories
            store.myData.carboDayCalories = Math.floor(store.myData.caloriesDay - (store.myData.proteinDayCalories + store.myData.fatsDayCalories));
            store.myData.carboDay = Math.floor(store.myData.carboDayCalories / 4);

            // Calculate percentage fro graph
            store.myData.carboDayPercentage = Math.floor(store.myData.carboDayCalories / store.myData.caloriesDay * 100);
            store.myData.proteinDayPercentage = Math.floor(store.myData.proteinDayCalories / store.myData.caloriesDay * 100);
            store.myData.fatsDayPercentage = Math.floor(store.myData.fatsDayCalories / store.myData.caloriesDay * 100);

        },
    },
}

</script>

<template>
    <!-- CALORIES -->
    <section class="me">

        <!-- LEFT BLOCK -->
        <div class="me-left">
            <div class="mycalories-calculator">

                <div class="input-1">
                    <label for="weight">Weight in kg</label>
                    <input v-model="store.myData.weight" type="text" id="weight">
                </div>
                <div class="input-2">
                    <label for="height">Height in cm</label>
                    <input v-model="store.myData.height" type="text" id="height">
                </div>

                <div class="input-3">
                    <label for="age">Age</label>
                    <input id="age" v-model="store.myData.age" type="text">
                </div>

                <div class="input-4">
                    <select v-model="store.myData.gender" id="gender">
                        <option disabled value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <!-- Select increase -->
                <div class="input-5">
                    <div>Select number of workout in a week</div>
                    <input v-model="store.myData.numberWorkouts" type="radio" id="one" value="1.2">
                    <label for="one">20%</label>
                    <input v-model="store.myData.numberWorkouts" type="radio" id="two" value="1.3">
                    <label for="two">30%</label>
                    <input v-model="store.myData.numberWorkouts" type="radio" id="three" value="1.4">
                    <label for="three">40%</label>
                    <input v-model="store.myData.numberWorkouts" type="radio" id="four" value="1.5">
                    <label for="four">50%</label>
                </div>

                <div class="input-6">
                    <!-- Select cut -->
                    <div>Obiettivi dieta</div>
                    <input v-model="store.myData.caloriesCut" type="radio" id="deep-ipo" value="0.7">
                    <label for="deep-ipo">Deep-ipocaloric</label>
                    <input v-model="store.myData.caloriesCut" type="radio" id="ipo" value="0.8">
                    <label for="ipo">Ipocaloric</label>
                    <input v-model="store.myData.caloriesCut" type="radio" id="normo" value="1">
                    <label for="normo">Normo</label>
                    <input v-model="store.myData.caloriesCut" type="radio" id="bulk" value="1.2">
                    <label for="bulk">Bulk</label>
                </div>
            </div>
        </div>

        <!-- RIGHT BLOCK -->
        <div class="me-right">
            <div class="result">
                Your BMI is {{ store.myData.caloriesBMI }} Kcal
            </div>
            <div>
                You need {{ store.myData.caloriesDay }} Kcal calories per day
            </div>
            <div>
                Your need {{ store.myData.caloriesWeek }} Kcal calories per week
            </div>
        </div>
    </section>
    <!-- CARBS, PROTEIN AND FATS -->
    <section class="me">

        <!-- LEFT BLOCK -->
        <div class="me-left">
            <div class="mymacro-calculator">

                <div class="input-1">
                    <label for="massa-magra">Lean mass in kg</label>
                    <input v-model="store.myData.leanMass" type="text" id="massa-magra">
                </div>
                <div class="input-2">
                    <label for="protein">How many protein per kilo you want</label>
                    <input v-model="store.myData.proteinKilo" type="text" id="protein">
                </div>
                <div class="input-3">
                    <label for="fats">How many fat per kilo you want</label>
                    <input v-model="store.myData.fatsKilo" type="text" id="fats">
                </div>

                <button @click="(newCaloriesCalculation)">
                    Calculate
                </button>
            </div>
        </div>

        <!-- RIGHT BLOCK -->
        <div class="me-right">
            <div class="result">
                You have left {{ store.myData.carboDay }} gr of carbs per day, {{ store.myData.carboDayCalories }} kcal
            </div>

            <div>
                You need {{ store.myData.proteinDay }} gr of protein per day, {{ store.myData.proteinDayCalories }} Kcal
            </div>
            <div>
                Your need {{ store.myData.fatsDay }} gr of fats per day, {{ store.myData.fatsDayCalories }} Kcal
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.me {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.me-left,
.me-right {
    padding: 2rem;
}

.input-1,
.input-2,
.input-3,
.input-4,
.input-5,
.input-6 {
    margin: 1rem 0rem;
}
</style>