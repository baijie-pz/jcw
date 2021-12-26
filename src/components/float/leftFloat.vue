<template>
    <div :class="['float-nav', { 'show': floatStatus }]" ref="floatNav">
        <div class="block">
            <ul class="nav-wrap">
                <li>
                    <router-link to="/index">主页</router-link>
                </li>
                <li>
                    <router-link to="/index/video" exact-path>视频案例</router-link>
                </li>
                <li>
                    <router-link to="/index/jmy" exact-path>基木鱼单页</router-link>
                </li>
                <li>
                    <router-link to="/index/photo" exact-path>图片案例</router-link>
                </li>
                <li>
                    <router-link to="/index/marketing" exact-path>营销案例</router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-path>联系我们</router-link>
                </li>
            </ul>
            <div class="qrcode-wrap">
                <img src="../../assets/images/qrcode.png" alt="" class="qrcode">
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
        let that = this;
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
.float-nav {
    width: 141px;
    height: 461px;
    box-sizing: border-box;
    background-color: #EF8E3F;
    border-radius: 30px;
    position: fixed;
    top: 257px;
    left: -200px;
    z-index: 999999;
    transition: all 0.5s ease-in-out;
    .block {
        padding: 29px 0 0 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .nav-wrap {
            position: relative;
            text-align: center;
            &::after {
                content: "";
                width: 24px;
                height: 3px;
                background-color: #FFFFFF;
                position: absolute;
                bottom: -24px;
                left: 50%;
                transform: translateX(-50%);
            }
            li {
                font-size: 20px;
                font-family: Source Han Sans CN;
                font-weight: 300;
                color: #FFFFFF;
                margin-bottom: 24px;
                line-height: 20px;
                &:nth-last-child(1) {
                    margin-bottom: 0;
                }
                a {
                    color: #fff;
                }
            }
        }
        .qrcode-wrap {
            width: 90px;
            height: 90px;
            background-color: #FFFFFF;
            position: relative;
            font-size: 0;
            margin: 47px auto 0;
            &::after {
                content: "扫一下联系我们";
                width: 98px;
                font-size: 14px;
                font-family: Source Han Sans CN;
                font-weight: 800;
                color: #FFFFFF;
                position: absolute;
                bottom: -33px;
                left: 50%;
                transform: translateX(-50%);
            }
            .qrcode {
                max-width: 100%;
                max-height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

.show {
    left: 0;
}
</style>