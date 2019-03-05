<template>
    <div class="ts modals dimmer active">
        <dialog id="modal" class="ts modal" open>
            <i class="close icon" v-on:click="cancel()"></i>
            <div class="ts header">
                <h3> 訂購確認 </h3>
            </div>
            <div class="content">
            </div>
            <div class="actions">
                <button class="ts negative button" v-on:click="cancel()"> 取消訂購 </button>
                <button class="ts positive button" v-on:click="submit()"> 確認訂購 </button>
            </div>
        </dialog>
    </div>
</template>

<script>
export default {
    props:
    {
        order_list:
        {
            type: Array,
            default() { return {}; }
        }
    },
    data()
    {
        return {};
    },
    computed:
    {
    },
    methods:
    {
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
