<template>
    <div class="book-card">
        <div class="thumb">
            <img :src="book.image" mode="aspectFit" class="img" alt="">
        </div>
        <div class="detail">
            <div class="row">
                <div class="right">
                    {{book.rate}}
                </div>
                <div class="left">
                    {{book.title}}
                </div>
            </div>
            <div class="row">
                <div class="right">
                    浏览量：
                </div>
                <div class="left">
                    {{book.author}}

                </div>
            </div>
            <div class="row">
                <div class="right">
                    添加人
                </div>
                <div class="left">
                    {{book.publisher}}

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['book'],
    }
</script>

<style lang="scss">
.book-card{
    padding: 5px;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    .thumb{
        width:90px;
        height: 90px;
        float: left;
        margin: 0 auto;
        overflow: hidden;
        .img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .detail{
        margin-left: 100px;
        .row{
            line-height: 20px;
            margin-bottom: 3px;
        }
        .right{
            float: right;
        }
        .left{
            margin-right: 80px;
        }
    }
}
</style>
