<template>
    <div class="container">
        <div class="part-1">
            <div class="left-wrap">
                <p class="title">
                    图片样式展示：
                </p>
                <p class="desc">
    
    
                    暂无说明
    
                </p>
                <div class="img-wrap">
                    <img src="" alt="" class="img">
                </div>
            </div>
            <div class="right-wrap">
                <p class="title">
                    投放展现样式：
                </p>
                <div class="img-wrap">
                    <img src="" alt="" class="img">
                </div>
            </div>
        </div>
    
        <div class="part-2">
            <p class="title">更多图片推荐:</p>
            <div class="list clear">
                <router-link class="li" v-for="(item, idx) in 4" :key="idx" to="/index/video">
                    <div class="img-wrap"><img class="img" src="../../assets/images/icon_1.png"></div>
                    <p class="name">活动宣传-爱美节项目汇报-A1</p>
                </router-link>
            </div>
        </div>
    
    </div>
</template>


<style lang="scss" scoped>
.container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    padding: 80px 0;
    user-select: none;
    .part-1 {
        .left-wrap {
            width: 840px;
            display: inline-block;
            margin-right: 48px;
            .title {
                height: 60px;
                background-color: #F2F2F2;
                border-radius: 10px;
                line-height: 60px;
                font-size: 24px;
                font-weight: bold;
                color: #333333;
                box-sizing: border-box;
                padding-left: 30px;
            }
            .desc {
                font-size: 24px;
                font-weight: 400;
                color: #4D4D4D;
                box-sizing: border-box;
                padding: 0 25px;
                margin: 38px 0 35px;
            }
            .img-wrap {
                width: 100%;
                height: 474px;
                background-color: #583219;
                overflow: hidden;
                .img {
                    width: 100%;
                    max-height: 100%;
                }
            }
        }
        .right-wrap {
            width: 308px;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: top;
            .title {
                padding-left: 25px;
            }
            .img-wrap {
                width: 100%;
                height: 547px;
                background-color: #FFFFFF;
                border: 1px solid #555555;
                box-sizing: border-box;
                margin-top: 36px;
                overflow: hidden;
                .img {
                    width: 100%;
                }
            }
        }
    }
    .part-2 {
        margin-top: 77px;
        .title {
            height: 60px;
            background-color: #F2F2F2;
            box-sizing: border-box;
            padding-left: 30px;
            font-size: 28px;
            font-weight: bold;
            color: #4D4D4D;
            line-height: 60px;
        }
        .list {
            margin-top: 35px;
            .li {
                width: 292px;
                float: left;
                margin-right: 10px;
                &:nth-child(4n + 4) {
                    margin-right: 0;
                }
                .img-wrap {
                    display: block;
                    height: 164px;
                    background-color: #F5F5F5;
                    border: 1px solid #B3B3B3;
                    overflow: hidden;
                    text-align: center;
                    line-height: 164px;
                    .img {
                        max-width: 100%;
                        vertical-align: middle;
                    }
                }
                .name {
                    margin-top: 23px;
                    font-size: 20px;
                    color: #4D4D4D;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>