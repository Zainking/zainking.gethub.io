<template lang="jade">
    div
        TopBar(title='面试')
        h3.head
            | 面试提纲
            br
            span.time 2019.01.20 字节跳动面试
        span.title 经历
        p.content
            ul.list
                li 我是湖南大学应用化学专业本科18级毕业生，于2016年开始于百度前端学院自学编程
                li 17年加入湖南大学千年弦歌网络工作室，负责了一些校内及外包项目的工作
                li 18年在多抓鱼实习，从多抓鱼真正体验到了互联网公司的工作氛围及流程
                li 毕业后签约于一家医疗公司，被分配于小游戏开发业务组，对游戏产生兴趣后转入现在的游戏公司工作
        span.title 项目
        p.content 
            ul.list
                li 自己作品：个人网站 博客 开源 Pixi 教程
                li 在工作室的作品：新生宝典 人员管理系统 招新页面
                li 工作经历过的项目：多抓鱼 现公司的两个游戏项目
        span.title 技能
        p.content
            ul.list
                li 熟悉的前端框架 Vue , React 及相关生态, 了解 Angular
                li 熟悉h5游戏框架Cocos Creator, Egret，了解其他渲染引擎，物理引擎等
                li 熟悉 Chrome 抓包调试打断点，性能分析等
                li 了解 Node.js 编程
                li 了解 Linux 命令行， Shell 脚本
</template>
<style lang="stylus" scoped>
    $maincolor = #ffa500;
    h3.head
        font-size 1.2em
        font-weight 400
        text-align center
        margin 60px 0
        span.time
            font-size 0.8em
            color #aaa
    span.title::before
        content ''
        width 0.5em
        height 0.5em
        margin-right 0.2em
        display inline-block
        background-color $maincolor
    span.title
        display flex
        align-items center
        justify-content center
        margin-bottom 20px
    p.content
        color #555
        margin-bottom 40px
        font-size 0.9em
        .list
            margin-left 40px
            li
                margin 10px 0
</style>
