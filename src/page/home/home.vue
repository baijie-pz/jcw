<template>
    <div class="container">
        <section class="part-video-block">
            <div class="content">
                <column-title :titleObj="videosPart.titleObj" />
                <top-class tabClass="" :classList="videosPart.classList" />
                <horizontal-reactangle-list :itemList="videosPart.list" />
                <view-more-btn :to="videosPart.pageUrl" />
            </div>
        </section>
        <section class="part-jmy-block">
            <div class="content">
                <column-title :titleObj="jmyPart.titleObj" />
                <top-class tabClass="" :classList="jmyPart.classList" />
                <second-class tabClass="" :to="jmyPart.pageUrl" :classList="jmyPart.secondClassList" />
                <vertical-reactangle-list :itemList="jmyPart.list" />
                <view-more-btn :to="jmyPart.pageUrl" />
            </div>
        </section>
        <section class="part-photo-block">
            <div class="content">
                <column-title :titleObj="videosPart.titleObj" />
                <top-class tabClass="" :classList="videosPart.classList" />
                <second-class class="second-class" :to="videosPart.pageUrl" :classList="videosPart.secondClassList" triangleWhite />
                <horizontal-reactangle-list :itemList="videosPart.list" />
                <view-more-btn :to="videosPart.pageUrl" />
            </div>
        </section>
    </div>
</template>

<script>
import columnTitle from '@/components/common/columnTitle';
import topClass from '@/components/common/topClass';
import secondClass from '@/components/common/secondClass';
import horizontalReactangleList from '@/components/common/horizontalReactangleList';
import verticalReactangleList from '@/components/common/verticalReactangleList';
import viewMoreBtn from '@/components/common/viewMoreBtn';
export default {
    components: {
        columnTitle,
        topClass,
        secondClass,
        horizontalReactangleList,
        viewMoreBtn,
        verticalReactangleList
    },
    data() {
        return {
            videosPart: {
                titleObj: {
                    title: '视频案例',
                    descr: '应有尽有的视频样式可供挑选，专业视频制作团队倾力服务！'
                },
                pageUrl: {
                    name: 'videos'
                },
                classList: [{
                        name: '宣传片'
                    },
                    {
                        name: '剧场类'
                    },
                    {
                        name: '活动宣传'
                    },
                    {
                        name: '口播类'
                    }
                ],
                secondClassList: [{
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                ],
                list: [{
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    }
                ]
            },
            jmyPart: {
                titleObj: {
                    title: '基木鱼单页',
                    descr: '基木鱼单页灵感源泉，get页面制作专项技能！'
                },
                pageUrl: {
                    name: 'jmy'
                },
                classList: [{
                        name: '教育'
                    },
                    {
                        name: '医疗'
                    },
                    {
                        name: '医美'
                    }
                ],
                secondClassList: [{
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                    {
                        name: '兴趣培训'
                    },
                ],
                list: [{
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    },
                    {
                        img_url: 'http://zlhxal.hbbaidu.com/upload/202111/08/thumb_202111081524302753.JPG',
                        url: '',
                        name: '活动宣传-爱美节项目汇报-A1'
                    }
                ]
            },
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
section {
    .content {
        @include safe-center;
        padding: 80px 0;
    }
}

.part-video-block,
.part-photo-block {
    background-color: #f5f5f5;
}

.part-jmy-block {
    background-color: #fff;
}
.part-photo-block {
  .second-class {
    background-color: #fff;
  }
}
</style>
