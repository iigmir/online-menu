<template>
    <div>
        <div class="ts card">
            <div class="image">
                <img v-bind:src="item.image">
            </div>
            <div class="content">
                <h2> {{ item.name }} </h2>
                <p v-if="need_notice"> Notice: {{ item.notice }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
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
        need_notice()
        {
            return this.item.notice !== "";
        }
    }
};
</script>

<style lang="scss" scoped>
.ts.card
{
    flex-direction: row;
    margin-bottom: 0.5rem;
    &:not(.borderless) > .image:first-child img
    {
        border-radius: 0;
    }
}
</style>
