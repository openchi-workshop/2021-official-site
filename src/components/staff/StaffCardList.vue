<template>
    <div class="cardList">
        <staff-card-list-item 
            v-for="{id, ...item} in items"
            :key="id"
            v-bind="item"
            class="cardList__item"
        />
    </div>
</template>

<script>
import StaffCardListItem from "./StaffCardListItem.vue";

export default {
    props: {
        items: {
            type: Array
        }
    },
    components: {
        StaffCardListItem
    }
}
</script>

<style lang="scss">
.cardList {
    display: flex;
    flex-wrap: wrap;

    &__item {
        width: 24%;
        margin-right: 8%;
        margin-bottom: 4%;
    }
}
</style>