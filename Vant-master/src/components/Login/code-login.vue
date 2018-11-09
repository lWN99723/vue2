<template>
    <div class="code-login">
        <div class="code-login-bg">
            <img :src="logo" />
        </div>
        <div class="wrap">
            <van-cell-group>
                <van-field v-model="phone" label="手机号" left-icon="contact" placeholder="请输入手机号" />
                <van-field v-model="sms" center clearable label="短信验证码" left-icon="pending-evaluate" placeholder="请输入短信验证码">
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>
            <van-button size="large" type="primary">登陆</van-button>
        </div>
    </div>
</template>



<script>
    import {
        Button,
        Field,
    } from "vant";
    import logo from '@/assets/images/xianzhi-logo.png'
    export default {
        name: "code-login",
        components: {
            [Field.name]: Field,
            [Button.name]: Button,
        },
        data() {
            return {
                logo,
            };
        },
        methods: {}
    };
</script>

<style lang="scss">
    .code-login {
        &-bg {
            width: 100%;
            height: 260px;
            background: url('~@/assets/images/login_bg.3a93a8bf.jpg') center center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            img {
                width: 300px;
                height: 300px;
            }
        }
        .wrap {
            width: 90%;
            margin: -30px auto 0 auto;
            .van-button {
                border-radius: 5px;
            }
        }
        .van-cell  {
            border-radius: 10px;
            margin-bottom: 20px;
            &:first-child {
                padding: 13px 15px;
            }
            
        }
    }
</style>