<template>
    <div class="pagination">
        <span class="total">共6条记录</span>
        <span :class="[{ 'forbid': currentPage == 0 },'prev']" @click="prevPage">上一页</span>
        <span v-for="(item, idx) in totalPage" :key="idx" :class="[currentPage == idx ? 'active' : '','page']" @click="changePage(idx)">{{item}}</span>
        <span :class="[{ 'forbid': currentPage == totalPage - 1 },'next']" @click="nextPage">下一页</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 0,
            totalPage: 5
        }
    },
    methods: {
        changePage(page) {
            if (page == this.currentPage) {
                return;
            }
            var totalPage = this.totalPage;
            if (page >= 0 && page < totalPage) {
                console.log(page);
                this.currentPage = page;
            }
        },
        prevPage() {
            var page = this.currentPage - 1;
            this.changePage(page);
        },
        nextPage() {
            var page = this.currentPage + 1;
            this.changePage(page);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
.pagination {
    @include safe-center;
    text-align: center;
    margin-top: 60px;
    span {
        display: inline-block;
        padding: 3px 8px;
        background-color: #B3B3B3;
        color: #fff;
        border-radius: 5px;
        margin-right: 8px;
        cursor: pointer;
        font-size: 14px;
        user-select: none;
        &:nth-last-child(1) {
            margin-right: 0;
        }
    }
    .total {
        cursor: default;
    }
    .forbid {
        cursor: no-drop;
    }
    .active {
        cursor: no-drop;
        background-color: #EF8E3F;
    }
}
</style>
