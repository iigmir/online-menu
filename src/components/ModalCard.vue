<template>
    <div class="ts modals dimmer active">
        <dialog id="modal" class="ts modal" open>
            <i class="close icon" v-on:click="close"></i>
            <div class="ts header">
                <h3> {{ item.name }} </h3>
            </div>
            <div class="image content">
                <div class="ts medium image">
                    <img v-bind:src="item.image">
                </div>
                <div class="description">
                    <div class="ts header">我們在照片中偵測到了你。</div>
                    <p>這張照片看起來裡面包含著你的人像，如果你願意的話我們可以自動將該照片發佈至 <a href="https://www.gravatar.com" target="_blank">gravatar</a> 並替換你原先的頭像。</p>
                    <p>你希望這麼做嗎？</p>
                </div>
            </div>
            <div class="actions">
                <button class="ts inverted basic deny button" v-on:click="close"> 不 </button>
                <button class="ts inverted basic positive button"> 是的 </button>
            </div>
        </dialog>
    </div>
</template>

<script>
export default {
    props:
    {
        item:
        {
            type: Object,
            default() { return {}; }
        }
    },
    methods:
    {
        close()
        {
            this.$emit("clean");
        }
    }
}
</script>

<style lang="scss" scoped>
.ts.header
{
    margin-top: 0;
}
</style>
