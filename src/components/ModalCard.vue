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
                    <div class="suger field" v-if="item_has.suger">
                        <p> 糖量 </p>
                        <div class="ts compact horizontal checkboxes">
                            <div class="ts radio checkbox">
                                <input id="suger-full" type="radio" name="suger" value="10">
                                <label for="suger-full">正常</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-less" type="radio" name="suger" value="8">
                                <label for="suger-less">少糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-half" type="radio" name="suger" value="5">
                                <label for="suger-half">半糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-little" type="radio" name="suger" value="3">
                                <label for="suger-little">微糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-none" type="radio" name="suger" value="0">
                                <label for="suger-none">無糖</label>
                            </div>
                        </div>
                    </div>
                    <div class="ice field" v-if="item_has.ice">
                        <p> 糖量 </p>
                        <div class="ts compact horizontal checkboxes">
                            <div class="ts radio checkbox">
                                <input id="ice-full" type="radio" name="ice" value="10">
                                <label for="ice-full">正常</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-less" type="radio" name="ice" value="8">
                                <label for="ice-less">少糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-half" type="radio" name="ice" value="5">
                                <label for="ice-half">半糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-little" type="radio" name="ice" value="3">
                                <label for="ice-little">微糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-none" type="radio" name="ice" value="0">
                                <label for="ice-none">無糖</label>
                            </div>
                        </div>
                    </div>
                    <div class="ts divider"></div>
                    <p v-if="item.notice !== ''"> {{ item.notice }} </p>
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
    computed:
    {
        item_has()
        {
            return {
                suger: this.item.can_use.some( text => text === "suger" ),
                ice: this.item.can_use.some( text => text === "ice" ),
            };
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
