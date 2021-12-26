<template>
    <section class="part-video-block">
        <div class="content">
            <column-title :titleObj="videosPart.titleObj" />
            <top-class tabClass="" partName="photo" :classList="photoPart.classList" @classSelected="topClassSelected" />
            <second-class :classList="videosPart.secondClassList" :topClassActiveIdx="topClassActive.photo" />
            <horizontal-reactangle-list :itemList="videosPart.list" />
            <pagination />
        </div>
    </section>
</template>

<script>
import columnTitle from '@/components/common/columnTitle';
import topClass from '@/components/common/topClass';
import secondClass from '@/components/common/secondClass';
import horizontalReactangleList from '@/components/common/horizontalReactangleList';
import pagination from '@/components/common/pagination';


export default {
    props: [],
    components: {
        columnTitle,
        topClass,
        secondClass,
        horizontalReactangleList,
        pagination
    },
    data() {
        return {
            topClassActive: {},
            videosPart: {
                titleObj: {
                    title: '视频案例',
                    descr: '应有尽有的视频样式可供挑选，专业视频制作团队倾力服务！'
                },
                pageUrl: {
                    path: 'video'
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
            photoPart: {
                classList: [{
                        name: '宣传片'
                    },
                    {
                        name: '剧场类'
                    },
                    {
                        name: '活动宣传'
                    }
                ],
            }
        }
    },
    methods: {
        topClassSelected(activeObj) {
            // console.log(activeObj, 'topClassSelected');
            this.topClassActive[activeObj['partName']] = activeObj['idx'];
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
section {
    background-color: #fff;
    .content {
        @include safe-center;
        padding: 80px 0;
    }
}
</style>
