<template>
    <div class="ts container home">
        <h1 class="ts center aligned header">Online Menu</h1>
        <div v-for="item in list" :key="item.id" >
            <item-card v-bind:item="item" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import API from "@/assets/api.json";
import ItemCard from "../components/ItemCard.vue";

export default {
    name: "home",
    components: {
        ItemCard
    },
    data() {
        return {
            list: []
        };
    },
    created() {
        this.list = API;
    }
};
</script>
