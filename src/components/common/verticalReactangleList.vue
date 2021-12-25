<template>
    <ul class="list-wrap">
    
        <!--取得一个分页DataTable-->
        <li class="li" v-for="(item, idx) in itemList" :key="idx">
            <a class="img-wrap" :href="item.url">
                      <img :src="item.img_url" alt="">
                    </a>
            <p class="text">{{item.name}}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        itemList: Object
    },
    created() {
        console.log(this.itemList, 'itemList');
    },
}
</script>

<style lang="scss" scoped>
.list-wrap {
    padding-top: 60px;
    font-size: 0;
    .li {
        width: 291px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        cursor: pointer;
        margin-right: 12px;
        &:nth-child(4n + 4) {
            margin-right: 0;
        }
        .img-wrap {
            width: 100%;
            height: 517px;
            display: inline-block;
            background-color: #F5F5F5;
            outline: 1px solid #B3B3B3;
            text-align: center;
            line-height: 517px;
            overflow: hidden;
            img {
                width: 100%; // height: 100%;
                vertical-align: middle;
            }
        }
        .text {
            font-size: 18px;
            color: #4D4D4D;
            margin-top: 30px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>