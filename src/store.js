import { reactive } from "vue";

export const store = reactive({
    myData: {
        gender: '',
        height: 0,
        age: 0,
        weight: 0,
        caloriesBMI: 0,
        numberWorkouts: 0,
        caloriesWithWO: 0,
        caloriesCut: 0,
        caloriesDay: 0,
        caloriesWeek: 0,
        leanMass: 0,
        proteinKilo: 0,
        fatsKilo: 0,
        carboDay: 0,
        proteinDay: 0,
        fatsDay: 0,
        carboDayCalories: 0,
        proteinDayCalories: 0,
        fatsDayCalories: 0,
        carboDayPercentage: 0,
        proteinDayPercentage: 0,
        fatsDayPercentage: 0,
    },
    myFood: {
        mealCalories: 0,
        dataAPI: {
            nutrients: {
                ENERC_KCAL: 0,
                CHOCDF: 0,
                PROCNT: 0,
                FAT: 0,
                FIBTG: 0
            }
        }
    }
})

