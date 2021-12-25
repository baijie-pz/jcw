<template>
    <header class="header">
        <div class="nav-wrap">
            <div class="content">
                <a href="" class="logo-wrap">
                                                         <img src="../../assets/images/logo.png" alt="" class="logo">
                                                     </a>
                <ul class="nav-wrap clear">
                    <li>
                        <router-link to="/index/home">主页</router-link>
                    </li>
                    <li>
                        <router-link to="/index/video">视频案例</router-link>
                    </li>
                    <li>
                        <router-link to="/index/jmy">基木鱼单页</router-link>
                    </li>
                    <li>
                        <router-link to="/index/photo">图片案例</router-link>
                    </li>
                    <li>
                        <router-link to="/index/marketing">营销案例</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">联系我们</router-link>
                    </li>
                </ul>
            </div>
        </div>
    
        <section class="search-wrap">
            <div class="content">
                <div class="input-wrap-block">
                    <div class="input-wrap">
                        <img src="../../assets/images/icon_search.png" alt="" class="icon">
                        <input type="text" class="input" placeholder="请输入关键词或案例编号" v-model="searchValue">
                        <a class="search-btn">搜索一下</a>
                        <router-link :to="{ name: 'search', params: { 'searchValue': searchValue }}" class="search-btn">联系我们</router-link>
                    </div>
                    <p class="descr">
                        <span>海</span>
                        <span>量</span>
                        <span>案</span>
                        <span>例</span>
                        <span>供</span>
                        <span>您</span>
                        <span>选</span>
                        <span>择</span>
                    </p>
                </div>
    
            </div>
        </section>
    
    </header>
</template>

<script>
export default {
    data() {
        return {
            searchValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
.header {
    width: 100%;
    min-width: 1200px;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #fff;
    .nav-wrap {
        height: 120px;
        background: #292626;
        .content {
            @include safe-center;
            box-sizing: border-box;
            .logo-wrap {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                .logo {
                    // vertical-align: middle;
                }
            }
            .nav-wrap {
                float: right;
                height: 120px;
                line-height: 120px;
                li {
                    float: left;
                    margin-right: 62px;
                    &:nth-last-child(1) {
                        margin-right: 0;
                    }
                    a {
                        font-size: 24px;
                        color: #fff;
                        &:hover {
                            color: #EF8E3F;
                        }
                    }
                    .active {
                        color: #EF8E3F;
                    }
                    .router-link-active {
                        color: #EF8E3F;
                    }
                }
            }
        }
    }
    .search-wrap {
        height: 300px;
        background: url(../../assets/images/search_bg.png) center center no-repeat;
        background-size: cover;
        .content {
            @include safe-center;
            .input-wrap-block {
                width: 740px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .input-wrap {
                    height: 58px;
                    background-color: #FFFFFF;
                    border-radius: 29px;
                    position: relative;
                    box-shadow: 0px 0px 20px 0px #c5bdbd;
                    .icon {
                        width: 27px;
                        height: 27px;
                        position: absolute;
                        top: 50%;
                        left: 16px;
                        transform: translateY(-50%);
                    }
                    .input {
                        width: 500px;
                        height: 100%;
                        border-radius: 29px;
                        color: #808080;
                        font-size: 24px;
                        margin-left: 70px;
                        border: none;
                    }
                    .search-btn {
                        width: 140px;
                        height: 40px;
                        background-color: #EF8E3F;
                        border-radius: 20px;
                        position: absolute;
                        top: 50%;
                        right: 12px;
                        transform: translateY(-50%);
                        font-size: 24px;
                        color: #FFFFFF;
                        text-align: center;
                        line-height: 40px;
                    }
                }
                .descr {
                    width: 574px;
                    font-size: 20px;
                    color: #4D4D4D;
                    margin: 18px auto 0;
                    span {
                        margin-right: 53px;
                        position: relative;
                        height: 100%;
                        &::after {
                            content: "|";
                            position: absolute;
                            top: 3%;
                            left: 46px;
                        }
                        &:nth-last-child(1) {
                            margin-right: 0;
                            &::after {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>