<template>
    <div :class="['float-top-search',{ 'show': floatStatus }]">
        <div class="content">
            <a href="/" class="logo-wrap"><img src="../../assets/images/logo.png" alt="" class="logo"></a>
            <div class="search-wrap">
                <img src="../../assets/images/icon_search.png" alt="" class="icon">
                <input type="text" class="input" placeholder="请输入关键词或案例编号">
                <router-link :to="{ path: '/index/search', params: { 'searchValue': searchValue }}" class="search-btn">搜索一下</router-link>
    
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
    data() {
        return {
            floatStatus: false
        }
    },
    created() {
        // console.log(this.classList, 'classList', this.whiteTab);
    },
    mounted() {
        var that = this;
        floatController();

        function floatController() {
            window.addEventListener('scroll', _.throttle(scrollListener, 100));

            function scrollListener() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (!that.floatStatus && scrollTop >= 120) {
                    that.floatStatus = true;
                } else if (that.floatStatus && scrollTop < 120) {
                    that.floatStatus = false;
                }
            }
        }

    },
    computed: {},
    methods: {}
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
.float-top-search {
    width: 100%;
    height: 80px;
    background: #292626;
    position: fixed; // top: 0; 
    top: -200px;
    left: 0;
    z-index: 999999;
    // display: none;
    transition: all 0.5s ease-in-out;
    .content {
        @include safe-center;
        .logo-wrap {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            .logo {
                width: 138px;
                /* height: 52px; */
                vertical-align: middle;
            }
        }
        .search-wrap {
            width: 635px;
            height: 40px;
            background-color: #FFFFFF;
            border-radius: 25px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            .icon {
                width: 18px;
                height: 18px;
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
            }
            .input {
                width: 400px;
                height: 100%;
                color: #808080;
                font-size: 16px;
                margin-left: 40px;
            }
            .search-btn {
                width: 120px;
                height: 26px;
                background-color: #EF8E3F;
                border-radius: 14px;
                position: absolute;
                top: 50%;
                right: 12px;
                transform: translateY(-50%);
                font-size: 16px;
                color: #FFFFFF;
                text-align: center;
                line-height: 26px;
                user-select: none;
            }
        }
    }
}

.show {
    // display: block;
    top: 0;
}
</style>