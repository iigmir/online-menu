<template>
    <div class="ts modals dimmer active">
        <dialog id="modal" class="ts modal" open>
            <i class="close icon" v-on:click="cancel()"></i>
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
                                <input id="suger-full" type="radio" name="suger" value="10" v-model="suger">
                                <label for="suger-full">正常</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-less" type="radio" name="suger" value="8" v-model="suger">
                                <label for="suger-less">少糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-half" type="radio" name="suger" value="5" v-model="suger">
                                <label for="suger-half">半糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-little" type="radio" name="suger" value="3" v-model="suger">
                                <label for="suger-little">微糖</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="suger-none" type="radio" name="suger" value="0" v-model="suger">
                                <label for="suger-none">無糖</label>
                            </div>
                        </div>
                    </div>
                    <div class="ice field" v-if="item_has.ice">
                        <p> 冰量 </p>
                        <div class="ts compact horizontal checkboxes">
                            <div class="ts radio checkbox">
                                <input id="ice-full" type="radio" name="ice" value="10" v-model="ice">
                                <label for="ice-full">正常</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-less" type="radio" name="ice" value="8" v-model="ice">
                                <label for="ice-less">少冰</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-half" type="radio" name="ice" value="5" v-model="ice">
                                <label for="ice-half">半冰</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-little" type="radio" name="ice" value="3"  v-model="ice">
                                <label for="ice-little">微冰</label>
                            </div>
                            <div class="ts radio checkbox">
                                <input id="ice-none" type="radio" name="ice" value="0" v-model="ice">
                                <label for="ice-none">去冰</label>
                            </div>
                        </div>
                    </div>
                    <div class="ts divider"></div>
                    <p v-if="item.notice !== ''"> {{ item.notice }} </p>
                </div>
            </div>
            <div class="actions">
                <button class="ts negative button" v-on:click="cancel()"> 取消 </button>
                <button class="ts positive button" v-on:click="submit()"> 確認增加 </button>
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
    data()
    {
        return {
            suger: "10",
            ice: "10",
            amount: 1
        };
    },
    computed:
    {
        item_has()
        {
            return {
                suger: this.item.can_use.some( text => text === "suger" ),
                ice: this.item.can_use.some( text => text === "ice" ),
            };
        },
        submit_item()
        {
            return {
                ice: this.ice,
                item: this.item,
                suger: this.suger,
                amount: this.amount
            };
        }
    },
    methods:
    {
        cancel()
        {
            this.$emit("clean_notice", "已取消。");
        },
        submit()
        {
            this.$emit("submit", this.submit_item);
        }
    }
}
</script>

<style lang="scss" scoped>
.ts.header
{
    margin-top: 0;
}

.ts.button
{
    font-weight: 400;
}
</style>
