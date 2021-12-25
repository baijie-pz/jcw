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
    padding-top: 27px;
    font-size: 0;
    .li {
        width: 391px;
        margin-top: 33px;
        display: inline-block;
        margin-right: 13.5px;
        &:nth-child(3n + 3) {
          margin-right: 0;
        }
        .img-wrap {
            width: 100%;
            height: 220px;
            display: inline-block;
            outline: 1px solid #B3B3B3;
            background-color: #F5F5F5;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .text {
            font-size: 22px;
            color: #4D4D4D;
            margin-top: 30px;
            text-align: center;
        }
    }
}
</style>