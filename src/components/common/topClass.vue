<template>
    <div class="top-class">
        <span v-for="(item, idx) in classList" :key="idx" :class="classObject(idx)" @click="selected(idx)">
                    {{ item.name }}
                    </span>
    </div>
</template>

<script>
export default {
    props: {
        classList: Array
    },
    data() {
        return {
            active: 0
        }
    },
    created() {
        console.log(this.classList, 'classList');
    },
    computed: {
        // classObject(idx) {
        //   let that = this;
        //     return function() {
        //         let length = that.classList.length;
        //         return {
        //             'span-3': length == 3 ? true : false,
        //             'span-4': length == 4 ? true : false,
        //             'active': that.active == idx ? true : false
        //         }
        //     }

        // }
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
.top-class {
    margin-top: 38px;
    font-size: 0;
    span {
      cursor: pointer;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
    .span-4 {
        width: 267px;
        height: 60px;
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        border-radius: 10px;
        text-align: center;
        line-height: 60px;
        display: inline-block;
        font-size: 24px;
        font-weight: 500;
        color: #404040;
        margin-right: 41px;
    }
    .span-3 {
        width: calc((100% - 32px) / 3);
        height: 60px;
        background-color: #F5F5F5;
        border: 1px solid #CCCCCC;
        border-radius: 10px;
        font-size: 28px;
        font-weight: bold;
        color: #404040;
        display: inline-block;
        text-align: center;
        line-height: 60px;
        box-sizing: border-box;
        margin-right: 16px;
        cursor: pointer;
    }
    .active {
        color: #fff;
        background-color: #EF8E3F;
        border-color: #EF8E3F;
    }
}
</style>