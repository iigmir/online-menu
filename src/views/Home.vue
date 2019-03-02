<template>
    <div class="ts container home">
        <modal-card
            v-if="chosed_item.hasOwnProperty('id')"
            v-bind:item="chosed_item"
            v-on:clean="clean_item()"
        />
        <h1 class="ts center aligned header">Online Menu</h1>
        <div
            class="item-cursor"
            v-for="item in list" :key="item.id"
            v-on:click="choose_item(item)">
            <item-card v-bind:item="item" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import API from "@/assets/api.json";
import ItemCard from "../components/ItemCard.vue";
import ModalCard from "../components/ModalCard.vue";

export default {
    name: "Home",
    components:
    {
        ItemCard,
        ModalCard
    },
    data()
    {
        return {
            list: [],
            chosed_item: {}
        };
    },
    created() {
        this.list = API;
    },
    methods:
    {
        choose_item(item)
        {
            this.chosed_item = item;
        },
        clean_item()
        {
            this.chosed_item = {};
        }
    }
};
</script>
