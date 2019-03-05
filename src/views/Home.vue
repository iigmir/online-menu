<template>
    <div class="ts container home">
        <modal-card
            v-if="chosed_item.hasOwnProperty('id')"
            v-bind:item="chosed_item"
            v-on:clean_notice="clean_notice"
            v-on:submit="submit"
        />
        <checkout
            v-if="in_checkout"
            v-bind:order_list="order_list"
            v-on:final_decision="final_decision"
        />
        <div class="clear-gap">
            <h1 class="ts center aligned header"> 線上點飲料 </h1>
            <button class="ts primary center aligned button" v-on:click="set_checkout(true)">結帳</button>
        </div>
        <div
            class="item-cursor"
            v-for="item in menu_list" :key="item.id"
            v-on:click="choose_item(item)">
            <item-card v-bind:item="item" />
        </div>
        <div class="ts bottom right snackbar"
            v-bind:class="{ 'active': order_noticed }">
            <div class="content"> {{ notice_text }} </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import API from "@/assets/api.json";
import ItemCard from "../components/ItemCard.vue";
import ModalCard from "../components/ModalCard.vue";
import Checkout from "../components/Checkout.vue";

export default {
    name: "Home",
    components:
    {
        Checkout,
        ItemCard,
        ModalCard
    },
    data()
    {
        return {
            menu_list: [],
            order_list: [],
            chosed_item: {},
            notice_text: "",
            in_checkout: false,
            order_noticed: false,
        };
    },
    created()
    {
        this.menu_list = API;
    },
    methods:
    {
        choose_item(item)
        {
            this.chosed_item = item;
        },
        submit(item)
        {
            let order_list = this.this.order_list;
            order_list.push(item);
            this.order_list = order_list;
            this.clean_notice("已加入");
        },
        clean_notice(input_text)
        {
            this.chosed_item = {};
            this.order_noticed = !this.order_noticed;
            this.notice_text = input_text;
            window.setTimeout(()=>
            {
                this.order_noticed = !this.order_noticed;
                this.notice_text = "";
                return;
            }, 1000);
        },
        set_checkout(bool)
        {
            if( typeof(bool) !== "boolean" )
            {   // If not boolean, set it false.
                bool = false;
            }
            this.in_checkout = bool;
        },
        final_decision(decision)
        {
            this.order_list = decision.order_list;
            this.set_checkout(false);
            this.clean_notice(decision.text);
        },
        delete_order_list(index)
        {
            let order_list = this.this.order_list;
            order_list.splice(index, 1);
            this.order_list = order_list;
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
