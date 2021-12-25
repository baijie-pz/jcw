<template>
    <footer class="footer">
        <section class="form-wrap">
            <div class="content">
                <form id="feedback_form" name="feedback_form" url="/plugins/feedback/ajax.ashx?action=add&amp;site=main" class="form">
                    <div class="input-wrap">
    
                        <input id="txtUserName" name="txtUserName" type="text" class="input name" placeholder="">
                    </div>
                    <div class="input-wrap">
                        <input id="txtUserTel" name="txtUserTel" type="text" class="input phone" placeholder="">
                    </div>
                    <div class="input-wrap">
                        <input id="txtTitle" name="txtTitle" type="text" class="input company" placeholder="">
                    </div>
    
                    <div class="select-wrap">
                        <p><input type="checkbox" name="txtContent" value="1" class="checkbox"><label>基木鱼套餐</label> </p>
                        <p><input type="checkbox" name="txtContent" value="2" class="checkbox"> <label>数据分析方案</label></p>
                        <p><input type="checkbox" name="txtContent" value="3" class="checkbox"> <label>新媒体账号运营</label></p>
                        <p><input type="checkbox" name="txtContent" value="4" class="checkbox"><label>短视频拍摄运营</label> </p>
                        <p><input type="checkbox" name="txtContent" value="5" class="checkbox"> <label>营销活动策划</label></p>
                        <p><input type="checkbox" name="txtContent" value="6" class="checkbox"> <label>宣发支持</label></p>
                    </div>
                    <input id="btnSubmit" name="btnSubmit" type="submit" class="submit-btn" value="立即提交">
                </form>
                <img src="../../assets/images/icon_1.png" alt="" class="img" width="482" height="399">
            </div>
    
        </section>
        <div class="contact-wrap">
            <div class="content clear">
                <div class="left-wrap">
                    <ul class="bottom-nav-wrap clear">
                        <li>
                            <router-link to="/index">主页</router-link>
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
                    <div class="search-wrap">
                        <img src="../../assets/images/logo.png" alt="" class="logo">
                        <div class="input-wrap">
                            <img src="../../assets/images/icon_search.png" alt="" class="icon">
                            <input type="text" class="input" placeholder="请输入关键词或案例编号" id="keywords2" name="keywords2" onkeydown="if(event.keyCode==13){SiteSearch('/search.html', '#keywords2');return false};" x-webkit-speech="">
                            <a class="search-btn">搜索一下</a>
                        </div>
                    </div>
                    <p class="address">
                        <span class="label">公司地址:</span>
                        <span class="value">武汉市江夏区光谷大道藏龙岛百捷科技园百捷大厦A座</span>
                    </p>
                </div>
                <div class="right-wrap">
                    <div class="img-wrap">
                        <img src="../../assets/images/qrcode.png" alt="" class="qrcode">
                    </div>
                    <div class="phone-wrap">
                        <p class="label">商务合作热线：</p>
                        <p class="number">13387572441</p>
                        <p class="business-hour">9:00-21:00</p>
                    </div>
                </div>
            </div>
    
        </div>
    
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
.footer {
    width: 100%;
    min-width: 1200px;
    max-width: 1920px;
    margin: 0 auto;
    background-color: #fff;
    .contact-wrap {
        height: 178px;
        background-color: #292626;
        .content {
            @include safe-center;
            .left-wrap {
                width: 725px;
                height: 100%;
                float: left;
                padding: 32px 0 0;
                box-sizing: border-box;
                position: relative;
                &::after {
                    content: "";
                    width: 1px;
                    height: 124px;
                    background-color: #F5F5F5;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                }
                .bottom-nav-wrap {
                    font-size: 18px;
                    font-weight: 400;
                    color: #FFFFFF;
                    li {
                        float: left;
                        margin-right: 40px;
                        &:nth-last-child(1) {
                            margin-right: 0;
                            a {
                                &::after {
                                    display: none;
                                }
                            }
                        }
                        a {
                            color: #fff;
                            position: relative;
                            &::after {
                                content: "";
                                width: 1px;
                                height: 16px;
                                background-color: #F5F5F5;
                                position: absolute;
                                top: 50%;
                                right: -20px;
                                transform: translateY(-50%);
                            }
                        }
                    }
                }
                .search-wrap {
                    margin-top: 20px;
                    height: 50px;
                    .logo {
                        width: 170px;
                        height: 100%;
                        vertical-align: middle;
                    }
                    .input-wrap {
                        display: inline-block;
                        width: 300px;
                        height: 35px;
                        background-color: #FFFFFF;
                        border-radius: 18px;
                        position: relative;
                        margin-left: 43px;
                        vertical-align: middle;
                        .icon {
                            width: 16px;
                            height: 16px;
                            position: absolute;
                            top: 50%;
                            left: 11px;
                            transform: translateY(-50%);
                        }
                        .input {
                            width: 170px;
                            height: 100%;
                            color: #808080;
                            font-size: 14px;
                            margin-left: 32px;
                        }
                        .search-btn {
                            width: 84px;
                            height: 24px;
                            background-color: #EF8E3F;
                            border-radius: 12px;
                            position: absolute;
                            top: 50%;
                            right: 7px;
                            transform: translateY(-50%);
                            font-size: 14px;
                            color: #FFFFFF;
                            text-align: center;
                            line-height: 24px;
                        }
                    }
                }
                .address {
                    width: 600px;
                    font-size: 18px;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin-top: 12px;
                }
            }
            .right-wrap {
                width: 400px;
                height: 100%;
                float: right;
                box-sizing: border-box;
                padding-top: 32px;
                text-align: right;
                .img-wrap {
                    display: inline-block;
                    width: 115px;
                    height: 115px;
                    background-color: #F5F5F5;
                    text-align: center;
                    line-height: 115px;
                    .qrcode {
                        width: 105px;
                        height: 105px;
                        vertical-align: middle;
                        /* line-height: 114px; */
                        display: inline-block;
                    }
                }
                .phone-wrap {
                    display: inline-block;
                    color: #FFFFFF;
                    margin-left: 20px;
                    vertical-align: top;
                    text-align: left;
                    padding-top: 6px;
                    .label {
                        font-size: 22px;
                        line-height: 22px;
                    }
                    .number {
                        font-size: 28px;
                        line-height: 28px;
                        font-weight: bold;
                        margin: 13px 0;
                    }
                    .business-hour {
                        width: 95px;
                        height: 26px;
                        border: 1px solid #F5F5F5;
                        border-radius: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: #abaaaa;
                        text-align: center;
                        line-height: 26px;
                    }
                }
            }
        }
    }
}

/**   暂时保留   **/

.footer .form-wrap {
    background-color: #F5F5F5;
    height: 572px;
    box-sizing: border-box;
    padding: 77px 0 0;
}

.footer .form-wrap .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
}

