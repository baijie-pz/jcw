<template>
    <div class="tag-wrap-block">
        <i :class="[triangleWhite ? 'triangle-white' : 'triangle']" :style="{left: triangleLeft}"></i>
        <div class="tag-wrap">
            <span v-for="(item, idx) in classList" :key="idx" :class="[{ 'active': idx == active },'tag']" @click="selected(idx)">{{item.name}}</span>
            <router-link v-if="to" :to="to" class="tag more-tag">更多分类&gt;&gt;</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        triangleWhite: Boolean,
        to: Object,
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
    position: relative;
    margin-top: 20px;
    background-color: #F5F5F5;
    .triangle {
        position: absolute;
        top: -40px;
        left: 182px;
        &::before {
            content: "";
            width: 0;
            height: 0;
            border-width: 20px 14px;
            border-style: solid;
            border-color: transparent transparent #F5F5F5 transparent;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .triangle-white {
        position: absolute;
        top: -40px;
        left: 180px;
        &::before {
            content: "";
            width: 0;
            height: 0;
            border-width: 20px 14px;
            border-style: solid;
            border-color: transparent transparent #fff transparent;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .tag-wrap {
        width: 100%;
        box-sizing: border-box;
        padding: 6px 37px 36px;
        font-size: 0;
        position: relative;
        .tag {
            width: 200px;
            height: 60px;
            border: 1px solid #CCCCCC;
            border-radius: 10px;
            text-align: center;
            line-height: 60px;
            display: inline-block;
            box-sizing: border-box;
            margin-top: 30px;
            font-size: 24px;
            font-weight: 500;
            color: #404040;
            cursor: pointer;
            user-select: none;
            margin-right: 31px;
            &:nth-child(5n+5) {
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
        .more-tag {
            background-color: #FFF2E7;
            border: 1px solid #FFDABB;
            font-weight: bold;
            color: #EF8E3F;
        }
    }
}
</style>