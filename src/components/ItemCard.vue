<template>
    <div>
        <div class="ts card">
            <div class="image">
                <img v-bind:src="item.image">
            </div>
            <div class="content">
                <p>你將會在這裡看見一個魔法師的日常生活，</p>
                <p>沒錯，只要你能夠單身三十年，</p>
                <p>你也可以跟我一樣成為魔法師。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    props: {
        item: {
            type: Object,
            default() { return {}; }
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
