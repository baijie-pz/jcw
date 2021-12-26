<template>
    <div class="container">
        <div class="part-1">
            <div class="video-wrap clear">
                <div class="left-wrap">
                    <video src="http://zlhxal.hbbaidu.com/upload/202111/08/202111081528323700.mp4" alt="" class="video" muted="" controls="" preload=""></video>
                </div>
                <div class="right-wrap">
                    <p class="row">
                        <span class="label">所属行业:</span>
                        <span class="value">职业培训</span>
                    </p>
                    <p class="row">
                        <span class="label">视频类型:</span>
                        <span class="value">活动宣传</span>
                    </p>
                    <p class="row">
                        <span class="label">视频时长:</span>
                        <span class="value">2分37秒</span>
                    </p>
                    <p class="row">
                        <span class="label">服务价格:</span>
                        <span class="value">4000元</span>
                    </p>
                    <p class="row last-row">
                        <span class="label">服务内容:</span>
                        <span class="value">单色舞蹈，全称“单色国际（连锁）舞蹈培训”，中国舞蹈培训行业知名的全国连锁品牌。年专注舞蹈艺术教育，培养了一大批舞蹈人才和艺术工作者。</span>
                    </p>
                </div>
            </div>
        </div>
    
        <div class="part-2">
            <p class="title">更多视频推荐:</p>
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
        .video-wrap {
            height: 450px;
            .left-wrap {
                width: 800px;
                height: 100%;
                box-sizing: border-box;
                float: left;
                background-color: #000;
                .video {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: fill;
                }
            }
            .right-wrap {
                width: 376px;
                box-sizing: border-box;
                float: right;
                text-align: right;
                .row {
                    color: #4D4D4D;
                    height: 40px;
                    background: #F2F2F2;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    line-height: 40px;
                    box-sizing: border-box;
                    padding: 0 13px;
                    text-align: left;
                    &:nth-last-child(1) {
                        margin-bottom: 0;
                    }
                    .label {
                        font-size: 20px;
                        font-weight: bold;
                        margin-right: 10px;
                    }
                    .value {
                        font-size: 18px;
                    }
                }
                .last-row {
                    height: 205px;
                    margin-top: 5px;
                    .value {
                        display: block;
                        line-height: 30px;
                        height: 73%;
                        overflow: hidden;
                    }
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