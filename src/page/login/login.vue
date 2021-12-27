<template>
    <el-container class="container">
        <el-main>
            <el-form ref="form" :model="form" class="form" label-position="left" label-width="60px" label-suffix=":">
                <p class="title">会员登录</p>
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.passwd"></el-input>
                </el-form-item>
                <!-- <el-form-item> -->
                    <el-button type="primary" class="submit-btn" @click="onSubmit">登录</el-button>
                <!-- </el-form-item> -->
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
// import {
//   elContainer,
//   elMain
//   } from 'element-plus';
export default {
    // components: {
    //     elContainer,
    //     elMain
    // },
    data() {
        return {
            form: {
                name: '',
                passwd: ''
            },
        }

    },
    mounted() {
        console.log(process.env.NODE_ENV, 'process.env.NODE_ENV ');
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../style/utils";
.container {
    height: 100%;
    position: relative;
    background-color: #f1f1f1;
    .form {
        width: 350px;
        height: 230px;
        position: absolute;
        background-color: #fff;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        .title {
            margin-bottom: 20px;
            color: #555;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 3px;
            line-height: 30px;
            height: 30px;
            text-align: center;
        }
        .submit-btn {
          width: 100%;
        }
    }
}
</style>
 