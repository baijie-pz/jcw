<template>
    <section class="part-jmy-block">
        <div class="content">
            <column-title :titleObj="jmyPart.titleObj" />
            <top-class tabClass="" :classList="jmyPart.classList" partName="jmy" @classSelected="topClassSelected" />
            <second-class tabClass="" :classList="jmyPart.secondClassList" :topClassActiveIdx="topClassActive.jmy" />
            <third-class tabClass="" :classList="jmyPart.secondClassList" />
            <vertical-reactangle-list :itemList="jmyPart.list" />
            <pagination /> 
        </div>
    </section>
</template>

<script>
import columnTitle from '@/components/common/columnTitle';
import topClass from '@/components/common/topClass';
import secondClass from '@/components/common/secondClass';
import thirdClass from '@/components/common/thirdClass';
import verticalReactangleList from '@/components/common/verticalReactangleList';
import pagination from '@/components/common/pagination';


export default {
    props: [],
    components: {
        columnTitle,
        topClass,
        secondClass,
        thirdClass,
        verticalReactangleList,
        pagination
    },
    data() {
        return {
            topClassActive: {},
            jmyPart: {
                titleObj: {
                    title: '基木鱼单页',
                    descr: '基木鱼单页灵感源泉，get页面制作专项技能！'
                },
                pageUrl: {
                    path: 'jmy'
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
