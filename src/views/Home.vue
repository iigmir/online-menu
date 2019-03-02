<template>
    <div class="ts container home">
        <modal-card
            v-if="chosed_item.hasOwnProperty('id')"
            v-bind:item="chosed_item"
            v-on:clean_notice="clean_notice"
        />
        <div class="clear-gap">
            <h1 class="ts center aligned header"> 線上點飲料 </h1>
            <button class="ts primary center aligned button">結帳</button>
        </div>
        <div
            class="item-cursor"
            v-for="item in list" :key="item.id"
            v-on:click="choose_item(item)">
            <item-card v-bind:item="item" />
        </div>
        <div class="ts bottom right snackbar" v-bind:class="{'active':order_noticed}">
            <div class="content"> {{ notice_text }} </div>
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
            chosed_item: {},
            order_noticed: false,
            notice_text: ""
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
        clean_notice(input_text)
        {
            if( input_text === "" )
            {
                debugger;
            }
            this.chosed_item = {};
            this.order_noticed = !this.order_noticed;
            this.notice_text = input_text;
            window.setTimeout(()=>
            {
                this.order_noticed = !this.order_noticed;
                this.notice_text = "";
                return;
            }, 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
div .ts.center.aligned
{
    text-align: center;
    margin: 0 auto;
    display: block;
}

.item-cursor
{
    margin-top: 0.5rem;
}
</style>