.footer .form-wrap .content .form {
    width: 653px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
}

.footer .form-wrap .content .form .input-wrap {
    margin-bottom: 17px;
    position: relative;
    font-size: 24px;
    color: #808080;
}

.footer .form-wrap .content .form .input-wrap::before {
    content: "您的姓名：";
    font-size: 24px;
    color: #808080;
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
}

.footer .form-wrap .content .form .input-wrap:nth-child(1)::before {
    content: "您的姓名：";
}

.footer .form-wrap .content .form .input-wrap:nth-child(2)::before {
    content: "联系电话：";
}

.footer .form-wrap .content .form .input-wrap:nth-child(3)::before {
    content: "公司名称：";
}

.footer .form-wrap .content .form .input-wrap .input {
    display: block;
    width: 100%;
    height: 50px;
    background-color: #E1E1E1;
    border-radius: 10px;
    font-size: 24px;
    color: #808080;
    padding: 0 20px 0 135px;
    box-sizing: border-box;
}

.footer .form-wrap .content .form .select-wrap {
    height: 126px;
    background-color: #E1E1E1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 4px 20px 0 25px;
    font-size: 0;
}

.footer .form-wrap .content .form .select-wrap p {
    width: 180px;
    display: inline-block;
    margin-top: 21px;
}

.footer .form-wrap .content .form .select-wrap p:not(:nth-child(3n+3)) {
    margin-right: 34px;
}

.footer .form-wrap .content .form .select-wrap p .checkbox {
    width: 24px;
    height: 24px;
    background-color: #F2F2F2;
    border: 1px solid #BFBFBF;
    appearance: auto;
    -webkit-appearance: auto;
    vertical-align: middle;
}

.footer .form-wrap .content .form .select-wrap p label {
    vertical-align: middle;
    font-size: 20px;
    color: #292626;
    margin-left: 9px;
}

.footer .form-wrap .content .form .submit-btn {
    width: 100%;
    display: block;
    height: 50px;
    background-color: #EF8E3F;
    border-radius: 10px;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    line-height: 50px;
    margin-top: 24px;
    cursor: pointer;
}

.footer .form-wrap .content .img {
    vertical-align: middle;
    margin-left: 60px;
}
</style>