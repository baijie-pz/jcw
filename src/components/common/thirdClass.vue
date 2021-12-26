<template>
    <div class="tag-wrap-block">
        <div class="tag-wrap">
            <span v-for="(item, idx) in classList" :key="idx" :class="[{ 'active': idx == active },'tag']" @click="selected(idx)">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        classList: Array,
        topClassActiveIdx: Number
    },
    data() {
        return {
            active: 0
        }
    },
    created() {
        // console.log(this.classList, 'secondclassList');
    },
    watch: {

    },
    computed: {
        triangleLeft() {
            var idx = this.topClassActiveIdx;
            console.log(idx, 'idx secondClass');
            var triangleLeft = '';
            switch (idx) {
                case 0:
                    triangleLeft = "15%";
                    break;
                case 1:
                    triangleLeft = "49%";
                    break;
                case 2:
                    triangleLeft = "82.5%";
                    break;
                default:
                    triangleLeft = "15%";
                    break;
            }
            return triangleLeft;
        }
    },
    methods: {
        classObject(idx) {
            let length = this.classList.length;
            console.log(length, 'length');
            return {
                'span-3': length == 3 ? true : false,
                'span-4': length == 4 ? true : false,
                'active': this.active == idx ? true : false

            }

        },
        selected(idx) {
            this.active = idx;
        }
    }
}
</script>

<style lang="scss" scoped>
.tag-wrap-block {
    margin-top: 30px;
    .tag-wrap {
        background-color: #F5F5F5;
        border-radius: 10px;
        padding: 10px 32px 30px 32px;
        box-sizing: border-box;
        font-size: 0;
        position: relative;
        .tag {
            display: inline-block;
            width: 150px;
            height: 40px;
            background-color: #F5F5F5;
            border: 1px solid #CCCCCC;
            border-radius: 10px;
            font-size: 17px;
            color: #404040;
            text-align: center;
            line-height: 40px;
            margin-top: 20px;
            margin-right: 44px;
            &:nth-child(6n+6) {
                margin-right: 0;
            }
            &:hover {
                color: #EF8E3F;
                border-color: #EF8E3F;
            }
        }
        .active {
            color: #EF8E3F;
            border-color: #EF8E3F;
        }
    }
}
</style>